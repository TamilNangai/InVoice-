// type CardProps ={
//     head:string;
//     symbol?:string;
//     amount:number;
//     para?:string;
//     cardhead?:string;
//     cardamount?:string;
//     cardpara?:string;
// }
// const Cards = ({ head, amount, para, cardhead, cardamount, cardpara, symbol }:CardProps) => {
//     return (
//         <div className=" w-full p-4 flex  items-start pe-2 ps-3 py-5 flex-col gap-4 h-[150px] rounded-[8px] border-[2px] border-[#000000] bg-[#FFFFFF] shadow-[5px_5px_10px_rgba(0,0,0,0.2)]">
//             <p className={`  text-[24px] leading-[100%] ${cardhead}`}>{head}</p>
//             <p className={`iceberg-regular leading-[100%] text-[#000000] ${cardamount}`}>{symbol}{amount}</p>
//            {para && <p className={`sanchez-regular h-[18px]  mt-2 leading-[100%] ${cardpara}`}>{para}</p>}
//         </div>
//     )
// }

// export default Cards
import React, { forwardRef } from "react";

// ✅ Props type
type CardProps = {
  head: string;
  symbol?: string;
  amount: number;
  para?: string;
  cardhead?: string;
  cardamount?: string;
  cardpara?: string;
};

// ✅ ForwardRef version (optional) for print/export
const Cards = forwardRef<HTMLDivElement, CardProps>(
  ({ head, amount, para, cardhead, cardamount, cardpara, symbol }, ref) => {
    return (
      <div
        ref={ref}
        className="w-full p-4 flex flex-col items-start gap-4 h-[150px] rounded-[8px] border-[2px] border-[#000000] bg-[#FFFFFF] shadow-[5px_5px_10px_rgba(0,0,0,0.2)]"
      >
        {/* Header */}
        <p className={`text-[24px] leading-[100%] ${cardhead || ""}`}>
          {head}
        </p>

        {/* Amount */}
        <p className={`iceberg-regular leading-[100%] text-[#000000] ${cardamount || ""}`}>
          {symbol}{amount}
        </p>

        {/* Optional Paragraph */}
        {para && (
          <p className={`sanchez-regular h-[18px] mt-2 leading-[100%] ${cardpara || ""}`}>
            {para}
          </p>
        )}
      </div>
    );
  }
);

Cards.displayName = "Cards";

export default Cards;