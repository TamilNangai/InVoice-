import Header from "@/Components/Nav/Header"
import CustomerForm from "@/Components/Form/Customerform"
import Bill from '@/Components/Invoice/Bill'
import Priceform from "@/Components/Form/Priceform"
import Buttons from "@/Components/Button/Buttons"
import vectora from "@/assets/Vectora.png"
import Productform from "@/Components/Form/Productform"
const Product_invoice = () => {
  return (
    <section>
      <aside className="flex w-[1243px]">
        <Header h1="Products Invoice"
          para="Manage Your product catalog and service offerings." />
        <div className="absolute right-10 top-4">
          <Buttons h1="Issue Invoice" h2="Save Draft" src={vectora} />
        </div>
      </aside>
      <section className="flex">
        <div className="w-50% mt-10">
          <CustomerForm customer="Customer Name" email="Email Address" office="Office Number" phone="Phone Number" address="Address" gst="GST Number" />
          <Productform studentName="Student Name" college="College / Institution" email="Email Address" phone="Phone Number" />
          <Priceform total="Total Amount" due="Due Amount" paid="Paid Amount" duedate="Due Date" paymentMethod="Payment Type" />
        </div>
        <div className='w-[50%] flex flex-col justify-center my-10 items-center'>
          <Bill button={<Buttons h1="Product Invoice" h2="" />} name="Akash " email="akash@gmail.com" phone={8525913433} college="State University of Technology" invoiceid="INV-2026-001" date="JAN 24, 2026" duedate="Feb 24, 2026" boxinvoicedate='Jan 20,2026' boxduedate='Feb 20,2026' boxref='Po-12345' detailhead='Product Details' head11="Report Management" head12="Prd:0015" amount1={100000.00} head21="Hall Management" head22="Prd:0012" amount2={200000.00} count1="2M" count2="2M" subamount11={30000.00} subamount12={0.00} subamount13={50.00} subamount21={30050.00} subamount22={50.00} subamount23={500.00} conditionPara="Payment is due within 7 days of invoice issuance, Fees are non-refundable once the internship program has commenced." />
        </div>
      </section>
    </section>
  )
}
export default Product_invoice
