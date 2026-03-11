// import Header from "@/Components/Nav/Header"
// import Customerform from "@/Components/Form/Customerform"
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
//         <div className="col-start-1 col-end-2 row-start-1 row-end-4 p-4">
//           <Customerform />
//         </div>
//         <div className="col-start-1 col-end-2 row-start-6 row-end-8 p-4 mt-10">
//           <Productform />
//         </div>
//         <div className="col-start-1 col-end-2 row-start-10 row-end-11 p-4 mt-12">
//           <Priceform  />
//         </div>
//         <div className='col-start-2 col-end-3 row-start-1 row-end-11 p-2'>
//           <Bill button={<Buttons src1="" src2="" h1="Product Invoice" h2="" />} name="Akash " email="akash@gmail.com" phone={8525913433} college="State University of Technology" invoiceid="INV-2026-001" date="JAN 24, 2026" duedate="Feb 24, 2026" boxinvoicedate='Jan 20,2026' boxduedate='Feb 20,2026' boxref='Po-12345' detailhead='Product Details' head11="Report Management" head12="Prd:0015" amount1={100000.00} head21="Hall Management" head22="Prd:0012" amount2={200000.00} count1="2M" count2="2M" subamount11={30000.00} subamount12={0.00} subamount13={50.00} subamount21={30050.00} subamount22={50.00} subamount23={500.00} conditionPara="Payment is due within 7 days of invoice issuance, Fees are non-refundable once the internship program has commenced." />
//         </div>
//       </section>
//     </section>
//   )
// }
// export default Product_invoice
// 


// import { useState } from "react"
// import Header from "@/Components/Nav/Header"
// import CustomerForm from "@/Components/Form/Customerform"
// import Productform from "@/Components/Form/Productform"
// import Priceform from "@/Components/Form/Priceform"
// import Bill from "@/Components/Invoice/Bill"
// import Buttons from "@/Components/Button/Buttons"
// import vectora from "@/assets/Vectora.png"
// import { saveInvoice } from "@/utils/SaveInvoice"

// type Product = {
//   productName: string
//   sub: string
//   price: number
//   tax: number
// }

// type ProductInvoiceData = {
//   customer: {
//     customer: string
//     email: string
//     office: string
//     gst: string
//     phone: string
//     address: string
//   }

//   product: Product[]

//   price: {
//     total: string
//     due: string
//     paid: string
//     duedate: string
//     paymentMethod: string
//   }
// }

// const Product_invoice = () => {

//   const [invoiceData, setInvoiceData] = useState<ProductInvoiceData>({
//     customer: {
//       customer: "",
//       email: "",
//       office: "",
//       gst: "",
//       phone: "",
//       address: ""
//     },

//     product: [
//       {
//         productName: "",
//         sub: "2M",
//         price: 0,
//         tax: 0
//       }
//     ],

//     price: {
//       total: "",
//       due: "",
//       paid: "",
//       duedate: "",
//       paymentMethod: ""
//     }
//   })


//   const handlePrintAndSave = async () => {

//     console.log("Product Invoice:", invoiceData)

//     await saveInvoice({
//       invoiceType: "product",
//       customer: invoiceData.customer,
//       product: invoiceData.product,
//       price: invoiceData.price
//     })

//     window.print()
//   }


//   /* 🔹 Convert products to rows for Bill */

//   const rows = invoiceData.product.map((item) => ({
//     head1: item.productName,
//     head2: `Sub: ${item.sub}`,
//     amount: item.price
//   }))


//   return (
//     <section className="w-[1500px]">

//       {/* HEADER */}

//       <div>

//         <Header
//           h1="Product Invoice"
//           para="#INV-2026-001"
//         />

//         <div className="absolute right-10 top-4">
//           <Buttons
//             h1="Issue Invoice"
//             h2="Save Draft"
//             src2={vectora}
//             src1=""
//           />
//         </div>

//       </div>


//       <section className="flex">

//         {/* LEFT SIDE */}

//         <div className="w-[50%] space-y-7">

//           <CustomerForm
//             data={invoiceData.customer}
//             setData={(data) =>
//               setInvoiceData(prev => ({ ...prev, customer: data }))
//             }
//           />

//           <Productform
//             data={invoiceData.product}
//             setData={(data) =>
//               setInvoiceData(prev => ({ ...prev, product: data }))
//             }
//           />

//           <Priceform
//             data={invoiceData.price}
//             setData={(data) =>
//               setInvoiceData(prev => ({ ...prev, price: data }))
//             }
//           />

//         </div>


//         {/* RIGHT SIDE BILL */}

//         <div className="w-[50%] p-10">

//           <Bill
//             items={invoiceData.product.map(item => ({
//               title: item.productName,
//               subtitle: `Prd:${item.sub}`,
//               count: item.sub,
//               amount: item.price
//             }))}


