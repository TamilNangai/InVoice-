type CardProps ={
    head:string;
    symbol?:string;
    amount:number;
    para?:string;
    cardhead?:string;
    cardamount?:string;
    cardpara?:string;
}
const Cards = ({ head, amount, para, cardhead, cardamount, cardpara, symbol }:CardProps) => {
    return (
        <div className="w-max min-w-[276px]  p-4 flex  items-start pe-2 ps-3 py-5 flex-col gap-4 h-[150px] rounded-[8px] border-[2px] border-[#000000] bg-[#FFFFFF]">
            <p className={`  text-[24px] leading-[100%] ${cardhead}`}>{head}</p>
            <p className={`iceberg-regular     leading-[100%] text-[#000000] ${cardamount}`}>{symbol}{amount}</p>
           {para && <p className={`sanchez-regular h-[18px]  mt-2 leading-[100%] ${cardpara}`}>{para}</p>}
        </div>
    )
}

export default Cards



// sanchez - regular text - [#000000]       w-[250px]         iceberg - regular    text-[#666666]



// text - [32px]         text-[30px]



// text - [18px] text - [#000000]       




// text-[14px] 
// text - [#34C759]  text - [#FFCC00] text - [#FF383C]
