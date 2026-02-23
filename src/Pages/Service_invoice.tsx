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
        <Buttons h1="Issue Invoice" src={vectora} />
        </div>
        </aside>
      <section className="flex">
        <div>
          <CustomerForm customer="Customer Name" email="Email Address" office="Office Number" phone="Phone Number" address="Address" gst="GST Number" />
          <Priceform total="Total Amount" due="Due Amount" paid="Paid Amount" duedate="Due Date" paymentMethod="Payment Type" />
        </div>
        <div>
          <Bill />
        </div>
      </section>
    </section>
  )
}

export default Service_invoice