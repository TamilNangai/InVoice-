// import Header from "@/Components/Nav/Header"
// import CustomerForm from "@/Components/Form/Customerform"
// import Bill from '@/Components/Invoice/Bill'
// import Priceform from "@/Components/Form/Priceform"
// import Buttons from "@/Components/Button/Buttons"
// import vectora from "@/assets/Vectora.png"
// import Productform from "@/Components/Form/Productform"
// const Product_invoice = () => {
//   return (
//     <section className="w-[1500px]">
//       <aside>
//         <Header h1="Products Invoice"
//           para="Manage Your product catalog and service offerings." />
//         <div className="absolute right-10 top-4">
//           <Buttons h1="Issue Invoice" h2="Save Draft" src2={vectora} src1="" />
//         </div>
//       </aside>
//       <section className="grid grid-cols-2 grid-rows-10 h-screen">
//         <div className="">
//           <div className="row-span-4">
//             <CustomerForm />
//           </div>
//           <div className="row-span-3">
//             <Productform />
//           </div>
//           <div className="row-span-3">
//             <Priceform total="110000"
//               due="10000"
//               paid="100000"
//               duedate="2026-03-10"
//               paymentMethod="UPI" />
//           </div>
//         </div>
//         <div className='flex flex-col justify-center my-10 items-center -mt-5'>
//           <Bill button={<Buttons src1="" src2="" h1="Product Invoice" h2="" />} name="Akash " email="akash@gmail.com" phone={8525913433} college="State University of Technology" invoiceid="INV-2026-001" date="JAN 24, 2026" duedate="Feb 24, 2026" boxinvoicedate='Jan 20,2026' boxduedate='Feb 20,2026' boxref='Po-12345' detailhead='Product Details' head11="Report Management" head12="Prd:0015" amount1={100000.00} head21="Hall Management" head22="Prd:0012" amount2={200000.00} count1="2M" count2="2M" subamount11={30000.00} subamount12={0.00} subamount13={50.00} subamount21={30050.00} subamount22={50.00} subamount23={500.00} conditionPara="Payment is due within 7 days of invoice issuance, Fees are non-refundable once the internship program has commenced." />
//         </div>
//       </section>
//     </section>
//   )
// }
// export default Product_invoice



import { useState } from "react"
import Header from "@/Components/Nav/Header"
import CustomerForm from "@/Components/Form/Customerform"
import Productform from "@/Components/Form/Productform"
import Priceform from "@/Components/Form/Priceform"
import Bill from "@/Components/Invoice/Bill"
import Buttons from "@/Components/Button/Buttons"
import vectora from "@/assets/Vectora.png"
import { saveInvoice } from "@/utils/SaveInvoice"

type ProductInvoiceData = {
  customer: {
    name: string
    email: string
    phone: string
    company: string
  }

  product: {
    productName: string
    productCode: string
    quantity: number
    price: number
  }

  price: {
    total: string
    due: string
    paid: string
    duedate: string
    paymentMethod: string
  }
}

const Product_invoice = () => {

  const [invoiceData, setInvoiceData] = useState<ProductInvoiceData>({
    customer: {
      name: "",
      email: "",
      phone: "",
      company: ""
    },

    product: {
      productName: "",
      productCode: "",
      quantity: 0,
      price: 0
    },

    price: {
      total: "",
      due: "",
      paid: "",
      duedate: "",
      paymentMethod: ""
    }
  })

  const handlePrintAndSave = async () => {

    console.log("Product Invoice:", invoiceData)

    await saveInvoice({
      invoiceType: "product",
      customer: invoiceData.customer,
      product: invoiceData.product,
      price: invoiceData.price
    })

    window.print()
  }

  return (
    <section className="w-[1500px]">

      <aside>
        <Header
          h1="Products Invoice"
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
      </aside>


      <section className="flex">

        {/* LEFT SIDE FORMS */}

        <div className="w-[50%] space-y-7">

          <CustomerForm
            data={invoiceData.customer}
            setData={(data) => setInvoiceData(prev => ({ ...prev, customer: data }))}
          />

          <Productform
            data={invoiceData.product}
            setData={(data) => setInvoiceData(prev => ({ ...prev, product: data }))}
          />

          <Priceform
            data={invoiceData.price}
            setData={(data) => setInvoiceData(prev => ({ ...prev, price: data }))}
          />

        </div>


        {/* RIGHT SIDE BILL */}

        <div className="w-[50%] p-10">

          <Bill
            data={invoiceData}
            onPrint={handlePrintAndSave}

            button={<Buttons src1="" src2="" h1="Product Invoice" h2="" />}

            name={invoiceData.customer.name}
            email={invoiceData.customer.email}
            phone={Number(invoiceData.customer.phone)}
            college={invoiceData.customer.company}

            invoiceid="INV-2026-001"
            date={new Date().toLocaleDateString()}
            duedate={invoiceData.price.duedate}

            detailhead="Product Details"

            head11={invoiceData.product.productName}
            head12={invoiceData.product.productCode}
            amount1={invoiceData.product.price}

            count1={String(invoiceData.product.quantity)}

            subamount11={Number(invoiceData.price.total)}
            subamount12={0}
            subamount13={0}

            subamount21={Number(invoiceData.price.total)}
            subamount22={Number(invoiceData.price.paid)}
            subamount23={Number(invoiceData.price.due)}

            conditionPara="Payment is due within 7 days of invoice issuance."

          />

        </div>

      </section>

    </section>
  )
}

export default Product_invoice
