import Buttons from "../Button/Buttons"
import { ReactNode } from "react";

type BillProps = {
    head11: string;
    head12: string;
    amount1: number;
    head21: string;
    head22: string;
    amount2: number;
    head31?: string;
    head32?: string;
    amount3?: number;
    subamount11: number;
    subamount12: number;
    subamount13: number;
    subamount21: number;
    subamount22: number;
    subamount23: number;
    conditionPara: string;
    name: string;
    email: string;
    phone: number;
    college: string;
    invoiceid: string;
    date: string;
    duedate: string;
    boxhead?: string;
    boxprogram?: string;
    batch?: string;
    duration?: string;
    count1?: string;
    count2?: string;
    boxinvoicedate?: string;
    boxduedate?: string;
    boxref?: string;
    detailhead: string;
    button: ReactNode;
    // onPrint: () => void;
}

const Bill: React.FC<BillProps> = ({
//   onPrint,
  head11,
  head12,
  amount1,
  head21,
  head22,
  amount2,
  head31,
  head32,
  amount3,
  subamount11,
  subamount12,
  subamount13,
  subamount21,
  subamount22,
  subamount23,
  conditionPara,
  name,
  email,
  phone,
  college,
  invoiceid,
  date,
  duedate,
  boxhead,
  boxprogram,
  batch,
  duration,
  count1,
  count2,
  boxinvoicedate,
  boxduedate,
  boxref,
  detailhead,
  button
})  => {
    return (
        <div className="w-full  h-fit p-4 flex flex-col justify-around items-center rounded-[12px] border border-[#000000] bg-[#FFFFFF] shadow-[5px_5px_10px_rgba(0,0,0,0.5)]">
            <header className="w-full ps-4 flex justify-between border-b border-[#000000] ">
                <div>
                    <p className="iceberg-regular mb-4 text-[32px] leading-[100%] text-[#000000]">DesFlyer </p>
                    <p className="sanchez-regular mb-4 text-[12px] leading-[100%] text-[#000000]">237 DesFlyer, Kings College of Engineering</p>
                    <p className="sanchez-regular mb-4 text-[12px] leading-[100%] text-[#000000]">Desflyer.tech@gmail.com | +91 8525913433</p>
                </div>
                <div>
                    {button}
                </div>
            </header>
            <section className="w-full p-4 flex justify-between items-start">
                <div className="flex flex-col justify-center items-start">
                    <p className="iceberg-regular mb-2 text-[22px] leading-[100%] text-[#000000]">BILLED TO STUDENT</p>
                    <p className="iceberg-regular mb-2 text-[18px] leading-[100%] text-[#000000]">{name} </p>
                    <p className="sanchez-regular mb-2 text-[14px] leading-[100%] text-[#000000]">{email}</p>
                    <p className="sanchez-regular mb-2 text-[14px] leading-[100%] text-[#000000]">+91  {phone}</p>
                    <p className="sanchez-regular mb-2 text-[16px] leading-[100%] text-[#000000]">{college}</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="iceberg-regular mb-2 text-[22px] leading-[100%] text-[#000000]">Invoice Details</p>
                    <p className="sanchez-regular mb-2 text-[14px] leading-[100%] text-[#000000]">Invoice #:{invoiceid}</p>
                    <p className="sanchez-regular mb-2 text-[14px] leading-[100%] text-[#000000]">Date:{date}</p>
                    <p className="sanchez-regular mb-2 text-[14px] leading-[100%] text-[#000000]">Due Date:{duedate}</p>
                </div>
            </section>
            {boxhead && <section className="w-full h-fit flex flex-col justify-center items-start p-4 border border-[#000000] rounded-[12px]">
                <p className="sanchez-regular mb-3 text-[16px] leading-[100%] text-[#000000]">{boxhead}</p>
                <p className="iceberg-regular mb-3 text-[22px] leading-[100%] text-[#000000]">{boxprogram} </p>
                <div className=" w-full flex ">
                    <p className="w-[50%] sanchez-regular mb-3 text-[14px] leading-[100%] text-[#000000]"> {batch}</p>
                    <p className="w-[50%] sanchez-regular mb-3 text-[14px] leading-[100%] text-[#000000]"> {duration}</p>
                </div>
            </section>}
            {boxref && <section className="w-full h-fit flex justify-center items-cente p-4 border border-[#000000] rounded-[12px]">
                <div className=" w-1/3 flex flex-col justify-center items-center">
                    <p className="iceberg-regular my-2 text-[16px] leading-[100%] text-[#000000]">Invoice Date</p>
                    <p className="sanchez-regular my-2 text-[14px] leading-[100%] text-[#000000]">{boxinvoicedate}</p>
                </div>
                <div className=" w-1/3 flex flex-col justify-center items-center">
                    <p className="iceberg-regular my-2 text-[16px] leading-[100%] text-[#000000]">Due Date</p>
                    <p className="sanchez-regular my-2 text-[14px] leading-[100%] text-[#000000]">{boxduedate}</p>
                </div>
                <div className=" w-1/3 flex flex-col justify-center items-center">
                    <p className="iceberg-regular my-2 text-[16px] leading-[100%] text-[#000000]">Reference</p>
                    <p className="sanchez-regular my-2 text-[14px] leading-[100%] text-[#000000]">{boxref}</p>
                </div>
            </section>}
            <section className="w-full flex flex-col items-end justify-center">
                <div className="w-full flex  justify-between items-center border-b border-[#DFDFDF] p-4">
                    <p className="sanchez-regular leading-[100%] text-[20px] text-[#000000]">{detailhead}</p>
                    <p className="sanchez-regular leading-[100%] text-[20px] text-[#000000]">Amount</p>
                </div>
                <div className="w-full border-b border-[#DFDFDF]  p-4 flex justify-between items-center">
                    <div className="flex flex-col justify-center items-start">
                        <p className="iceberg-regular text-[18px] leading-[100%] text-[#000000]">{head11}</p>
                        <p className="sanchez-regular text-[14px] mt-[10px] leading-[100%] text-[#000000]">{head12}</p>
                    </div>
                    {count1 && <div className="w-1/4 mx-2 flex flex-col justify-center items-start px-3  border-x border-[#000000]">
                        <p className="iceberg-regular text-[18px] leading-[100%] text-[#000000] mb-2">Subscription</p>
                        <p className="sanchez-regular leading-[100%] text-[14px] text-[#000000]">{count1}</p>
                    </div>}
                    <div className="sanchez-regular text-[20px] leading-[100%] text-[#000000]">
                        <p>{amount1}.00</p>
                    </div>
                </div>
                <div className="w-full border-b border-[#DFDFDF]  p-4 flex justify-between items-center">
                    <div className="flex flex-col justify-center items-start">
                        <p className="iceberg-regular text-[18px] leading-[100%] text-[#000000]">{head21}</p>
                        <p className="sanchez-regular text-[14px] mt-[10px] leading-[100%] text-[#000000]">{head22}</p>
                    </div>
                    {count2 && <div className="w-1/4 mx-2 flex flex-col justify-center items-start px-3  border-x border-[#000000]">
                        <p className="iceberg-regular text-[18px] leading-[100%] text-[#000000] mb-2">Subscription</p>
                        <p className="sanchez-regular leading-[100%] text-[14px] text-[#000000]">{count2}</p>
                    </div>}
                    <div className="sanchez-regular text-[20px] leading-[100%] text-[#000000]">
                        <p>{amount2}.00</p>
                    </div>
                </div>
                {head31 && <div className="w-full border-b border-[#DFDFDF]  p-4 flex justify-between items-center">
                    <div className="flex flex-col justify-center items-start">
                        <p className="iceberg-regular text-[18px] leading-[100%] text-[#000000]">{head31}</p>
                        <p className="sanchez-regular text-[14px] mt-[10px] leading-[100%] text-[#000000]">{head32}</p>
                    </div>
                    <div className="sanchez-regular text-[20px] leading-[100%] text-[#000000]">
                        <p>{amount3}.00</p>
                    </div>
                </div>}
                <div className="w-full border-b border-[#DFDFDF]  p-4 flex justify-end items-center">
                    <div className="w-[70%]  flex flex-col justify-center items-center">
                        <div className="w-full  flex flex-row gap-5 mb-5">
                            <p className="w-[70%] flex justify-end  items-center  sanchez-regular text-[18px] leading-[100%] text-[#666666]">Subtotal</p>
                            <p className="w-[30%] flex justify-end items-center sanchez-regular text-[18px] leading-[100%] text-[#000000] ">{subamount11}.00</p>
                        </div>
                        <div className="w-full  flex flex-row gap-4 mb-5">
                            <p className="w-[70%] flex justify-end  items-center sanchez-regular text-[18px] leading-[100%] text-[#666666]">Discount (Scholarship)</p>
                            <p className="w-[30%] flex justify-end items-center sanchez-regular text-[18px] leading-[100%] text-[#000000] ">{subamount12}.00</p>
                        </div>
                        <div className="w-full  flex flex-row gap-4 mb-5">
                            <p className="w-[70%] flex justify-end  items-center sanchez-regular text-[18px] leading-[100%] text-[#666666]">GST(18%)</p>
                            <p className="w-[30%] flex justify-end items-center sanchez-regular text-[18px] leading-[100%] text-[#000000] ">{subamount13}.00</p>
                        </div>
                    </div>
                </div>
                <div className="w-full border-b border-[#DFDFDF]  p-4 flex justify-end items-center">
                    <div className="w-[70%]  flex flex-col justify-center items-center">
                        <div className="w-full  flex flex-row gap-5 mb-5">
                            <p className="w-[70%] flex justify-end  items-center  sanchez-regular text-[18px] leading-[100%] text-[#136CED]">Total Amount</p>
                            <p className="w-[30%] flex justify-end items-center sanchez-regular text-[18px] leading-[100%] text-[#136CED] ">{subamount21}.00</p>
                        </div>
                        <div className="w-full  flex flex-row gap-5 mb-5">
                            <p className="w-[70%] flex justify-end  items-center sanchez-regular text-[18px] leading-[100%] text-[#666666]">Paid Amount(Cash)</p>
                            <p className="w-[30%] flex justify-end items-center sanchez-regular text-[18px] leading-[100%] text-[#000000] ">{subamount22}.00</p>
                        </div>
                        <div className="w-full  flex flex-row gap-5 mb-5">
                            <p className="w-[70%] flex justify-end  items-center sanchez-regular text-[18px] leading-[100%] text-[#666666]">Due Amount</p>
                            <p className="w-[30%] flex justify-end items-center sanchez-regular text-[18px] leading-[100%] text-[#000000] ">{subamount23}.00</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-full pt-4">
                <p className="iceberg-regular text-[18px] leading-[100%] text-[#000000] mb-4">Terms & Conditions:</p>
                <p className="sanchez-regular text-[14px] leading-[20px] text-[#666666]">{conditionPara}</p>
            </div>
            <div className="w-full flex justify-end items-center"><Buttons h1="Print" h2="" src1="" src2=""/></div>
        </div>
    )
}

export default Bill