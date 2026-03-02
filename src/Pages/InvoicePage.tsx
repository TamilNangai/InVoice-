import Header from "@/Components/Nav/Header"
import Create from "@/Components/Cards/Create"
import Popup1 from "@/assets/Popup1.png"
import Popup2 from "@/assets/Popup2.png"
import Popup3 from "@/assets/Popup3.png"
import Popup4 from "@/assets/Popup4.png"
import src1 from '@/assets/Vectorw.png'
import src2 from '@/assets/Vector.png'
import InvoicedetailsTable from "@/Components/Table/InvoicedetailsTable"

const InvoicePage = () => {
  return (
<<<<<<< HEAD
    <>
      <section>
=======
      <section className="w-[1500px]">
>>>>>>> cc05dd9a118298e175153bef9d603c4b42d3c87d
        <Header h1="Invoice Page" para="Manage your invoices here." />
        <div className="absolute right-10 top-4">
          <Create popup1={Popup1}
            popup2={Popup2}
            popup3={Popup3}
            popup4={Popup4}
            src1={src1}
            src2={src2}

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
      <div className="mt-20">
        <h1>Product Details</h1>
          <InvoicedetailsTable />
      </div>

  </>

  )
}

export default InvoicePage