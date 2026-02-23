import Buttons from "../Button/Buttons"

const Bill = () => {
    return (
        <div className="w-[550px] m-5 h-fit p-4 flex flex-col justify-around items-center rounded-[12px] border border-[#000000] bg-[#FFFFFF] shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)]">
            <header className="w-full ps-4 flex justify-between border-b border-[#000000] ">
                <div>
                    <p className="iceberg-regular mb-4 text-[32px] leading-[100%] text-[#000000]">DesFlyer </p>
                    <p className="sanchez-regular mb-4 text-[12px] leading-[100%] text-[#000000]">237 DesFlyer, Kings College of Engineering</p>
                    <p className="sanchez-regular mb-4 text-[12px] leading-[100%] text-[#000000]">Desflyer.tech@gmail.com | +91 8525913433</p>
                </div>
                <div>
                    <Buttons h1="Internship Invoice" />
                </div>
            </header>
            <section className="w-full p-4 flex justify-between items-start">
                <div className="flex flex-col justify-center items-start">
                    <p className="iceberg-regular mb-2 text-[22px] leading-[100%] text-[#000000]">BILLED TO STUDENT</p>
                    <p className="iceberg-regular mb-2 text-[18px] leading-[100%] text-[#000000]">Akash </p>
                    <p className="sanchez-regular mb-2 text-[14px] leading-[100%] text-[#000000]">akash@gmail.com</p>
                    <p className="sanchez-regular mb-2 text-[14px] leading-[100%] text-[#000000]">+91 8525913433</p>
                    <p className="sanchez-regular mb-2 text-[16px] leading-[100%] text-[#000000]">State University of Technology</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="iceberg-regular mb-2 text-[22px] leading-[100%] text-[#000000]">Invoice Details</p>
                    <p className="sanchez-regular mb-2 text-[14px] leading-[100%] text-[#000000]">Invoice #:INV-2026-001</p>
                    <p className="sanchez-regular mb-2 text-[14px] leading-[100%] text-[#000000]">Date: JAN 24, 2026</p>
                    <p className="sanchez-regular mb-2 text-[14px] leading-[100%] text-[#000000]">Due Date: Feb 24, 2026</p>
                </div>
            </section>
            <section className="w-full h-fit flex flex-col justify-center items-start p-4 border border-[#000000] rounded-[12px]">
                <p className="sanchez-regular mb-3 text-[16px] leading-[100%] text-[#000000]">Program Enrolled</p>
                <p className="iceberg-regular mb-3 text-[22px] leading-[100%] text-[#000000]">Web Development Internship </p>
                <div className=" w-full flex ">
                    <p className="w-[50%] sanchez-regular mb-3 text-[14px] leading-[100%] text-[#000000]">Batch: Summer 2024- A</p>
                    <p className="w-[50%] sanchez-regular mb-3 text-[14px] leading-[100%] text-[#000000]">Duration: Jan 01 -Feb 25,2026</p>
                </div>
            </section>
            <section className="w-full flex flex-col items-end justify-center">
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
                <div className="w-full border-b border-[#DFDFDF]  p-4 flex justify-between items-center">
                    <div className="flex flex-col justify-center items-start">
                        <p className="iceberg-regular text-[18px] leading-[100%] text-[#000000]">Internship Administrative Fee</p>
                        <p className="sanchez-regular text-[14px] mt-[10px] leading-[100%] text-[#000000]">Project allocation and assessment</p>
                    </div>
                    <div className="sanchez-regular text-[20px] leading-[100%] text-[#000000]">
                        <p>250.00</p>
                    </div>
                </div>
                <div className="w-full border-b border-[#DFDFDF]  p-4 flex justify-between items-center">
                    <div className="flex flex-col justify-center items-start">
                        <p className="iceberg-regular text-[18px] leading-[100%] text-[#000000]">Certification Issuance</p>
                        <p className="sanchez-regular text-[14px] mt-[10px] leading-[100%] text-[#000000]">Digital and physical certificate</p>
                    </div>
                    <div className="sanchez-regular text-[20px] leading-[100%] text-[#000000]">
                        <p>50.00</p>
                    </div>
                </div>
                <div className="w-full border-b border-[#DFDFDF]  p-4 flex justify-end items-center">
                    <div className="w-[50%]  flex flex-col justify-center items-center">
                        <div className="w-full  flex flex-row gap-5 mb-5">
                            <p className="w-[80%] flex justify-end  items-center  sanchez-regular text-[18px] leading-[100%] text-[#666666]">Subtotal</p>
                            <p className="w-[20%] flex justify-end items-center sanchez-regular text-[18px] leading-[100%] text-[#000000] ">800.00</p>
                        </div>
                        <div className="w-full  flex flex-row gap-5 mb-5">
                            <p className="w-[80%] flex justify-end  items-center sanchez-regular text-[18px] leading-[100%] text-[#666666]">Discount (Scholarship)</p>
                            <p className="w-[20%] flex justify-end items-center sanchez-regular text-[18px] leading-[100%] text-[#000000] ">0.00</p>
                        </div>
                        <div className="w-full  flex flex-row gap-5 mb-5">
                            <p className="w-[80%] flex justify-end  items-center sanchez-regular text-[18px] leading-[100%] text-[#666666]">GST(18%)</p>
                            <p className="w-[20%] flex justify-end items-center sanchez-regular text-[18px] leading-[100%] text-[#000000] ">50.00</p>
                        </div>
                    </div>
                </div>
                <div className="w-full border-b border-[#DFDFDF]  p-4 flex justify-end items-center">
                    <div className="w-[50%]  flex flex-col justify-center items-center">
                        <div className="w-full  flex flex-row gap-5 mb-5">
                            <p className="w-[80%] flex justify-end  items-center  sanchez-regular text-[18px] leading-[100%] text-[#136CED]">Total Amount</p>
                            <p className="w-[20%] flex justify-end items-center sanchez-regular text-[18px] leading-[100%] text-[#136CED] ">850.00</p>
                        </div>
                        <div className="w-full  flex flex-row gap-5 mb-5">
                            <p className="w-[80%] flex justify-end  items-center sanchez-regular text-[18px] leading-[100%] text-[#666666]">Paid Amount(Cash)</p>
                            <p className="w-[20%] flex justify-end items-center sanchez-regular text-[18px] leading-[100%] text-[#000000] ">50.00</p>
                        </div>
                        <div className="w-full  flex flex-row gap-5 mb-5">
                            <p className="w-[80%] flex justify-end  items-center sanchez-regular text-[18px] leading-[100%] text-[#666666]">Due Amount</p>
                            <p className="w-[20%] flex justify-end items-center sanchez-regular text-[18px] leading-[100%] text-[#000000] ">500.00</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-full pt-4">
                <p className="iceberg-regular text-[18px] leading-[100%] text-[#000000] mb-4">Terms & Conditions:</p>
                <p className="sanchez-regular text-[14px] leading-[20px] text-[#666666]">Payment is due within 7 days of invoice issuance, Fees are non-refundable once the internship program has commenced. This internship does not guarantee full-time employment. Certificate will be issued upon successful completion of all assigned projects.</p>
            </div>
            <div className="w-full flex justify-end items-center"><Buttons h1="Print" /></div>
        </div>
    )
}

export default Bill