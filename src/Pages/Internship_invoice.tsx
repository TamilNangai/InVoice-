import { saveAndPrint } from "@/utils/saveAndPrint";
import { useState, useEffect, useRef } from "react"
import Bill from '@/Components/Invoice/Bill'
import Header from "@/Components/Nav/Header"
import Feeform from "@/Components/Form/Feeform"
import Programform from "@/Components/Form/Programform"
import Stdform from "@/Components/Form/Stdform"
import Buttons from '@/Components/Button/Buttons'
import vectora from "@/assets/Vectora.png"
import PriceForm from "@/Components/Form/Priceform"
import { getSettings } from "@/utils/getSettings"
import { validateForm, validateInternshipInvoice } from "@/utils/useInvoiceValidation"
import { generateInvoiceId } from "@/utils/generateInvoiceId"
import { showSuccess, showConfirm } from "@/utils/alert";

type InvoiceData = {
  student: {
    studentName: string;
    email: string;
    phone: string;
    college: string;
  };

  program: {
    internship: string;
    batch: string;
    start: string;
    trainer: string;
    enddate: string;
  };

  fees: {
    training: number;
    certificate: number;
    tax: number;
    internship: number;
    discount: number;
  };

  price: {
    total: number;
    due: number;
    paid: number;
    duedate: string;
    paymentMethod: string;
  };
};

// ✅ Load draft
const getInitialInvoiceData = (): InvoiceData => {
  const saved = localStorage.getItem("internship_invoice_data")
  if (saved) return JSON.parse(saved)

  return {
    student: { studentName: "", email: "", phone: "", college: "" },
    program: { internship: "", batch: "", start: "", trainer: "", enddate: "" },
    fees: { training: 0, certificate: 0, tax: 0, internship: 0, discount: 0 },
    price: { total: 0, due: 0, paid: 0, duedate: "", paymentMethod: "" }
  }
}

