
// import { useState } from "react"
// import Bill from '@/Components/Invoice/Bill'
// import Header from "@/Components/Nav/Header"
// import Feeform from "@/Components/Form/Feeform"
// import Programform from "@/Components/Form/Programform"
// import Stdform from "@/Components/Form/Stdform"
// import Priform from "@/Components/Form/Priceform"
// import Buttons from '@/Components/Button/Buttons'
// import vectora from "@/assets/Vectora.png"
// import { saveInvoice } from '@/utils/SaveInvoice'

// type InvoiceData = {
//   student:{
//     studentName:string
//     email:string
//     phone:string
//     college:string
//   }

//   program:{
//     internship:string
//     batch:string
//     start:string
//     trainer:string
//     enddate:string
//   }

//   fees:{
//     training:number
//     certificate:number
//     tax:number
//     internship:number
//     discount:number
//   }

//   price:{
//     total:string
//     due:string
//     paid:string
//     duedate:string
//     paymentMethod:string
//   }
// }

// const Internship_invoice = () => {

// const [invoiceData,setInvoiceData] = useState<InvoiceData>({
//   student:{
//     studentName:"",
//     email:"",
//     phone:"",
//     college:""
//   },

//   program:{
//     internship:"",
//     batch:"",
//     start:"",
//     trainer:"",
//     enddate:""
//   },

//   fees:{
//     training:0,
//     certificate:0,
//     tax:0,
//     internship:0,
//     discount:0
//   },

//   price:{
//     total:"",
//     due:"",
//     paid:"",
//     duedate:"",
//     paymentMethod:""
//   }
// })

// const handlePrintAndSave = async () => {

//   console.log("Invoice Data:",invoiceData)

//   await saveInvoice({
//     invoiceType:"internship",
//     student:invoiceData.student,
//     program:invoiceData.program,
//     fees:invoiceData.fees,
//     price:invoiceData.price
//   })

//   window.print()
// }

// return (
// <div className="w-[1500px]">

//   <div>
//     <Header
//       h1="New Internship Invoice"
//       para="#INV-2026-001"
//     />

//     <div className="absolute right-10 top-4">
//       <Buttons
//         h1="Issue Invoice"
//         h2="Save Draft"
//         src2={vectora}
//         src1=""
//       />
//     </div>
//   </div>

//   <section className="flex">

   

//     <div className="w-[50%] space-y-7 p-4">

//       <Stdform
//         data={invoiceData.student}
//         setData={(data)=>setInvoiceData(prev => ({...prev,student:data}))}
//       />

//       <Programform
//         data={invoiceData.program}
//         setData={(data)=>setInvoiceData(prev => ({...prev,program:data}))}
//       />

//       <Feeform
//         data={invoiceData.fees}
//         setData={(data)=>setInvoiceData(prev => ({...prev,fees:data}))}
//       />

//       <Priform
//         data={invoiceData.price}
        
//         setData={(data)=>setInvoiceData(prev => ({...prev,price:data}))}
//       />

//     </div>


//     {/* RIGHT SIDE BILL */}

//     <div className="w-[50%] p-4">

//       <Bill
//         data={invoiceData}
//         onPrint={handlePrintAndSave}

//         button={<Buttons src1="" src2="" h1="Internship Invoice" h2="" />}

//         name={invoiceData.student.studentName}
//         email={invoiceData.student.email}
//         phone={Number(invoiceData.student.phone)}
//         college={invoiceData.student.college}

//         invoiceid="INV-2026-001"
//         date={invoiceData.program.start}
//         duedate={invoiceData.price.duedate}

//         boxhead="Program Enrolled"
//         boxprogram={invoiceData.program.internship}
//         batch={`Batch: ${invoiceData.program.batch}`}
//         duration={`Duration: ${invoiceData.program.start} - ${invoiceData.program.enddate}`}

//         detailhead="Program Enrolled"

//         head11="Training Program Fee"
//         head12="Core Curriculum Access and mentorship"
//         amount1={invoiceData.fees.training}

//         head21="Internship Administrative Fee"
//         head22="Project allocation and assessment"
//         amount2={invoiceData.fees.internship}

//         head31="Certification Issuance"
//         head32="Digital and physical certificate"
//         amount3={invoiceData.fees.certificate}

//         subamount11={Number(invoiceData.price.total)}
//         subamount12={invoiceData.fees.discount}
//         subamount13={invoiceData.fees.tax}

