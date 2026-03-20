import React, { forwardRef, useEffect, useState } from "react";
import { getSettings } from "@/utils/getSettings";

type CompanyData = {
    companyName: string;
    companyEmail: string;
    companyPhone: string;
    companyAddress: string;
};

type BillProps = {

    data?: any

    onPrint: () => void

    button?: React.ReactNode

    name: string
    email: string
    phone: number
    college: string
    address?: string;
    invoiceid: string
    date: string
    duedate: string

    type?: "internship" | "service" | "product"


    boxhead?: string
    boxprogram?: string
    batch?: string
    duration?: string

    boxdate?: string
    boxduedate?: string
    boxreference?: string

    detailhead: string

    head11?: string
    head12?: string
    amount1?: number

    head21?: string
    head22?: string
    amount2?: number

    head31?: string
    head32?: string
    amount3?: number

    rows?: {
        title: string
        subtitle?: string
        sub?: string
        amount: number
    }[]


    subamount11: number
    subamount12: number
    subamount13: number

    subamount21: number
    subamount22: number
    subamount23: number

    taxPercent?: number
    paymentMethod?: string


    conditionPara: string

    companyName?: string
    companyEmail?: string
    companyPhone?: string
    companyAddress?: string



}

const Bill = forwardRef<HTMLDivElement, BillProps>((props, ref) => {

    const {
        button,
        type,

        name,
        email,
        phone,
        college,
        // address,

        invoiceid,
        date,
        duedate,

        boxhead,
        boxprogram,
        batch,
        duration,

        boxdate,
        boxduedate,
        boxreference,

        detailhead,

        head11,
        head12,
        amount1,

        head21,
        head22,
        amount2,

        head31,
        head32,
        amount3,

        rows,

        subamount11,
        subamount12,
        subamount13,

        subamount21,
        subamount22,
        subamount23,

        taxPercent,
        paymentMethod,

        conditionPara,
        companyAddress,
        companyEmail,
        companyName,
        companyPhone,
        onPrint

    } = props;

   // STATE
    const [company, setCompany] = useState<CompanyData>({
        companyName: "",
        companyEmail: "",
        companyPhone: "",
        companyAddress: "",
    });

    // FETCH FROM FIREBASE
    useEffect(() => {

        if (companyName && companyEmail) return;

        const fetchCompany = async () => {
            const data = await getSettings();
            if (data) {
                setCompany({
                    companyName: data.companyName || "",
                    companyEmail: data.companyEmail || "",
                    companyPhone: data.companyPhone || "",
                    companyAddress: data.companyAddress || "",
                });
            }
        };

        fetchCompany();

    }, [companyName, companyEmail]);

    const Company = {
        companyName: companyName || company.companyName || "",
        companyEmail: companyEmail || company.companyEmail || "",
        companyPhone: companyPhone || company.companyPhone || "",
        companyAddress: companyAddress || company.companyAddress || "",
    };


    return (

        <div
            ref={ref}
            className="w-full border border-[#00000040] rounded-xl p-6 shadow-[5px_5px_15px_rgba(0,0,0,0.3)] bg-white flex flex-col items-center justify-between"
        >
            <main className="w-full">
                {/* HEADER */}

                <div className="flex justify-between items-start">

 <div>
                    <h1 className="text-[32px] font-iceberg">
                        {Company.companyName}
                    </h1>

                    <p className="text-[14px] font-sanchez">
                        {Company.companyAddress}
                    </p>

                    <p className="text-[14px] font-sanchez">
                        {Company.companyEmail} | +91 {Company.companyPhone}
                        
                    </p>
                </div>

                    <div>
                        {button}
                    </div>

                </div>


                <hr className="my-4 border-[#00000040]" />


                {/* BILL TO */}

                <div className="flex justify-between">

                    <div>

                        <p className="font-iceberg text-[18px] mb-2">
                            BILL TO
                        </p>

                        <p className="font-iceberg text-[18px]">
                            {name}
                        </p>

                        <p className="font-sanchez text-[18px]">
                            {email}
                        </p>

                        <p className="font-sanchez text-[18px]">
                            {phone}
                        </p>

                        <p className="font-sanchez text-[18px]">
                            {college}
                        </p>

                    </div>


                    <div className="text-right">

                        <p className="font-iceberg text-[18px]">
                            Invoice Details
                        </p>

                        <p className="font-sanchez text-[18px]">
                            Invoice #: {invoiceid}
                        </p>

                        {type === "internship" && <>
                            <p className="font-sanchez text-[18px]">
                                Date: {date}
                            </p>

                            <p className="font-sanchez text-[18px]">
                                Due Date: {duedate}
                            </p>
                        </>}

                    </div>

                </div>


                {/* BOX SECTION */}

                {type === "internship" ? (

                    <div className="border border-[#00000080] rounded-xl p-4 mt-5">

                        <p className="font-sanchez text-[18px]">
                            {boxhead}
                        </p>

                        <p className="font-iceberg text-[20px]">
                            {boxprogram}
                        </p>

                        <div className="flex justify-between mt-2">

                            <p className="font-sanchez text-[14px]">
                                {batch}
                            </p>

                            <p className="font-sanchez text-[14px]">
                                {duration}
                            </p>

                        </div>

                    </div>

                ) : (
                    <div className="mt-5 border border-[#00000080] rounded-xl p-4 flex justify-between text-center">

                        <div className="w-1/3">
                            <p className="font-iceberg text-[18px]">Invoice Date</p>
                            <p className="font-sanchez text-[18px]">{boxdate}</p>
                        </div>

                        <div className="w-1/3">
                            <p className="font-iceberg text-[18px]">Due Date</p>
                            <p className="font-sanchez text-[18px]">{boxduedate}</p>
                        </div>

                        <div className="w-1/3">
                            <p className="font-iceberg text-[18px]">Reference</p>
                            <p className="font-sanchez text-[18px]">{boxreference}</p>
                        </div>

                    </div>

                )}


                {/* DETAILS */}

                <div className="mt-6">

                    <div className="flex justify-between border-b pb-2">

                        <p className="font-sanchez text-[20px]">
                            {detailhead}
                        </p>

                        <p className="font-sanchez text-[20px]">
                            Amount
                        </p>

                    </div>


                    {/* INTERNSHIP ROWS */}

                    {type === "internship" && (

                        <>

                            {amount1 && <div className="flex justify-between py-4 border-b">

                                <div>

                                    <p className="font-iceberg text-[18px]">
                                        {head11}
                                    </p>

                                    <p className="font-sanchez text-[14px] text-gray-500">
                                        {head12}
                                    </p>

                                </div>

                                <p className="font-sanchez text-[18px]">
                                    {amount1?.toFixed(2)}
                                </p>

                            </div>}


                            {amount2 && <div className="flex justify-between py-4 border-b">

                                <div>

                                    <p className="font-iceberg text-[18px]">
                                        {head21}
                                    </p>

                                    <p className="font-sanchez text-[14px] text-gray-500">
                                        {head22}
                                    </p>

                                </div>

                                <p className="font-sanchez text-[18px]">
                                    {amount2?.toFixed(2)}
                                </p>

                            </div>}


                            {amount3 && <div className="flex justify-between py-4 border-b">

                                <div>

                                    <p className="font-iceberg text-[18px]">
                                        {head31}
                                    </p>

                                    <p className="font-sanchez text-[14px] text-gray-500">
                                        {head32}
                                    </p>

                                </div>

                                <p className="font-sanchez text-[18px]">
                                    {amount3?.toFixed(2)}
                                </p>

                            </div>}

                        </>

                    )}


                    {/* SERVICE ROWS */}

                    {(type === "service" || type === "product") && rows?.map((rows, index) => (

                        <div key={index} className="flex justify-between items-start py-4 border-b">

                            {/* LEFT SIDE */}
                            <div className="flex flex-col w-full">

                                <div className="flex items-center">
                                    <div className={`${type === "product" ? "w-1/3" : "w-2/3"} flex flex-col justify-center items-start px-3`}>
                                        {/* Product Name */}
                                        <p className="font-sanchez text-[18px]">
                                            {rows.title}
                                        </p>
                                        {rows.subtitle && (
                                            <p className="font-sanchez text-[14px] text-gray-500 mt-1">
                                                {rows.subtitle}
                                            </p>
                                        )}</div>

                                    {/* Subscription (only for product) */}
                                    {type === "product" && (
                                        <div className="w-1/3 mx-2 flex flex-col justify-center items-start px-3 border-x border-[#000000]">
                                            <p className="font-iceberg text-[18px] leading-[100%] mb-1">
                                                Subscription
                                            </p>

                                            <p className="font-sanchez text-[14px] leading-[100%]">
                                                {rows.sub}
                                            </p>
                                        </div>
                                    )}

                                    <p className="w-1/3 font-sanchez text-[18px] flex  justify-center items-center ">
                                        {rows.amount.toFixed(2)}
                                    </p>

                                </div>

                            </div>


                        </div>

                    ))}
                    </div>
            </main>

            <main className="w-full">
                {/* TOTALS */}

                <div className="flex flex-col  items-end mt-6 space-y-2">

                    <div className="flex justify-between w-[60%]">
                        <p className="font-sanchez text-[18px] text-[#666666]">Subtotal</p>
                        <p className="font-sanchez text-[18px]">{subamount11.toFixed(2)}</p>
                    </div>

                    <div className="flex justify-between w-[60%]">
                        <p className="font-sanchez text-[18px] text-[#666666]">Discount</p>
                        <p className="font-sanchez text-[18px]">{subamount12.toFixed(2)}</p>
                    </div>

                    <div className="flex justify-between w-[60%]">
                        <p className="font-sanchez text-[18px] text-[#666666]">
                            GST {taxPercent ? `(${taxPercent}%)` : ""}
                        </p>

                        <p className="font-sanchez text-[18px]">{subamount13.toFixed(2)}</p>
                    </div>

                    <hr className="w-[100%]" />

                    <div className="flex justify-between w-[60%]">

                        <p className="font-sanchez text-[20px] text-[#136CEDCC]">
                            Total Amount
                        </p>

                        <p className="font-sanchez text-[20px] text-[#136CEDCC]">
                            {subamount21.toFixed(2)}
                        </p>

                    </div>


                    <div className="flex justify-between w-[60%]">
                        <p className="font-sanchez text-[18px] text-[#666666]">
                            Paid Amount {paymentMethod ? `(${paymentMethod})` : ""}
                        </p>

                        <p className="font-sanchez text-[18px]">{subamount22.toFixed(2)}</p>
                    </div>

                    <div className="flex justify-between w-[60%]">
                        <p className="font-sanchez text-[18px] text-[#666666]">Due Amount</p>
                        <p className="font-sanchez text-[18px]">{subamount23.toFixed(2)}</p>
                    </div>

                </div>


                {/* TERMS */}

                <div className="mt-6">

                    <p className="font-iceberg text-[18px]">
                        Terms & Conditions:
                    </p>

                    <p className="font-sanchez text-[14px] text-gray-500">
                        {conditionPara}
                    </p>

                </div>


                {/* PRINT */}

                <div className="flex justify-end mt-6">

                    <button
                        onClick={onPrint}
                        className="bg-[#136CEDCC] text-white font-iceberg px-6 py-2 rounded-md text-[20px]"
                        type="button"
                    >
                        Print
                    </button>

                </div>

        
            </main >
        </div >
    );
});

