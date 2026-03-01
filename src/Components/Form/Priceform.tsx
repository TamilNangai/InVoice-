// import React, { useState } from "react";
// import InputField from "./Stdinput";
// type stdform = {
//  total:string;
//  due:string;
//  paid:string;
//  duedate:string;
//  paymentMethod:string;
// };
// const StudentForm = (Props:stdform) => {
//   const [formData, setFormData] = useState<stdform>({
//     total: Props.total,
//     due: Props.due,
//     paid: Props.paid,
//     duedate: Props.duedate,
//     paymentMethod: Props.paymentMethod

//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <div className="w-[500px] mx-11 mt-10 p-6 font-iceberg rounded-xl border-2 border-black shadow-[0_0_10px_rgba(0,0,0,0.5)] ">
//       <h2 className="text-xl font-semibold mb-4">Price Details</h2>
//       <section className="grid grid-cols-2 gap-10 font-sanchez">
//         <div className="text-sm">
//           <InputField
//             label={Props.total}
//             name="total"
//             value={formData.total}
//             onChange={handleChange}
//             placeholder="110000"

//           />

//           <InputField
//             label={Props.due}
//             name="due"
//             value={formData.due}
//             onChange={handleChange}
//             placeholder="10000"
//           />
//         </div>
//         <div className="text-sm">
//            <InputField
//             label={Props.paid}
//             type="tel"
//             name="paid"
//             value={formData.paid}
//             onChange={handleChange}
//             placeholder="+91 1234567890"
//           />
//           <InputField
//             label={Props.duedate}
//             type="date"
//             name="duedate"
//             value={formData.duedate}
//             onChange={handleChange}
//             placeholder="sweatha@gmail.com"
//           />
//         </div>
//       </section>
//       <div className="flex justify-center">
//       <InputField
//             label={Props.paymentMethod}
//             name="paymentMethod"
//             value={formData.paymentMethod}
//             onChange={handleChange}
//             placeholder="+91 1234567890"
//           // />
// </div>
//     </div>

//   );
// };

// export default StudentForm;

import React from "react";
import InputField from "./InputField";

const PriceForm = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const data = {
      total: (form.elements.namedItem("total") as HTMLInputElement).value,
      due: (form.elements.namedItem("due") as HTMLInputElement).value,
      paid: (form.elements.namedItem("paid") as HTMLInputElement).value,
      duedate: (form.elements.namedItem("duedate") as HTMLInputElement).value,
      paymentMethod: (form.elements.namedItem("paymentMethod") as HTMLInputElement).value,
    };

    console.log("Price Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-11 mt-10 p-6 font-iceberg rounded-xl border-2 border-black shadow-[5px_5px_10px_rgba(0,0,0,0.2)]"
    >
      <h2 className="text-xl font-semibold mb-4 pl-8">Price Details</h2>

      <section className="grid grid-cols-2 gap-10 font-iceberg text-lg">

        <div>
          <InputField
            label="Total Amount"
            name="total"
            type="number"
            placeholder="110000"
          />

          <InputField
            label="Due Amount"
            name="due"
            type="number"
            placeholder="10000"
          />
        </div>

        <div>
          <InputField
            label="Paid Amount"
            name="paid"
            type="number"
            placeholder="100000"
          />

          <InputField
            label="Due Date"
            type="date"
            name="duedate"
        
          />
        </div>

      </section>

      <div className="flex items-center justify-center mt-6">
        <div className="text-sm font-sanchez">
          <label className="block mb-1 font-iceberg text-lg">Payment Method</label>
          <select
            name="paymentMethod"
            className=" py-2 px-3 border-2 border-black rounded-md"
            defaultValue="Cash">
            <option value="">
              Select Payment Method
            </option>
            <option value="UPI">UPI</option>
            <option value="Cash" disabled>Cash</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Card">Card</option>
          </select>
        </div>
      </div>



    </form>
  );
};

export default PriceForm;