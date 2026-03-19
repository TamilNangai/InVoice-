import { useRef, useState } from "react"
import html2canvas from "html2canvas"

import Header from "@/Components/Nav/Header"
import Radiogroup from "@/Components/Nav/Radiogroup"
import Cards from "@/Components/Cards/Cards"
import Revenue from "@/Components/Cards/Revenue"
import ex from "@/assets/ex.png"
import Reporttable from "@/Components/Table/Reporttable"

const Reports = () => {

  const captureRef = useRef<HTMLDivElement>(null)
  const [image, setImage] = useState<string | null>(null)

  const handleExport = async () => {
    if (!captureRef.current) return

    const canvas = await html2canvas(captureRef.current, {
      scale: 2,
      useCORS: true
    })

    const imgData = canvas.toDataURL("image/png")
    setImage(imgData)
  }

  return (
    <div className="w-full h-screen overflow-auto">

      {/* HEADER */}
      <div className="flex items-center justify-between bg-[#DFDFDF99] px-4">
        <Header
          h1="Products & Inverntory"
          para="Manage Your product catalog and service offerings."
        />

        <div>
          <button
            onClick={handleExport}
            className="flex items-center gap-2 font-iceberg text-2xl text-black px-5 py-2 rounded-lg border-2 border-black"
          >
            <img className="h-8" src={ex} />
            Export Data

          </button>
        </div>
      </div>

      <div className="w-full pl-10">
        <Radiogroup />

        <div ref={captureRef}>
          {/* <div className="w-[50%] m-5 grid grid-cols-2 ..." ref={captureRef}> */}
          <div className="w-full flex justify-center items-center">

            {/* CARDS */}
            <div className="w-[50%] m-5 grid grid-cols-2 gap-[30px] place-items-center">
              <Cards head="Total Revenue" amount={50000.00} para="+15.% from last month" cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#34C759]" />
              <Cards head="Paid Invoice" amount={145} para="90% Collection rate" cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#34C759]" />
              <Cards head="Pending Amount" amount={50000.00} para="10 Invoice pending" cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#FFCC00]" />
              <Cards head="Overdue" amount={20000.00} para="3 invoice overdue" cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#FF383C]" />
            </div>

            {/* CHART */}
            <div className="w-[50%] mr-10 pl-3">
              <Revenue />
            </div>

          </div>

        </div>
      </div>

      {/* TABLE */}
      <div className="mx-5 pl-5">
        <Reporttable />
      </div>

      {/* 🔥 IMAGE PREVIEW */}
      {image && (
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">Preview</h2>
          <img src={image} alt="Cards Preview" className="border rounded shadow" />
        </div>
      )}

    </div>
  )
}

export default Reports