Bill.displayName = "Bill";
export default Bill;


// export default Bill;


// import React, { forwardRef, useEffect, useState } from "react";
// import { getSettings } from "@/utils/getSettings";

// type BillProps = {

//     data?: any

//     onPrint: () => void

//     companyName?: string
//     companyEmail?: string
//     companyPhone?: string
//     companyAddress?: string
// };
// const Bill = forwardRef<HTMLDivElement, BillProps>((props, ref) => {

//     const {
    

//         // ✅ PROPS (FIRST PRIORITY)
//         companyName,
//         companyEmail,
//         companyPhone,
//         companyAddress,

//         onPrint

//     } = props;

//     // ✅ LOCAL STATE (FALLBACK)
//     const [company, setCompany] = useState({
//         companyName: "",
//         companyEmail: "",
//         companyPhone: "",
//         companyAddress: "",
//     });

//     // ✅ FETCH ONLY IF PROPS NOT AVAILABLE
//     useEffect(() => {

//         if (companyName && companyEmail) return; // already coming from props

//         const fetchCompany = async () => {
//             const data = await getSettings();
//             if (data) setCompany(data);
//         };

//         fetchCompany();

//     }, [companyName, companyEmail]);

//     // ✅ FINAL DATA (props > firebase > default)
//     const finalCompany = {
//         companyName: companyName || company.companyName || "Your Company",
//         companyEmail: companyEmail || company.companyEmail || "",
//         companyPhone: companyPhone || company.companyPhone || "",
//         companyAddress: companyAddress || company.companyAddress || "",
//     };

