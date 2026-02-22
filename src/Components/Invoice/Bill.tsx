import Button from "../Button/Buttons"

const Bill = () => {
    return (
        <div className="w-[50%] m-5 h-fit p-4 flex flex-col justify-around items-center rounded-[12px] border border-[#000000] bg-[#FFFFFF] shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)]">
            <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full flex  justify-between items-center border-b border-[#DFDFDF] p-4">
                    <p className="sanchez-regular leading-[100%] text-[20px] text-[#000000]">Program Enrolled</p>
                    <p className="sanchez-regular leading-[100%] text-[20px] text-[#000000]">Amount</p>
                </div>
                <div className="w-full border-b border-[#DFDFDF]  p-4 flex justify-between items-center">
                    <div className="flex flex-col justify-center items-start">
                        <p className="iceberg-regular text-[18px] leading-[100%] text-[#000000]">Training Program Fee</p>
                        <p className="sanchez-regular text-[14px] mt-[10px] leading-[100%] text-[#000000]">Core Curriculum Access and mentorship</p>
                    </div>
                    <div className="sanchez-regular text-[20px] leading-[100%] text-[#000000]">
                        <p>500.00</p>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="w-full pt-4">
                <p className="iceberg-regular text-[18px] leading-[100%] text-[#000000] mb-4">Terms & Conditions:</p>
                <p className="sanchez-regular text-[14px] leading-[20px] text-[#666666]">Payment is due within 7 days of invoice issuance, Fees are non-refundable once the internship program has commenced. This internship does not guarantee full-time employment. Certificate will be issued upon successful completion of all assigned projects.</p>
            </div>
            <div className="w-full flex justify-end items-center"><Button h1="Print" /></div>
        </div>
    )
}

export default Bill