
import Header from "@/Components/Nav/Header"
import CustomerForm from "@/Components/Form/Customerform"
import Bill from '@/Components/Invoice/Bill'
import Priceform from "@/Components/Form/Priceform"
import Buttons from "@/Components/Button/Buttons"
import vectora from "@/assets/Vectora.png"



const Service_invoice = () => {



  return (
    <section>
      <aside className="flex">
      <Header h1="Products Invoice"
        para="Manage Your product catalog and service offerings." />
        <div className="absolute right-10 top-4">
        <Buttons h1="Issue Invoice" h2="Save Draft" src={vectora} />
        </div>
        </aside>
      <section className="flex">
        <div className="w-50%">
          <CustomerForm customer="Customer Name" email="Email Address" office="Office Number" phone="Phone Number" address="Address" gst="GST Number" />
          <Priceform total="Total Amount" due="Due Amount" paid="Paid Amount" duedate="Due Date" paymentMethod="Payment Type" />
        </div>
       <div className='w-[50%] flex justify-end items-center'>
          <Bill button={<Buttons h1="Service Invoice" h2="" />} name="Akash " email="akash@gmail.com" phone={8525913433} college="State University of Technology" invoiceid="INV-2026-001" date="JAN 24, 2026" duedate="Feb 24, 2026" boxinvoicedate='Jan 20,2026' boxduedate='Feb 20,2026' boxref='Po-12345' detailhead='Service Details' head11="Static Website" head12="Srv:0010" amount1={10000.00} head21="Dynamic Website" head22="Srv:0011" amount2={20000.00} subamount11={30000.00} subamount12={0.00} subamount13={50.00} subamount21={30050.00} subamount22={50.00} subamount23={500.00} conditionPara="Thank you for your business. Please remit payment within 30 das" />
        </div>
      </section>
    </section>
  )}

export default Service_invoice;