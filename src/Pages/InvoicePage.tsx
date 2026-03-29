import { useState, useEffect } from "react";
import InvoicedetailsTable, { Invoice } from "@/Components/Table/InvoicedetailsTable";
import Searchinput from "@/Components/Filter/Searchinput";
import searchIcon from "@/assets/filter/search.svg";
import filterIcon from "@/assets/filter/filter.svg";
import statusIcon from "@/assets/filter/circle.svg";
import Header from "@/Components/Nav/Header";
import Create from "@/Components/Cards/Create";
import Popup1 from "@/assets/Popup1.png";
import Popup2 from "@/assets/Popup2.png";
import Popup3 from "@/assets/Popup3.png";
import Popup4 from "@/assets/Popup4.png";
import src1 from '@/assets/Vectorw.png';
import src2 from '@/assets/Vector.png';
import { getInvoices } from "@/utils/getInvoice";

const InvoicePage = () => {

  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  //  Fetch from Firestore
  useEffect(() => {
    const fetchData = async () => {
      const data = await getInvoices();
      setInvoices(data); // ✅ this is fine here
    };
    fetchData();
  }, []);

  //  Filtering
  const filteredInvoices = invoices.filter((item) => {
    const matchSearch =
      item.invoiceId.toLowerCase().includes(search.toLowerCase()) ||
      item.client.toLowerCase().includes(search.toLowerCase());

    const matchType = type ? item.type === type : true; // ✅ make sure this matches the dropdown
    const matchStatus = status ? item.status === status : true;
    const matchDate =
      fromDate && toDate
        ? new Date(item.date) >= new Date(fromDate) &&
        new Date(item.date) <= new Date(toDate)
        : true;

    return matchSearch && matchType && matchStatus && matchDate;
  });

  return (
    <section className="w-full h-screen ">
      
      <div className="flex items-center justify-between bg-[#DFDFDF99] px-4">
        <Header h1="Invoice Page" para="Manage your invoices here." />

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

      {/* Filters */}
      <div className="flex gap-6 justify-center items-center px-5 m-3 mb-5">
        
          <div className="w-2/6">
            <Searchinput
              icon={searchIcon}
              para="Search by Invoice no or client Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
        </div>
              
        <div className="flex items-center gap-2 border border-[#00000033] rounded-md px-7 py-2 w-1/6 h-[50px]">
          <img src={filterIcon} className="w-4 h-4" />
          <select
            className="bg-transparent outline-none w-full font-iceberg text-[18px]"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option className="font-sanchez text-sm" value="">Type</option>
            <option className="font-sanchez text-sm" value="internship">Internship</option>
            <option className="font-sanchez text-sm" value="product">Product</option>
            <option className="font-sanchez text-sm" value="service">Service</option>
            <option className="font-sanchez text-sm" value="others">Others</option>
          </select>
        </div>
      
        <div className="flex items-center gap-2 border border-[#00000033] rounded-md px-7 py-2 w-1/6 h-[50px]">
          <img src={statusIcon} className="w-4 h-4" />
          <select
            className="bg-transparent outline-none w-full font-iceberg text-[18px]"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option  className="font-sanchez text-sm" value="">Status</option>
            <option  className="font-sanchez text-sm" value="paid">Paid</option>
            <option  className="font-sanchez text-sm" value="pending">Pending</option>
            <option  className="font-sanchez text-sm" value="overdue">Over Due</option>
          </select>
        </div>

        <div className="flex gap-3 w-2/6">
         
          <input
            type="date"
            value={fromDate || ""}
            onChange={(e) => setFromDate(e.target.value)}
            placeholder="Start date"
            className="font-iceberg text-lg border border-[#00000033] rounded-md px-3 py-2 w-1/2 h-[50px]"
          />

          <input
            type="date"
            value={toDate || ""}
            onChange={(e) => setToDate(e.target.value)}
            placeholder="End date"
            className="font-iceberg text-lg border border-[#00000033] rounded-md px-3 py-2 w-1/2 h-[50px]"
          />

        </div>

      </div>

      <div className="m-3 ms-10">
        <h1 className="text-[32px] font-iceberg">Invoice Details</h1>
      </div>
      


      {/* ✅ Pass filtered data */}
      <div className="w-full flex justify-center">
        <InvoicedetailsTable
          invoices={filteredInvoices}
          onUpdateInvoice={(updated) => {
            setInvoices((prev) =>
              prev.map((inv) =>
                inv.uniqueId === updated.uniqueId ? updated : inv
              )
            );
          }}
        />


      </div>
    </section>
  );
};

export default InvoicePage;
