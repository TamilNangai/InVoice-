import Bill from '@/Components/Invoice/Bill'
import Header from "@/Components/Nav/Header"
import Feeform from "@/Components/Form/Programform"
import ProForm from "@/Components/Form/Feeform"
import Priform from "@/Components/Form/Priceform"
import Stdform from "@/Components/Form/Stdform"

const Internship_invoice = () => {
  return (
    <div>
      <Header h1="Products & Inverntory"
        para="Manage Your product catalog and service offerings." />
      <section className="flex">
        <div className="space-y-7">
          <Stdform studentName="Student Name" college="College / Institution" email="Email Address" phone="Phone Number" />
          <Feeform internship="Internship Program Name" batch="Batch Name" start="Start Date" tranier="Trainer Name(Optional)" enddate="End Date" />
          <ProForm tranining="Training Fee" certificate="Certificate Fee" tax="Tax Rate(%)" intership="Internship Fee" discount="Discount Amount" />
          <Priform total="Total Amount" due="Due Amount" paid="Paid Amount" duedate="Due Date" paymentMethod="Payment Type" />
        </div>
        <div>
          <Bill />
        </div>
      </section>
    </div>
  )
}
export default Internship_invoice