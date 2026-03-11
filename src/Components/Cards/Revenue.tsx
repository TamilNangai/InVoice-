

const Revenue = () => {
    return (
        <div className="w-[100%] h-[330px]  flex flex-col  p-5 gap-7 rounded-[12px] border-[2px] border-[#000000] shadow-[5px_5px_10px_rgba(0,0,0,0.2)]">
            <h1 className="text-[24px] text-[#000000] leading-[100%] iceberg-regular mt-5">Revenue by Type</h1>
            <div>
                <div className="flex justify-between items-center">
                    <h2 className="iceberg-regular text-[20px] leading-[100%]">Product</h2>
                    <p className="iceberg-regular text-[20px] leading-[100%]">45%</p>
                </div>
                <div className="flex justify-center items-center">
                    <div className="relative rounded-full   w-[100%] h-[8px] bg-[#999999]">
                        <span className="absolute w-[45%] h-[8px] rounded-full  bg-[#34C759]"></span>
                    </div>
                </div>
                <p className="sanchez-regular text-[12px] leading-[22px] text-[#34C759]">100000</p>
            </div>
            <div>
                <div className="flex justify-between items-center">
                    <h2 className="iceberg-regular text-[20px] leading-[100%]">Service</h2>
                    <p className="iceberg-regular text-[20px] leading-[100%]">35%</p>
                </div>
                <div className="flex justify-center items-center">
                    <div className="relative rounded-full   w-[100%] h-[8px] bg-[#999999]">
                        <span className="absolute w-[35%] h-[8px] rounded-full  bg-[#FFCC00]"></span>
                    </div>
                </div>
                <p className="sanchez-regular text-[12px] leading-[22px] text-[#FFCC00]">75000</p>
            </div>
            <div>
                <div className="flex justify-between items-center">
                    <h2 className="iceberg-regular text-[20px] leading-[100%]">Internship</h2>
                    <p className="iceberg-regular text-[20px] leading-[100%]">20%</p>
                </div>
                <div className="flex justify-center items-center">
                    <div className="relative rounded-full   w-[100%] h-[8px] bg-[#999999]">
                        <span className="absolute w-[20%] h-[8px] rounded-full  bg-[#FF383C]"></span>
                    </div>
                </div>
                <p className="sanchez-regular text-[12px] leading-[22px] text-[#FF383C] ">40000</p>
            </div>
        </div>
    )
}

export default Revenue