const Internship_invoice = () => {
  // ✅ Load invoice ID from draft
  const [invoiceId, setInvoiceId] = useState(() => {
    return localStorage.getItem("internship_invoice_id") || generateInvoiceId()
  })

  const [invoiceData, setInvoiceData] = useState<InvoiceData>(getInitialInvoiceData)

  const subtotal =
    Number(invoiceData.fees.training || 0) +
    Number(invoiceData.fees.certificate || 0) +
    Number(invoiceData.fees.internship || 0)

  const gstTotal =
    (subtotal * Number(invoiceData.fees.tax || 0)) / 100

  const discount = Number(invoiceData.fees.discount || 0)

  const totalAmount = Math.round(subtotal + gstTotal - discount)

  const paidAmount = Number(invoiceData.price.paid || 0)

  const dueAmount = Math.max(totalAmount - paidAmount, 0)

  // ✅ Save draft automatically
  useEffect(() => {
    localStorage.setItem("internship_invoice_data", JSON.stringify(invoiceData))
    localStorage.setItem("internship_invoice_id", invoiceId)
  }, [invoiceData, invoiceId])

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      const hasData =
        invoiceData.student.studentName ||
        invoiceData.student.email ||
        invoiceData.student.phone ||
        invoiceData.student.college ||
        invoiceData.program.internship ||
        invoiceData.price.paid > 0;

      if (!hasData) return;

      e.preventDefault();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [invoiceData]);

  useEffect(() => {
    setInvoiceData(prev => ({
      ...prev,
      price: {
        ...prev.price,
        total: totalAmount,
        due: dueAmount
      }
    }))
  }, [totalAmount, dueAmount])

  const billRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null)

  // ✅ Clear draft
  const handleClearDraft = () => {
    localStorage.removeItem("internship_invoice_data")
    localStorage.removeItem("internship_invoice_id")

    setInvoiceId(generateInvoiceId())
    setInvoiceData(getInitialInvoiceData())
  }

  const handlePrintAndSave = async () => {
    if (!validateForm(formRef.current)) return

    const valid = await validateInternshipInvoice(
      invoiceData,
      subtotal,
      totalAmount
    )

    if (!valid) return

    const confirm = await showConfirm("Do you want to save this invoice?");
    if (!confirm.isConfirmed) return;

    await saveAndPrint(
      {
        invoiceId,
        invoiceType: "internship",
        student: invoiceData.student,
        program: invoiceData.program,
        fees: invoiceData.fees,
        price: {
          ...invoiceData.price,
          total: totalAmount,
          due: dueAmount
        }
      },
    )

    await showSuccess("Invoice saved successfully");

    // ✅ clear draft after save
    localStorage.removeItem("internship_invoice_data")
    localStorage.removeItem("internship_invoice_id")

    setInvoiceId(generateInvoiceId())
    setInvoiceData(getInitialInvoiceData())
    formRef.current?.reset()
  }

  const [company, setCompany] = useState<any>(null);

  useEffect(() => {
    const fetchCompany = async () => {
      const data = await getSettings();
      setCompany(data);
    };
    fetchCompany();
  }, []);

  if (company === null)
    return (
      <div className="flex items-center justify-center min-h-screen min-w-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );

  return (
    <div className="w-full h-screen ">
      <div>
        <div className="flex items-center justify-between bg-[#DFDFDF99] px-4">
          <Header
            h1="New Internship Invoice"
            para={`#${invoiceId}`}
          />

          <div className="flex items-end">
            {/* ✅ Clear Draft Button */}
            <div onClick={handleClearDraft} className="px-4 py-2 text-black rounded-md ml-2">
              <Buttons h1="Clear Draft" variant="secondary" />
            </div>

            {/* Existing Button */}
            <div className="px-4 py-2 text-black rounded-md ml-2">
              <Buttons
                h1="Issue Invoice"
                variant="secondary"
                src2={vectora}
              />
            </div>
          </div>
        </div>

        <section>
          <form
            className="w-full h-fit grid grid-cols-2 "
            ref={formRef}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="w-[90%] space-y-7 p-4 grid ">
              <Stdform
                data={invoiceData.student}
                setData={(data) =>
                  setInvoiceData(prev => ({ ...prev, student: data }))
                }
              />

              <Programform
                data={invoiceData.program}
                setData={(data) =>
                  setInvoiceData(prev => ({ ...prev, program: data }))
                }
              />

              <Feeform
                data={invoiceData.fees}
                setData={(data) =>
                  setInvoiceData(prev => ({ ...prev, fees: data }))
                }
              />

              <PriceForm
                data={invoiceData.price}
                setData={(data) =>
                  setInvoiceData(prev => ({ ...prev, price: data }))
                }
              />
            </div>

            <div className="w-[110%] h-full grid p-4 sm:-ml-12">
              <Bill
                ref={billRef}
                type="internship"
                data={invoiceData}
                onPrint={handlePrintAndSave}
                button={<Buttons h1="Internship Invoice" variant="primary" />}
                name={invoiceData.student.studentName}
                email={invoiceData.student.email}
                phone={Number(invoiceData.student.phone)}
                college={invoiceData.student.college}
                invoiceid={invoiceId}
                date={new Date().toLocaleDateString()}
                duedate={invoiceData.price.duedate}
                companyName={company?.companyName}
                companyEmail={company?.companyEmail}
                companyPhone={company?.companyPhone}
                companyAddress={company?.companyAddress}
                boxhead="Program Enrolled"
                boxprogram={invoiceData.program.internship}
                batch={`Batch: ${invoiceData.program.batch}`}
                duration={`Duration: ${invoiceData.program.start} - ${invoiceData.program.enddate}`}
                detailhead="Program Enrolled"
                head11="Training Program Fee"
                head12="Core Curriculum Access and mentorship"
                amount1={invoiceData.fees.training}
                head21="Internship Administrative Fee"
                head22="Project allocation and assessment"
                amount2={invoiceData.fees.internship}
                head31="Certification Issuance"
                head32="Digital and physical certificate"
                amount3={invoiceData.fees.certificate}
                subamount11={subtotal}
                subamount12={invoiceData.fees.discount}
                subamount13={gstTotal}
                subamount21={totalAmount}
                subamount22={paidAmount}
                subamount23={dueAmount}
                taxPercent={invoiceData.fees.tax}
                paymentMethod={invoiceData.price.paymentMethod}
                conditionPara="Payment is due within 7 days..."
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Internship_invoice;