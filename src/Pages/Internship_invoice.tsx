import { useState } from "react"
import Bill from '@/Components/Invoice/Bill'
import Header from "@/Components/Nav/Header"
import Feeform from "@/Components/Form/Feeform"
import Programform from "@/Components/Form/Programform"
import Stdform from "@/Components/Form/Stdform"
import Priform from "@/Components/Form/Priceform"
import Buttons from '@/Components/Button/Buttons'
import vectora from "@/assets/Vectora.png"
import { saveInvoice } from '@/utils/SaveInvoice'

type InvoiceData = {
  student:{
    studentName:string
    email:string
    phone:string
    college:string
  }

  program:{
    internship:string
    batch:string
    start:string
    trainer:string
    enddate:string
  }

  fees:{
    training:number
    certificate:number
    tax:number
    internship:number
    discount:number
  }

  price:{
    total:string
    due:string
    paid:string
    duedate:string
    paymentMethod:string
  }
}

const Internship_invoice = () => {

const [invoiceData,setInvoiceData] = useState<InvoiceData>({
  student:{
    studentName:"",
    email:"",
    phone:"",
    college:""
  },

  program:{
    internship:"",
    batch:"",
    start:"",
    trainer:"",
    enddate:""
  },

  fees:{
    training:0,
    certificate:0,
    tax:0,
    internship:0,
    discount:0
  },

  price:{
    total:"",
    due:"",
    paid:"",
    duedate:"",
    paymentMethod:""
  }
})

const handlePrintAndSave = async () => {

  console.log("Invoice Data:",invoiceData)

  await saveInvoice({
    invoiceType:"internship",
    student:invoiceData.student,
    program:invoiceData.program,
    fees:invoiceData.fees,
    price:invoiceData.price
  })

  window.print()
}

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

   

    <div className="w-[50%] space-y-7">

      <Stdform
        data={invoiceData.student}
        setData={(data)=>setInvoiceData(prev => ({...prev,student:data}))}
      />

      <Programform
        data={invoiceData.program}
        setData={(data)=>setInvoiceData(prev => ({...prev,program:data}))}
      />

      <Feeform
        data={invoiceData.fees}
        setData={(data)=>setInvoiceData(prev => ({...prev,fees:data}))}
      />

      <Priform
        data={invoiceData.price}
        setData={(data)=>setInvoiceData(prev => ({...prev,price:data}))}
      />

    </div>


    {/* RIGHT SIDE BILL */}

    <div className="w-[50%] p-10">

      <Bill
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
}

export default Internship_invoice