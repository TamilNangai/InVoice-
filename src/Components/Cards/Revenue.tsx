
type RevenueProps = {
    data: {
        productPercent: number
        servicePercent: number
        internshipPercent: number

        productAmount: number
        serviceAmount: number
        internshipAmount: number
    }
}

const Revenue = ({ data }: RevenueProps) => {
    if (data === undefined) return <div>Loading...</div>;
    return (
        <div 
 className=" h-[330px]  flex flex-col m-5 p-5 gap-7 rounded-[12px] border-[2px] border-[#000000] shadow-[5px_5px_10px_rgba(0,0,0,0.2)]">
            <h1 className="text-[24px] text-[#000000] leading-[100%] iceberg-regular">Revenue by Type</h1>
            {/* product */}
            <div>
                <div className="flex justify-between items-center">
                    <h2 className="iceberg-regular text-[20px] leading-[100%] mb-3">Product</h2>
                    <p className="iceberg-regular text-[20px] leading-[100%] mb-3"> {(data.productPercent ?? 0).toFixed(0)}%</p>
                </div>
                {/* <div className="flex justify-center items-center"> */}
                    <div className="relative rounded-full   w-[100%] h-[8px] bg-[#999999]
                    ">
                    <span style={{ width: `${data.productPercent}%` }} className="absolute  h-[8px] rounded-full  bg-[#34C759]"></span>
                    </div>
                {/* </div> */}
                <p className="sanchez-regular text-[12px] leading-[22px] text-[#34C759]">{(data.productAmount ?? 0).toLocaleString("en-IN", {
                    maximumFractionDigits: 0,
                })}</p>
            </div>
            {/* service */}
            <div>
                <div className="flex justify-between items-center">
                    <h2 className="iceberg-regular text-[20px] leading-[100%] mb-3">Service</h2>
                    <p className="iceberg-regular text-[20px] leading-[100%] mb-3">{(data.servicePercent ?? 0).toFixed(0)}%</p>
                </div>
                {/* <div className="flex justify-center items-center"> */}
                    <div className="relative rounded-full   w-[100%] h-[8px] bg-[#999999]">
                        <span style={{ width: `${data.servicePercent}%` }} className="absolute h-[8px] rounded-full  bg-[#FFCC00]"></span>
                    </div>
                {/* </div> */}
                <p className="sanchez-regular text-[12px] leading-[22px] text-[#FFCC00]">{(data.serviceAmount ?? 0).toLocaleString("en-IN", {
                    maximumFractionDigits: 0,
                })}</p>
            </div>
            {/* internship */}
            <div>
                <div className="flex justify-between items-center">
                    <h2 className="iceberg-regular text-[20px] leading-[100%] mb-3">Internship</h2>
                    <p className="iceberg-regular text-[20px] leading-[100%] mb-3">{(data.internshipPercent ?? 0).toFixed(0)}%</p>
                </div>
                {/* <div className="flex justify-center items-center"> */}
                    <div className="relative rounded-full   w-[100%] h-[8px] bg-[#999999]">
                    <span style={{ width: `${data.internshipPercent}%` }} className="absolute  h-[8px] rounded-full  bg-[#FF383C]"></span>
                    </div>
                {/* </div> */}
                <p className="sanchez-regular text-[12px] leading-[22px] text-[#FF383C] ">{(data.internshipAmount ?? 0).toLocaleString("en-IN", {
                    maximumFractionDigits: 0,
                })}</p>
            </div>
        </div>
    )
}

export default Revenue