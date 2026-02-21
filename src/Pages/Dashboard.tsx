// import DashCards from "@/Components/Cards/DashCards"
import Cards from "@/Components/Cards/Cards"


function Dashboard() {
  return (
    <div className="w-full max-h-40 gap-[2%] flex justify-center items-center">
      < Cards head="Total Revenue" symbol="$" amount={1000.00} cardhead="sanchez-regular text-[#000000]" cardamount="text-[32px]" />
      < Cards head="Invoice Issued" amount={1200} cardhead="sanchez-regular text-[#000000]" cardamount="text-[32px]" />
      < Cards head="Pending Payments" symbol="$" amount={1200.00} para="-- 25 Invoice Pending" cardhead="sanchez-regular text-[#000000]" cardamount="text-[32px]" cardpara="text-[16px] text-[#000000]  " />
      < Cards head="Clients" amount={2400} cardhead="sanchez-regular text-[#000000]" cardamount="text-[32px]" />
    </div>
  )
}

export default Dashboard
