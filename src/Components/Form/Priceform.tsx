// import React from "react";
// import InputField from "./Priceinput";

// type Props = {
//   data: {
//     total: string;
//     due: string;
//     paid: string;
//     duedate: string;
//     paymentMethod: string;
//   };
//   setData: (data: any) => void;
// };

// const PriceForm = ({ data, setData }: Props) => {

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setData({
//       ...data,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (

//     <form
//       className="p-6 font-iceberg rounded-xl border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.2)]"
//     >
//       <h2 className="text-xl font-semibold mb-4 pl-8">
//         Price Details
//       </h2>

//       <section className="grid grid-cols-2 gap-10 text-lg w-full h-full">

//         <div>
//           <InputField
//             label="Total Amount"
//             name="total"
//             type="number"
//             placeholder="110000"
//           />

//           <InputField
//             label="Due Amount"
//             name="due"
//             type="number"
//             placeholder="10000"
//           />
//         </div>

//         <div>
//           <InputField
//             label="Paid Amount"
//             name="paid"
//             type="number"
//             placeholder="100000"
//           />

//           <InputField
//             label="Due Date"
//             type="date"
//             name="duedate"
//           />
//         </div>

//       </section>

//       <div className="flex items-center justify-center mt-6">
//         <div className="text-sm font-sanchez">
//           <label className="block mb-1 font-iceberg text-lg">
//             Payment Method
//           </label>

//           <select
//             name="paymentMethod"
//             className="py-2 px-3 border-2 border-black rounded-md"
//           >
//             <option value="">Select Payment Method</option>
//             <option value="UPI">UPI</option>
//             <option value="Cash">Cash</option>
//             <option value="Bank Transfer">Bank Transfer</option>
//             <option value="Card">Card</option>
//           </select>

//         </div>
//       </div>

//     </form>
//   );
// };

// export default PriceForm;













import React from "react";
import InputField from "./Priceinput";

type Props = {
  data: {
    total: string;
    due: string;
    paid: string;
    duedate: string;
    paymentMethod: string;
  };
  setData: (data: any) => void;
};

// const PriceForm = ({ data, setData }: Props) => {

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setData({
//       ...data,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (

//     <form
//       className="p-6 font-iceberg rounded-xl border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.2)]"
//     >
//       <h2 className="text-xl font-semibold mb-4 pl-8">
//         Price Details
//       </h2>

//       <section className="grid grid-cols-2 gap-10 text-lg w-full h-full">

//         <div>
//           <InputField
//             label="Total Amount"
//             name="total"
//             type="number"
//             placeholder="110000"
//           />

//           <InputField
//             label="Due Amount"
//             name="due"
//             type="number"
//             placeholder="10000"
//           />
//         </div>

//         <div>
//           <InputField
//             label="Paid Amount"
//             name="paid"
//             type="number"
//             placeholder="100000"
//           />

//           <InputField
//             label="Due Date"
//             type="date"
//             name="duedate"
//           />
//         </div>

//       </section>

//       <div className="flex items-center justify-center mt-6">
//         <div className="text-sm font-sanchez">
//           <label className="block mb-1 font-iceberg text-lg">
//             Payment Method
//           </label>

//           <select
//             name="paymentMethod"
//             className="py-2 px-3 border-2 border-black rounded-md"
//           >
//             <option value="">Select Payment Method</option>
//             <option value="UPI">UPI</option>
//             <option value="Cash">Cash</option>
//             <option value="Bank Transfer">Bank Transfer</option>
//             <option value="Card">Card</option>
//           </select>

//         </div>
//       </div>

//     </form>
//   );
// };

// export default PriceForm;

const PriceForm = ({ data, setData }: Props) => {

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {

    setData({
      ...data,
      [e.target.name]: e.target.value
    })

  }

  return (
    <form className="p-6 font-iceberg rounded-xl border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.2)]">

      <h2 className="text-xl font-semibold mb-4 pl-8">
        Price Details
      </h2>

      <section className="grid grid-cols-2 gap-10 text-lg w-full h-full">

        <div>

          <InputField
            label="Total Amount"
            name="total"
            type="number"
            placeholder="110000"
            value={data.total}
            onChange={handleChange}
          />

          <InputField
            label="Due Amount"
            name="due"
            type="number"
            placeholder="10000"
            value={data.due}
            onChange={handleChange}
          />

        </div>

        <div>

          <InputField
            label="Paid Amount"
            name="paid"
            type="number"
            placeholder="100000"
            value={data.paid}
            onChange={handleChange}
          />

          <InputField
            label="Due Date"
            type="date"
            name="duedate"
            value={data.duedate}
            onChange={handleChange}
            // value={data.duedate}
            // onChange={handleChange}
          />

        </div>

      </section>

      <div className="flex items-center justify-center mt-6">

        <div className="text-sm font-sanchez">


          <label className="block mb-1 font-iceberg text-lg">
            Payment Method
          </label>

          <select
            name="paymentMethod"
            value={data.paymentMethod}
            onChange={handleChange}
            className="py-2 px-3 border-2 border-black rounded-md"
          >

            <option value="">Select Payment Method</option>
            <option value="UPI">UPI</option>
            <option value="Cash">Cash</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Card">Card</option>

          </select>

        </div>

      </div>

    </form>

  )

}

export default PriceForm