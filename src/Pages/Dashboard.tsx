import Header from "@/Components/Nav/Header"
import Add  from "@/Components/Form/Add"
import Stdform from "@/Components/Form/Stdform"
 import DashCards from "@/Components/Cards/DashCards"
import Cards from "@/Components/Cards/Cards"
function Dashboard() {
  return (
    <div>
      <Header  h1="Dashboard"
        h2=""
      />
            <Add
        h1="Add Products"
        h2="Details"
        h3="Product & Service Details"
        h4="Product or Service Name"
        h5="Product or Service ID"
        h6="Price Details"
        h7="Price"
        para1="Manage your product catalog and service offerings."
        src="" />
        <div className="w-full max-h-40 gap-[2%] flex justify-center items-center">
      < Cards head="Total Revenue" symbol="$" amount={1000.00} cardhead="sanchez-regular text-[#000000]" cardamount="text-[32px]" />
      < Cards head="Invoice Issued" amount={1200} cardhead="sanchez-regular text-[#000000]" cardamount="text-[32px]" />
      < Cards head="Pending Payments" symbol="$" amount={1200.00} para="-- 25 Invoice Pending" cardhead="sanchez-regular text-[#000000]" cardamount="text-[32px]" cardpara="text-[16px] text-[#000000]  " />
      < Cards head="Clients" amount={2400} cardhead="sanchez-regular text-[#000000]" cardamount="text-[32px]" />

    </div>
        </div>
)}


export default Dashboard