//             button={<Buttons src1="" src2="" h1="Product Invoice" h2="" />}

//             name={invoiceData.customer.customer}
//             email={invoiceData.customer.email}
//             phone={Number(invoiceData.customer.phone)}
//             college={invoiceData.customer.office}

//             invoiceid="INV-2026-001"
//             date={new Date().toLocaleDateString()}
//             duedate={invoiceData.price.duedate}

//             detailhead="Product Details"

//             subamount11={Number(invoiceData.price.total)}
//             subamount12={0}
//             subamount13={0}

//             subamount21={Number(invoiceData.price.total)}
//             subamount22={Number(invoiceData.price.paid)}
//             subamount23={Number(invoiceData.price.due)}

//             conditionPara="Payment is due within 7 days of invoice issuance."

//             onPrint={handlePrintAndSave}
//           />


//         </div>

//       </section>

//     </section>
//   )
// }

// export default Product_invoice








import React, { useState } from "react";
import Header from "@/Components/Nav/Header";
import CustomerForm from "@/Components/Form/Customerform";
import ProductForm from "@/Components/Form/Productform";
import PriceForm from "@/Components/Form/Priceform";
import Bill, { BillRow } from "@/Components/Invoice/Bill";
import Buttons from "@/Components/Button/Buttons";
import vectora from "@/assets/Vectora.png";
import { saveInvoice } from "@/utils/SaveInvoice";

type Product = {
  productName: string;
  sub: string;
  price: number;
  tax: number;
};

type ProductInvoiceData = {
  customer: {
    customer: string;
    email: string;
    office: string;
    gst: string;
    phone: string;
    address: string;
  };
  product: Product[];
  price: {
    total: string;
    discount: string;
    gst: string;
    paid: string;
    due: string;
    duedate: string;
    paymentMethod: string;
  };
};

const ProductInvoice = () => {
  const [invoiceData, setInvoiceData] = useState<ProductInvoiceData>({
    customer: { customer: "", email: "", office: "", gst: "", phone: "", address: "" },
    product: [{ productName: "", sub: "2M", price: 0, tax: 0 }],
    price: { total: "0", discount: "0", gst: "0", paid: "0", due: "0", duedate: "", paymentMethod: "" },
  });

  const rows: BillRow[] = invoiceData.product.map((p) => ({
    title: p.productName,
    subtitle: `Sub: ${p.sub}`,
    amount: p.price,
    count: p.sub,
  }));

  const subtotal = invoiceData.product.reduce((sum, p) => sum + p.price, 0);
  const gst = Number(invoiceData.price.gst || 0);
  const discount = Number(invoiceData.price.discount || 0);
  const paid = Number(invoiceData.price.paid || 0);
  const total = subtotal - discount + gst;
  const due = total - paid;

  const handlePrintAndSave = async () => {
    await saveInvoice({
      invoiceType: "product",
      customer: invoiceData.customer,
      product: invoiceData.product,
      price: { ...invoiceData.price, total: total.toString(), due: due.toString() },
    });
    window.print();
  };

  return (
    <section className="w-[1500px]">
      <Header h1="Product Invoice" para="#INV-2026-001" />
      <div className="absolute right-10 top-4">
        <Buttons h1="Issue Invoice" h2="Save Draft" src1="" src2={vectora} />
      </div>

      <section className="flex gap-4">
        <div className="w-[50%] space-y-7">
          <CustomerForm
            data={invoiceData.customer}
            setData={(data) => setInvoiceData((prev) => ({ ...prev, customer: data }))}
          />
          <ProductForm
            data={invoiceData.product}
            setData={(data) => setInvoiceData((prev) => ({ ...prev, product: data }))}
          />
          <PriceForm
            data={invoiceData.price}
            setData={(data) =>
              setInvoiceData((prev) => ({
                ...prev,
                price: { ...prev.price, ...data },
              }))
            }
          />
        </div>

        <div className="w-[50%] p-4">
          <Bill
            rows={rows}
            name={invoiceData.customer.customer}
            email={invoiceData.customer.email}
            phone={Number(invoiceData.customer.phone)}
            college={invoiceData.customer.office}
            invoiceid="INV-2026-001"
            date={new Date().toLocaleDateString()}
            duedate={invoiceData.price.duedate}
            detailhead="Product Details"
            conditionPara="Payment is due within 7 days of invoice issuance."
            button={<Buttons h1="Product Invoice" h2="" src1="" src2="" />}
            onPrint={handlePrintAndSave}
            discount={discount}
            gst={gst}
            paid={paid}
          />
        </div>
      </section>
    </section>
  );
};

export default ProductInvoice;