//         subamount21={Number(invoiceData.price.total)}
//         subamount22={Number(invoiceData.price.paid)}
//         subamount23={Number(invoiceData.price.due)}

//         conditionPara="Payment is due within 7 days of invoice issuance. Fees are non-refundable once the internship program has commenced."
//       />

//     </div>

//   </section>

// </div>
// )
// }

// export default Internship_invoice



// Service_invoice.tsx
import { useState } from "react";
import Header from "@/Components/Nav/Header";
import CustomerForm from "@/Components/Form/Customerform";
import Productform from "@/Components/Form/Productform";
import Priceform from "@/Components/Form/Priceform";
import Bill, { Row } from "@/Components/Invoice/Bill";
import Buttons from "@/Components/Button/Buttons";
import vectora from "@/assets/Vectora.png";
import { saveInvoice } from "@/utils/SaveInvoice";

type Service = {
  productName: string;
  sub: string;
  price: number;
  tax: number;
};

type ServiceInvoiceData = {
  customer: {
    customer: string;
    email: string;
    office: string;
    gst: string;
    phone: string;
    address: string;
  };
  service: Service[];
  price: {
    total: string;
    due: string;
    paid: string;
    duedate: string;
    paymentMethod: string;
  };
};

const Service_invoice = () => {
  const [invoiceData, setInvoiceData] = useState<ServiceInvoiceData>({
    customer: { customer: "", email: "", office: "", gst: "", phone: "", address: "" },
    service: [{ productName: "", sub: "1", price: 0, tax: 0 }],
    price: { total: "", due: "", paid: "", duedate: "", paymentMethod: "" },
  });

  // 🔹 Calculate totals dynamically
  const subtotal = invoiceData.service.reduce((sum, item) => sum + Number(item.price), 0);
  const gst = subtotal * 0.18; // 18% GST
  const totalAmount = subtotal + gst;
  const paidAmount = Number(invoiceData.price.paid || 0);
  const dueAmount = totalAmount - paidAmount;

  // 🔹 Print + Save
  const handlePrintAndSave = async () => {
    await saveInvoice({
      invoiceType: "service",
      customer: invoiceData.customer,
      product: invoiceData.service,
      price: {
        ...invoiceData.price,
        total: totalAmount.toString(),
        due: dueAmount.toString(),
      },
    });
    window.print();
  };

  const rows: Row[] = invoiceData.service.map((item) => ({
    title: item.productName,
    subtitle: `Service: ${item.sub}`,
    amount: item.price,
  }));

  return (
    <section className="w-[1500px]">
      {/* HEADER */}
      <Header h1="Service Invoice" para="#INV-2026-001" />
      <div className="absolute right-10 top-4">
        <Buttons h1="Issue Invoice" h2="Save Draft" src2={vectora} src1="" />
      </div>

      <div className="flex">
        {/* LEFT SIDE */}
        <div className="w-[50%] space-y-7 p-4">
          <CustomerForm
            data={invoiceData.customer}
            setData={(data) => setInvoiceData((prev) => ({ ...prev, customer: data }))}
          />
          <Productform
            data={invoiceData.service}
            setData={(data) => setInvoiceData((prev) => ({ ...prev, service: data }))}
          />
          <Priceform
            data={{ ...invoiceData.price, total: totalAmount.toString(), due: dueAmount.toString() }}
            setData={(data) => setInvoiceData((prev) => ({ ...prev, price: data }))}
          />
        </div>

        {/* RIGHT SIDE BILL */}
        <div className="w-[50%] p-4">
          <Bill
            rows={rows}
            subamount11={subtotal}
            subamount12={0}
            subamount13={gst}
            subamount21={totalAmount}
            subamount22={paidAmount}
            subamount23={dueAmount}
            detailhead="Service Details"
            name={invoiceData.customer.customer}
            email={invoiceData.customer.email}
            phone={Number(invoiceData.customer.phone)}
            college={invoiceData.customer.office}
            invoiceid="INV-2026-001"
            date={new Date().toLocaleDateString()}
            duedate={invoiceData.price.duedate}
            conditionPara="Thank you for your business. Please remit payment within 30 days."
            button={<Buttons h1="Service Invoice" h2="" src1="" src2="" />}
            onPrint={handlePrintAndSave}
          />
        </div>
      </div>
    </section>
  );
};

export default Service_invoice;
