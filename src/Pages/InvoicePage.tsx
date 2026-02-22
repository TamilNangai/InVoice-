import Stdform from "@/Components/Form/Stdform"
import Header from "@/Components/Nav/Header"
import Create from "@/Components/Cards/Create"
import Popup1 from "@/assets/Popup1.png"
import Popup2 from "@/assets/Popup2.png"
import Popup3 from "@/assets/Popup3.png"
import Popup4 from "@/assets/Popup4.png"
import src from '@/assets/Vector.png'
import vectorw from '@/assets/Vectorw.png'
import Feeform from "@/Components/Form/Feeform"
import ProForm from "@/Components/Form/Proform"
import Priform from "@/Components/Form/Priform"
const InvoicePage = () => {
  return (
    <div>
      <section>
        <Header h1="Invoice Page" para="Manage your invoices here." />
        <div className="absolute right-10 top-4">
          <Create popup1={Popup1}
            popup2={Popup2}
            popup3={Popup3}
            popup4={Popup4}
            src1={vectorw}
            src2={src}

            h1="Select Invoice Type"
            para1="Choose the type of invoice you want to create. "
            para6="This will customize the form fields for your needs. "
            h2="Student Internship"
            para2="Internship fees, training
programs, certifications"
            h3="Product Invoice"
            para3="Physical or digital product
billing and shipping"
            h4="Service Invoice"
            para4="Physical or digital product
billing and shipping"
            h5="Other Invoice"
            para5="Customer or miscellaneous
service billing"
            h6="Create Invoice" />
        </div>
      </section>
      <Stdform studentName="Student Name" college="College / Institution" email="Email Address" phone="Phone Number" />
      <Feeform internship="Internship Program Name" batch="Batch Name" start="Start Date" tranier="Trainer Name(Optional)" enddate="End Date" />
      <ProForm tranining="Training Fee" certificate="Certificate Fee" tax="Tax Rate(%)" intership="Internship Fee" discount="Discount Amount" />
      <Priform total="Total Amount" due="Due Amount" paid="Paid Amount" duedate="Due Date" paymentMethod="Payment Type"/>
    </div>
  )
}

export default InvoicePage