//     return (

//         <div
//             ref={ref}
//             className="w-full border border-[#00000040] rounded-xl p-6 shadow-[5px_5px_15px_rgba(0,0,0,0.3)] bg-white"
//         >

//             {/* HEADER */}

//             <div className="flex justify-between items-start">

//                 <div>

//                     <h1 className="font-iceberg text-[32px]">
//                         {finalCompany.companyName}
//                     </h1>

//                     <p className="font-sanchez text-[13px]">
//                         {finalCompany.companyAddress}
//                     </p>

//                     <p className="font-sanchez text-[13px]">
//                         {finalCompany.companyEmail}
//                         {finalCompany.companyPhone ? ` | +91 ${finalCompany.companyPhone}` : ""}
//                     </p>

//                 </div>

//                 <div>
//                     {button}
//                 </div>

//             </div>

//             <hr className="my-4 border-[#00000040]" />

//             {/* REST OF YOUR CODE = NO CHANGE */}

//             <div className="flex justify-between">

//                 <div>

//                     <p className="font-iceberg text-[18px] mb-2">
//                         BILL TO
//                     </p>

//                     <p className="font-iceberg text-[18px]">
//                         {name}
//                     </p>

//                     <p className="font-sanchez text-[18px]">
//                         {email}
//                     </p>

