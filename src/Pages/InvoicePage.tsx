import Header from "@/Components/Nav/Header"
import Create from "@/Components/Cards/Create"
import Popup1 from "@/assets/Popup1.png"
import Popup2 from "@/assets/Popup2.png"
import Popup3 from "@/assets/Popup3.png"
import Popup4 from "@/assets/Popup4.png"
import src1 from '@/assets/Vectorw.png'
import src2 from '@/assets/Vector.png'
import Search from "@/assets/filter/search.svg"
import Filter from "@/Components/Filter/Filter"
import dropdown from "@/assets/filter/dropdown.svg"
import filter from "@/assets/filter/filter.svg"
import circle from "@/assets/filter/circle.svg"
import date from "@/assets/filter/date.svg"
import InvoicedetailsTable from "@/Components/Table/InvoicedetailsTable"
import Searchinput from "@/Components/Filter/Searchinput"

const InvoicePage = () => {
  return (
    <>
      <section className="w-[1500px]">
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
        <section className="grid grid-cols-[4fr_1fr_1fr_1fr] gap-10 mx-10 mt-5 ">
          <Searchinput icon={Search} para="Search by Invoice no or client Name" />
          <Filter icon={filter} para="Type" dropdownimg={dropdown} />
          <Filter icon={circle} para="Status" dropdownimg={dropdown} />
          <Filter icon={date} para="Data Range"  />
        </section>
        <div className="m-20 font-iceberg text-xl">
          <h1>Product Details</h1>
          <InvoicedetailsTable />
        </div>
      </section>


    </>

  )
}

export default InvoicePage