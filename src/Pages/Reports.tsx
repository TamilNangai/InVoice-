import Header from "@/Components/Nav/Header"
import Radiogroup from "@/Components/Nav/Radiogroup"
import Cards from "@/Components/Cards/Cards"
import Revenue from "@/Components/Cards/Revenue"
import ex from "@/assets/ex.png"
import Reporttable from "@/Components/Table/Reporttable"

const Reports = () => {
  return (
    <div className="w-[1500px]">
      <Header h1="Products & Inverntory"
        para="Manage Your product catalog and service offerings." />
      <div className="absolute right-10 top-4">
        <button className="flex font-iceberg text-2xl text-black px-5 py-2 rounded-lg border-2 border-black"><img className="h-8" src={ex} />Export Data</button>
      </div>
      <div className="w-full pl-10">
        <Radiogroup />
        <div className="w-full flex justify-center items-center ">
          <div className="w-[50%] m-5  grid grid-cols-2 gap-[30px]  place-items-center">
            < Cards head="Total Revenue" amount={50000.00} para="+15.% form last month" cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#34C759]" />
            < Cards head="Paid Invoice" amount={145} para="90% Collection rate" cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#34C759]" />
            < Cards head="Pending Amount" amount={50000.00} para="10 Invoice pending" cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px]  text-[#FFCC00] " />
            < Cards head="Overdue" amount={20000.00} para="3 invoice overdue" cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#FF383C]" />
          </div>
          <div className="w-[50%] mr-10"><Revenue /></div>
        </div>
      </div>
      <div className="mx-5 pl-5">
      <Reporttable />
      </div>
    </div>
  )
}

export default Reports