//                     <p className="font-sanchez text-[18px]">
//                         {phone}
//                     </p>

//                     <p className="font-sanchez text-[18px]">
//                         {college}
//                     </p>

//                 </div>

//                 <div className="text-right">

//                     <p className="font-iceberg text-[18px]">
//                         Invoice Details
//                     </p>

//                     <p className="font-sanchez text-[18px]">
//                         Invoice #: {invoiceid}
//                     </p>

//                     {type === "internship" && <>
//                         <p className="font-sanchez text-[18px]">
//                             Date: {date}
//                         </p>

//                         <p className="font-sanchez text-[18px]">
//                             Due Date: {duedate}
//                         </p>
//                     </>}

//                 </div>

//             </div>

//             {/* KEEP REST SAME */}

//         </div>
//     );
// });

// Bill.displayName = "Bill";

// export default Bill;


// import React, { forwardRef, useEffect, useState } from "react";
// import { getSettings } from "@/utils/getSettings";

// // ✅ TYPE
// type CompanyData = {
//     companyName: string;
//     companyEmail: string;
//     companyPhone: string;
//     companyAddress: string;
// };

// type BillProps = {
//     onPrint: () => void;

//     // optional button
//     button?: React.ReactNode;

//     // company (optional → fallback from firebase)
//     companyName?: string;
//     companyEmail?: string;
//     companyPhone?: string;
//     companyAddress?: string;
// };

// const Bill = forwardRef<HTMLDivElement, BillProps>((props, ref) => {

//     const {
//         button,
//         onPrint,

//         companyName,
//         companyEmail,
//         companyPhone,
//         companyAddress,
//     } = props;

//     // ✅ STATE
//     const [company, setCompany] = useState<CompanyData>({
//         companyName: "",
//         companyEmail: "",
//         companyPhone: "",
//         companyAddress: "",
//     });

//     // ✅ FETCH FROM FIREBASE
//     useEffect(() => {

//         if (companyName && companyEmail) return;

//         const fetchCompany = async () => {
//             const data = await getSettings();
//             if (data) {
//                 setCompany({
//                     companyName: data.companyName || "",
//                     companyEmail: data.companyEmail || "",
//                     companyPhone: data.companyPhone || "",
//                     companyAddress: data.companyAddress || "",
//                 });
//             }
//         };

//         fetchCompany();

//     }, [companyName, companyEmail]);

//     // ✅ FINAL DATA
//     const finalCompany = {
//         companyName: companyName || company.companyName || "Your Company",
//         companyEmail: companyEmail || company.companyEmail || "",
//         companyPhone: companyPhone || company.companyPhone || "",
//         companyAddress: companyAddress || company.companyAddress || "",
//     };

//     return (

//         <div
//             ref={ref}
//             className="w-full border border-[#00000040] rounded-xl p-6 shadow-[5px_5px_15px_rgba(0,0,0,0.3)] bg-white"
//         >

//             {/* HEADER */}
//             <div className="flex justify-between items-start">

//                 <div>
//                     <h1 className="text-[32px] font-bold">
//                         {finalCompany.companyName}
//                     </h1>

//                     <p className="text-[13px]">
//                         {finalCompany.companyAddress}
//                     </p>

//                     <p className="text-[13px]">
//                         {finalCompany.companyEmail}
//                         {finalCompany.companyPhone
//                             ? ` | +91 ${finalCompany.companyPhone}`
//                             : ""}
//                     </p>
//                 </div>

//                 <div>{button}</div>

//             </div>

//             <hr className="my-4 border-[#00000040]" />

//             {/* PRINT BUTTON */}
//             <div className="flex justify-end mt-6">
//                 <button
//                     onClick={onPrint}
//                     className="bg-blue-500 text-white px-6 py-2 rounded-md"
//                 >
//                     Print
//                 </button>
//             </div>

//         </div>
//     );
// });

// Bill.displayName = "Bill";

// export default Bill;