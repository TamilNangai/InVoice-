import { useState, useRef } from "react";


import InvoicedetailsTable from "@/Components/Table/InvoicedetailsTable";
import Searchinput from "@/Components/Filter/Searchinput";


import searchIcon from "@/assets/filter/search.svg";
import filterIcon from "@/assets/filter/filter.svg";
import statusIcon from "@/assets/filter/circle.svg";
import dateIcon from "@/assets/filter/date.svg";


import Header from "@/Components/Nav/Header"
import Create from "@/Components/Cards/Create"
import Popup1 from "@/assets/Popup1.png"
import Popup2 from "@/assets/Popup2.png"
import Popup3 from "@/assets/Popup3.png"
import Popup4 from "@/assets/Popup4.png"
import src1 from '@/assets/Vectorw.png'
import src2 from '@/assets/Vector.png'



const invoices = [
  { no: "INV-2025-012", type: "Internship", name: "Hariharan S", sub: "HR Internship", amount: "5000/-", status: "Paid", pending: "5000/-", date: "2025-12-28" },
  { no: "INV-2025-011", type: "Product", name: "Swetha S", sub: "Invoice Management", amount: "100000/-", status: "Pending", pending: "100000/-", date: "2025-12-02" },
  { no: "INV-2025-010", type: "Internship", name: "Tamil K", sub: "Web Development Internship", amount: "10000/-", status: "Over Due", pending: "10000/-", date: "2025-11-28" },
  { no: "INV-2025-009", type: "Product", name: "Akash K", sub: "Attendance Management", amount: "200000/-", status: "Paid", pending: "200000/-", date: "2025-11-02" },
  { no: "INV-2025-008", type: "Others", name: "Akash K", sub: "Some things", amount: "20000/-", status: "Pending", pending: "20000/-", date: "2025-10-28" },
  { no: "INV-2025-007", type: "Internship", name: "Swetha S", sub: "Digital Marketing Internship", amount: "4000/-", status: "Over Due", pending: "4000/-", date: "2025-10-02" },
  { no: "INV-2025-010", type: "Internship", name: "Tamil K", sub: "Web Development Internship", amount: "10000/-", status: "Over Due", pending: "10000/-", date: "2025-11-28" },
  { no: "INV-2025-009", type: "Product", name: "Akash K", sub: "Attendance Management", amount: "200000/-", status: "Paid", pending: "200000/-", date: "2025-11-02" },
  { no: "INV-2025-008", type: "Others", name: "Akash K", sub: "Some things", amount: "20000/-", status: "Pending", pending: "20000/-", date: "2025-10-28" },
  { no: "INV-2025-007", type: "Internship", name: "Swetha S", sub: "Digital Marketing Internship", amount: "4000/-", status: "Over Due", pending: "4000/-", date: "2025-10-02" },
  { no: "INV-2025-012", type: "Internship", name: "Hariharan S", sub: "HR Internship", amount: "5000/-", status: "Paid", pending: "5000/-", date: "2025-12-28" },
  { no: "INV-2025-011", type: "Product", name: "Swetha S", sub: "Invoice Management", amount: "100000/-", status: "Pending", pending: "100000/-", date: "2025-12-02" },
  { no: "INV-2025-010", type: "Internship", name: "Tamil K", sub: "Web Development Internship", amount: "10000/-", status: "Over Due", pending: "10000/-", date: "2025-11-28" },
  { no: "INV-2025-009", type: "Product", name: "Akash K", sub: "Attendance Management", amount: "200000/-", status: "Paid", pending: "200000/-", date: "2025-11-02" },
 
];



const InvoicePage = () => {

  const dateRef = useRef<HTMLInputElement>(null);



const [search, setSearch] = useState("");
const [type, setType] = useState("");
const [status, setStatus] = useState("");
const [date, setDate] = useState("");

const filteredInvoices = invoices.filter((item) => {

  const matchSearch =
    item.no.toLowerCase().includes(search.toLowerCase()) ||
    item.name.toLowerCase().includes(search.toLowerCase());

  const matchType = type ? item.type === type : true;

  const matchStatus = status ? item.status === status : true;

  const matchDate = date ? item.date === date : true;

  return matchSearch && matchType && matchStatus && matchDate;

});



  return (
    <section className="w-[100%]">

      <Header h1="Invoice Page" para="Manage your invoices here." />

      <div className="absolute right-10 top-4">
        <Create
          popup1={Popup1}
          popup2={Popup2}
          popup3={Popup3}
          popup4={Popup4}
          src1={src1}
          src2={src2}

          h1="Select Invoice Type"
          para1="Choose the type of invoice you want to create."
          para6="This will customize the form fields for your needs."
          h2="Student Internship"
          para2="Internship fees, training programs, certifications"
          h3="Product Invoice"
          para3="Physical or digital product billing and shipping"
          h4="Service Invoice"
          para4="Physical or digital product billing and shipping"
          h5="Other Invoice"
          para5="Customer or miscellaneous service billing"
          h6="Create Invoice"
        />
      </div>

      <div className=" flex gap-6 justify-center items-center px-20 m-3 mb-5">

        <div className="w-5/12">

          <Searchinput
            icon={searchIcon}
            para="Search by Invoice no or client Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

    </div>
        <div className="flex items-center gap-2 border border-[#00000033] rounded-md px-4 py-2 w-2/12 ">

          <img src={filterIcon} className="w-4 h-4" />

          <select
            className="bg-transparent outline-none w-full font-iceberg text-[18px]"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Type</option>
            <option value="Internship">Internship</option>
            <option value="Product">Product</option>
            <option value="Others">Others</option>
          </select>

        </div>


        <div className="flex items-center gap-2 border border-[#00000033] rounded-md px-4 py-2 w-2/12 ">

          <img src={statusIcon} className="w-4 h-4" />

          <select
            className="bg-transparent outline-none w-full font-iceberg text-[18px]"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Status</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
            <option value="Over Due">Over Due</option>
          </select>

        </div>

        <div className="flex items-center gap-3 border border-[#00000033] rounded-md px-4 py-2 w-3/12  cursor-pointer"
          onClick={() => dateRef.current?.showPicker()}>

          <img src={dateIcon} className="w-5 h-5" />

          <span className="font-iceberg text-[18px] text-gray-600">
            {date ? date : "Date Range"}
          </span>

          <input
            ref={dateRef}
            type="date"
            onChange={(e) => setDate(e.target.value)}
            className="absolute opacity-0 pointer-events-none"
          />

        </div>


  </div>


      <div className="m-3 ms-10">
        <h1 className="text-[32px] font-iceberg">
          Invoice Details
        </h1>
      </div>

      <div className="w-[100%] flex justify-center items-center">
        <InvoicedetailsTable invoices={filteredInvoices} />

      </div>

    </section>
  );
};

export default InvoicePage;

