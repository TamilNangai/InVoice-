<<<<<<< HEAD
import { useState, useEffect } from "react"

=======
import { useRef } from "react";
import { saveAndPrint } from "@/utils/saveAndPrint";
import { useState } from "react"
>>>>>>> 8d94990723274a58e202b2871c5d57e3586f9c95
import Bill from '@/Components/Invoice/Bill'
import Header from "@/Components/Nav/Header"
import Feeform from "@/Components/Form/Feeform"
import Programform from "@/Components/Form/Programform"
import Stdform from "@/Components/Form/Stdform"
import Buttons from '@/Components/Button/Buttons'
import vectora from "@/assets/Vectora.png"
<<<<<<< HEAD
import { saveInvoice } from '@/utils/SaveInvoice'
import PriceForm from "@/Components/Form/Priceform"
=======

>>>>>>> 8d94990723274a58e202b2871c5d57e3586f9c95

type InvoiceData = {
  student: {
    studentName: string
    email: string
    phone: string
    college: string
  }

  program: {
    internship: string
    batch: string
    start: string
    trainer: string
    enddate: string
  }

  fees: {
    training: number
    certificate: number
    tax: number
    internship: number
    discount: number
  }

  price: {
    total: number
    due: number
    paid: number
    duedate: string
    paymentMethod: string
  }
}

const Internship_invoice = () => {

  const [invoiceData, setInvoiceData] = useState<InvoiceData>({
    student: {
      studentName: "",
      email: "",
      phone: "",
      college: ""
    },

    program: {
      internship: "",
      batch: "",
      start: "",
      trainer: "",
      enddate: ""
    },

    fees: {
      training: 0,
      certificate: 0,
      tax: 0,
      internship: 0,
      discount: 0
    },

<<<<<<< HEAD
    price: {
      total: 0,
      due: 0,
      paid: 0,
      duedate: "",
      paymentMethod: ""
    }
  })

  const handlePrintAndSave = async () => {
=======
  price:{
    total:"",
    due:"",
    paid:"",
    duedate:"",
    paymentMethod:""
  }
})

const billRef = useRef<HTMLDivElement>(null);

const handlePrintAndSave = async () => {

  await saveAndPrint(
    {
      invoiceType: "internship",
      student: invoiceData.student,
      program: invoiceData.program,
      fees: invoiceData.fees,
      price: invoiceData.price
    },
    billRef
  );
};
>>>>>>> 8d94990723274a58e202b2871c5d57e3586f9c95

    console.log("Invoice Data:", invoiceData)

    await saveInvoice({
      invoiceType: "internship",
      student: invoiceData.student,
      program: invoiceData.program,
      fees: invoiceData.fees,
      price: invoiceData.price
    })

    window.print()
  }

  useEffect(() => {

    const training = Number(invoiceData.fees.training) || 0
    const certificate = Number(invoiceData.fees.certificate) || 0
    const internship = Number(invoiceData.fees.internship) || 0
    const discount = Number(invoiceData.fees.discount) || 0
    const taxRate = Number(invoiceData.fees.tax) || 0

    const subtotal = training + certificate + internship

    const taxAmount = (subtotal * taxRate) / 100

    const total = Math.round(subtotal + taxAmount - discount)

    setInvoiceData(prev => ({
      ...prev,
      price: {
        ...prev.price,
        total: total,
        due: total - prev.price.paid
      }
    }))

  }, [invoiceData.fees, invoiceData.price.paid])


  return (
    <div className="w-[1500px]">

      <div>
        <Header
          h1="New Internship Invoice"
          para="#INV-2026-001"
        />

        <div className="absolute right-10 top-4">
          <Buttons
            h1="Issue Invoice"
            h2="Save Draft"
            src2={vectora}
            src1=""
          />
        </div>
      </div>

      <section className="flex">



        <div className="w-[50%] space-y-7 p-4">

          <Stdform
            data={invoiceData.student}
            setData={(data) => setInvoiceData(prev => ({ ...prev, student: data }))}
          />

          <Programform
            data={invoiceData.program}
            setData={(data) => setInvoiceData(prev => ({ ...prev, program: data }))}
          />

          <Feeform
            data={invoiceData.fees}
            setData={(data) => setInvoiceData(prev => ({ ...prev, fees: data }))}
          />

          <PriceForm
            data={invoiceData.price}
            setData={(data) => setInvoiceData(prev => ({ ...prev, price: data }))}
          />

        </div>


        {/* RIGHT SIDE BILL */}

        <div className="w-[50%] p-4">

          <Bill
            type="internship"
            data={invoiceData}
            onPrint={handlePrintAndSave}

            button={<Buttons src1="" src2="" h1="Internship Invoice" h2="" />}

            name={invoiceData.student.studentName}
            email={invoiceData.student.email}
            phone={Number(invoiceData.student.phone)}
            college={invoiceData.student.college}

            invoiceid="INV-2026-001"
            date={invoiceData.program.start}
            duedate={invoiceData.price.duedate}

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

            subamount11={Number(invoiceData.price.total)}
            subamount12={invoiceData.fees.discount}
            subamount13={(Number(invoiceData.price.total) * invoiceData.fees.tax) / 100}

            subamount21={Number(invoiceData.price.total)}
            subamount22={Number(invoiceData.price.paid)}
            subamount23={Number(invoiceData.price.due)}

            taxPercent={invoiceData.fees.tax}
            paymentMethod={invoiceData.price.paymentMethod}



            conditionPara="Payment is due within 7 days of invoice issuance, Fees are non-refundable once the internship program has commenced. This internship does not guarantee full-time employment. Certificate will be issued upon successful completion of all assigned projects."
          />

        </div>

      </section>

    </div>
<<<<<<< HEAD
  )
=======


    {/* RIGHT SIDE BILL */}

    <div className="w-[50%] p-4">

      <Bill
        // type="internship"
        ref={billRef}
        data={invoiceData}
        onPrint={handlePrintAndSave}

        button={<Buttons src1="" src2="" h1="Internship Invoice" h2="" />}

        name={invoiceData.student.studentName}
        email={invoiceData.student.email}
        phone={Number(invoiceData.student.phone)}
        college={invoiceData.student.college}

        invoiceid="INV-2026-001"
        date={invoiceData.program.start}
        duedate={invoiceData.price.duedate}

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

        subamount11={Number(invoiceData.price.total)}
        subamount12={invoiceData.fees.discount}
        subamount13={invoiceData.fees.tax}

        subamount21={Number(invoiceData.price.total)}
        subamount22={Number(invoiceData.price.paid)}
        subamount23={Number(invoiceData.price.due)}

        conditionPara="Payment is due within 7 days of invoice issuance. Fees are non-refundable once the internship program has commenced."
      />

    </div>

  </section>

</div>
)
>>>>>>> 8d94990723274a58e202b2871c5d57e3586f9c95
}

export default Internship_invoice


