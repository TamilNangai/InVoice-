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
import { validateForm } from "@/utils/useInvoiceValidation"
import { generateInvoiceId } from "@/utils/generateInvoiceId"
import { showError, showSuccess, showConfirm } from "@/utils/alert";


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

const Internship_invoice = () => {
  const [invoiceId, setInvoiceId] = useState(generateInvoiceId())
  const [invoiceData, setInvoiceData] = useState<InvoiceData>({
    student: {
      studentName: "",
      email: "",
      phone: "",
      college: "",
    },
    program: {
      internship: "",
      batch: "",
      start: "",
      trainer: "",
      enddate: "",
    },
    fees: {
      training: 0,
      certificate: 0,
      tax: 0,
      internship: 0,
      discount: 0,
    },
    price: {
      total: 0,
      due: 0,
      paid: 0,
      duedate: "",
      paymentMethod: ""
    }
  })

  const subtotal =
    Number(invoiceData.fees.training || 0) +
    Number(invoiceData.fees.certificate || 0) +
    Number(invoiceData.fees.internship || 0)

  const gstTotal =
    (subtotal * Number(invoiceData.fees.tax || 0)) / 100

  const discount = Number(invoiceData.fees.discount || 0)

  const totalAmount = subtotal + gstTotal - discount

  const paidAmount = Number(invoiceData.price.paid || 0)

  const dueAmount = totalAmount - paidAmount

  const billRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null)

  const handlePrintAndSave = async () => {
    if (!validateForm(formRef.current)) return

    const { studentName, email, phone, college } = invoiceData.student

    if (!studentName || !email || !phone || !college) {
      await showError("Please fill all student details.")
      return
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      await showError("Phone number must be 10 digits")
      return
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/

    if (!emailRegex.test(email)) {
      await showError("Please enter a valid email address")
      return
    }

    const { internship, batch, start, enddate } = invoiceData.program

    if (!internship || !batch || !start || !enddate) {
      await showError("Please fill all program details.")
      return
    }

    if (new Date(enddate) <= new Date(start)) {
      await showError("End date must be after start date")
      return
    }

    const { training, internship: internshipFee, certificate, tax, discount } = invoiceData.fees

    if (training <= 0 || internshipFee <= 0 || certificate <= 0) {
      await showError("Please fill Fees details correctly.")
      return
    }

    if (tax <= 0 || tax > 100) {
      await showError("Tax rate must be between 0 and 100")
      return
    }

    const subtotal =
      Number(training) +
      Number(certificate) +
      Number(internshipFee)

    if (discount < 0 || discount > subtotal) {
      await showError("Discount cannot be greater than subtotal")
      return
    }

    const { paid, duedate, paymentMethod } = invoiceData.price

    if (!paymentMethod) {
      await showError("Please select payment method")
      return
    }

    if (paid <= 0 || paid > totalAmount) {
      await showError("Paid amount is invalid")
      return
    }

    const today = new Date().toISOString().split("T")[0]

    if (!duedate || duedate <= today) {
      await showError("Due date must be a future date")
      return
    }

    console.log(invoiceData);




    // ✅ CONFIRMATION BEFORE SAVE
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
      billRef
    )

    await showSuccess("Invoice saved successfully");

    // Reset form after successful save
    setInvoiceId(generateInvoiceId())
    setInvoiceData({
      student: { studentName: "", email: "", phone: "", college: "" },
      program: { internship: "", batch: "", start: "", trainer: "", enddate: "" },
      fees: { training: 0, certificate: 0, tax: 0, internship: 0, discount: 0 },
      price: { total: 0, due: 0, paid: 0, duedate: "", paymentMethod: "" }
    })
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

  useEffect(() => {
    const training = Number(invoiceData.fees.training) || 0;
    const certificate = Number(invoiceData.fees.certificate) || 0;
    const internship = Number(invoiceData.fees.internship) || 0;
    const discount = Number(invoiceData.fees.discount) || 0;
    const taxRate = Number(invoiceData.fees.tax) || 0;

    const subtotal = training + certificate + internship;
    const taxAmount = (subtotal * taxRate) / 100;
    const total = Math.round(subtotal + taxAmount - discount);

    setInvoiceData(prev => ({
      ...prev,
      price: {
        ...prev.price,
        total: total,
        due: total - prev.price.paid,
      }
    }));
  }, [invoiceData.fees, invoiceData.price.paid]);


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

          <div className="">
            <button
              type="button"

              className="px-4 py-2 text-black rounded-md ml-2"
            >
              <Buttons
                h1="Issue Invoice"
                h2="Save Draft"
                src2={vectora}
                src1=""
              />
            </button>
          </div>
        </div>

        <form
          className="grid grid-cols-2 w-full h-full"
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault()
            if (!formRef.current?.checkValidity()) {
              formRef.current?.reportValidity()
              return
            }
            handlePrintAndSave()
          }}
        >

          <div className="w-[100%] space-y-7 p-4 grid ">
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

          <div className="w-[100%] h-full p-4 grid ">
            <Bill
              ref={billRef}
              type="internship"
              data={invoiceData}
              onPrint={handlePrintAndSave}
              button={<Buttons src1="" src2="" h1="Internship Invoice" h2="" />}
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
              subamount11={invoiceData.price.total}
              subamount12={invoiceData.fees.discount}
              subamount13={(invoiceData.price.total * invoiceData.fees.tax) / 100}
              subamount21={invoiceData.price.total}
              subamount22={invoiceData.price.paid}
              subamount23={invoiceData.price.due}
              taxPercent={invoiceData.fees.tax}
              paymentMethod={invoiceData.price.paymentMethod}
              conditionPara="Payment is due within 7 days..."
            />
          </div>

        </form>
      </div>
    </div>
  );
};

export default Internship_invoice;