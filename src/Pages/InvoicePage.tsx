import { useState, useEffect, useRef } from "react";
import InvoicedetailsTable from "@/Components/Table/InvoicedetailsTable";
import { Invoice } from "@/types/invoice";
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
import Dropdown from "@/Components/Dropdown/Dropdown";

const InvoicePage = () => {

  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [isFromFocused, setIsFromFocused] = useState(false);
  const [isToFocused, setIsToFocused] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"type" | "status" | null>(null);
  const fromRef = useRef<HTMLInputElement>(null);
  const toRef = useRef<HTMLInputElement>(null);
  //  Fetch from Firestore
  useEffect(() => {
    const fetchData = async () => {
      const data = await getInvoices();
      setInvoices(data); 
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
    const matchDate = (() => {
      if (!fromDate && !toDate) return true;

      const itemDate = new Date(item.date).setHours(0, 0, 0, 0);
      const start = fromDate ? new Date(fromDate).setHours(0, 0, 0, 0) : null;
      const end = toDate ? new Date(toDate).setHours(23, 59, 59, 999) : null;

      if (start && end) return itemDate >= start && itemDate <= end;
      if (start) return itemDate >= start;
      if (end) return itemDate <= end;

      return true;
    })();


    return matchSearch && matchType && matchStatus && matchDate;
  });
  // const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <section className="w-full h-screen ">
      
      <div className="flex items-center justify-between bg-[#DFDFDF99] px-4">
        <Header h1="Invoice Page" para="Manage your invoices here." // onMenuClick={() => setMobileOpen(true)} 
         />

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

     
      
      {/* <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center items-stretch px-4 m-3 mb-5">

        {/* 🔍 Search 
        <div className="w-full md:w-[48%] lg:w-[30%]">
          <Searchinput
            icon={searchIcon}
            para="Search by Invoice no or client Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

       
       

        {/* 🧾 Type Dropdown 
        <div className="border border-[#00000033] rounded-md w-full md:w-[48%] lg:w-[15%] h-[50px] flex items-center px-2">
          <Dropdown
            selected={type}
            setSelected={setType}
            icon={filterIcon}
            open={openDropdown === "type"}
            setOpen={(val) => setOpenDropdown(val ? "type" : null)}
            options={[
              { label: "Type", value: "" },
              { label: "Internship", value: "internship" },
              { label: "Product", value: "product" },
              { label: "Service", value: "service" },
              { label: "Others", value: "others" },
            ]}
          />
        </div>

        {/* 📊 Status Dropdown 
        <div className="border border-[#00000033] rounded-md w-full md:w-[48%] lg:w-[15%] h-[50px] flex items-center px-2">
          <Dropdown
            selected={status}
            setSelected={setStatus}
            icon={statusIcon}
            open={openDropdown === "status"}
            setOpen={(val) => setOpenDropdown(val ? "status" : null)}
            options={[
              { label: "Status", value: "" },
              { label: "Paid", value: "paid" },
              { label: "Pending", value: "pending" },
              { label: "Over Due", value: "overdue" },
            ]}
          />
        </div>

      
        {/* Start Date 
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-[48%] lg:w-[30%]">
        <div className="relative w-full" onClick={() => fromRef.current?.showPicker()}>
          {!fromDate && !isFromFocused && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black text-lg font-iceberg pointer-events-none">
              Start Date
            </span>
          )}
          <input
            ref={fromRef}
            type="date"
            value={fromDate || ""}
            onChange={(e) => setFromDate(e.target.value)}
            onFocus={() => setIsFromFocused(true)}
            onBlur={() => setIsFromFocused(false)}
            className={`font-iceberg text-sm md:text-lg border border-[#00000033] rounded-md px-3 py-2 w-full h-[50px]
            ${!fromDate && !isFromFocused ? "text-transparent" : "text-black"}`}
          />
        </div>

        {/* End Date 
        <div className="relative w-full" onClick={() => toRef.current?.showPicker()}>
          {!toDate && !isToFocused && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black text-lg font-iceberg pointer-events-none">
              End Date
            </span>
          )}
          <input
            ref={toRef}
            type="date"
            value={toDate || ""}
            onChange={(e) => setToDate(e.target.value)}
            onFocus={() => setIsToFocused(true)}
            onBlur={() => setIsToFocused(false)}
            className={`font-iceberg text-sm md:text-lg border border-[#00000033] rounded-md px-3 py-2 w-full h-[50px] bg-transparent
            ${!toDate && !isToFocused ? "text-transparent" : "text-black"}`}
          />
        </div>
        </div>
      </div> */}
      <div className="grid grid-cols-4 xl:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 lg:gap-1 xl:gap-4 xl:px-4 m-3 mb-5 text-sm lg:text-lg">

        {/* 🔍 Search - full width on mobile/tablet */}
        <div className="col-span-4 xl:col-span-1 ">
          <Searchinput
            icon={searchIcon}
            para="Search by Invoice no or client Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* 🧾 Type Dropdown */}
        <div className="border border-[#00000033] rounded-md flex items-center">
          <Dropdown
            selected={type}
            setSelected={setType}
            icon={filterIcon}
            open={openDropdown === "type"}
            setOpen={(val) => setOpenDropdown(val ? "type" : null)}
            options={[
              { label: "Type", value: "" },
              { label: "Internship", value: "internship" },
              { label: "Product", value: "product" },
              { label: "Service", value: "service" },
              { label: "Others", value: "others" },
            ]}
          />
        </div>

        {/* 📊 Status Dropdown */}
        <div className="border border-[#00000033] rounded-md flex items-center">
          <Dropdown
            selected={status}
            setSelected={setStatus}
            icon={statusIcon}
            open={openDropdown === "status"}
            setOpen={(val) => setOpenDropdown(val ? "status" : null)}
            options={[
              { label: "Status", value: "" },
              { label: "Paid", value: "paid" },
              { label: "Pending", value: "pending" },
              { label: "Over Due", value: "overdue" },
            ]}
          />
        </div>

        {/* 📅 Start Date */}
        <div className="relative w-full" onClick={() => fromRef.current?.showPicker()}>
          {!fromDate && !isFromFocused && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black text-lg lg:text-lg font-iceberg pointer-events-none">
              Start Date
            </span>
          )}
          <input
            ref={fromRef}
            type="date"
            value={fromDate || ""}
            onChange={(e) => setFromDate(e.target.value)}
            onFocus={() => setIsFromFocused(true)}
            onBlur={() => setIsFromFocused(false)}
            className={`font-iceberg text-sm border border-[#00000033] rounded-md px-3 py-2 w-full h-full bg-transparent
                ${!fromDate && !isFromFocused ? "text-transparent" : "text-black"}`}
          />
        </div>

        {/* 📅 End Date */}
        <div className="relative w-full" onClick={() => toRef.current?.showPicker()}>
          {!toDate && !isToFocused && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black text-lg lg:text-lg font-iceberg pointer-events-none">
              End Date
            </span>
          )}
          <input
            ref={toRef}
            type="date"
            value={toDate || ""}
            onChange={(e) => setToDate(e.target.value)}
            onFocus={() => setIsToFocused(true)}
            onBlur={() => setIsToFocused(false)}
            className={`font-iceberg text-sm border border-[#00000033] rounded-md px-3 py-2 w-full h-full bg-transparent
                ${!toDate && !isToFocused ? "text-transparent" : "text-black"}`}
          />
        </div>

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
