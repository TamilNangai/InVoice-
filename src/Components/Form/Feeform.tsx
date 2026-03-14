// import React from "react";
// import InputField from "@/Components/Form/InputField"

// type Props = {
//   data: any;
//   setData: React.Dispatch<React.SetStateAction<any>>;
// };

// const ProForm = ({ data, setData }: Props) => {

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setData({
//       ...data,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <form
//       className=" p-6 font-iceberg rounded-xl border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.3)]"
//     >
//       <h2 className="text-xl font-semibold mb-4 pl-8">Fee Breakdown</h2>

//       <section className="grid grid-cols-2 gap-10 font-iceberg text-lg w-full h-full">
//         <div >
//           <InputField
//             label="Training Fee"
//             name="training"
//             type="number"
//             placeholder="5000.0"
//             value={data.training || ""}
//             onChange={handleChange}
//           />

//           <InputField
//             label="Certificate Fee"
//             name="certificate"
//             type="number"
//             placeholder="1000"
//             value={data.certificate || ""}
//             onChange={handleChange}
//           />

//           <InputField
//             label="Tax Rate (%)"
//             name="tax"
//             type="number"
//             placeholder="10"
//             value={data.tax || ""}
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <InputField
//             label="Internship Fee"
//             name="internship"
//             type="number"
//             placeholder="500.00"
//             value={data.internship || ""}
//             onChange={handleChange}
//           />

//           <InputField
//             label="Discount Amount"
//             name="discount"
//             type="number"
//             placeholder="50.0"
//             value={data.discount || ""}
//             onChange={handleChange}
//           />
//         </div>

//       </section>
//     </form>
//   );
// };

// export default ProForm;











import React, { useState } from "react";
import InputField from "@/Components/Form/InputField";

type Props = {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
};

const FeeForm = ({ data, setData }: Props) => {

  const [errors, setErrors] = useState<any>({});

  const validate = (name: string, value: string) => {

    let message = "";

    if (!value) {
      message = "Required";
    }

    const num = Number(value);

    if (num < 0) {
      message = "Value cannot be negative";
    }

    if (name === "tax") {
      if (num > 100) {
        message = "Tax cannot exceed 100%";
      }
    }

    setErrors((prev: any) => ({
      ...prev,
      [name]: message
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target

    setData({
      ...data,
      [name]: Number(value)
    })

  }


  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    validate(e.target.name, e.target.value);
  };

  return (
    <form className="p-6 font-iceberg rounded-xl border border-black shadow">

      <h2 className="text-xl font-semibold mb-4 pl-8">Fee Breakdown</h2>

      <section className="grid grid-cols-2 gap-10 text-lg">

        <div>

          <InputField
            label="Training Fee"
            name="training"
            type="number"
            value={data.training}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />

          <InputField
            label="Certificate Fee"
            name="certificate"
            type="number"
            value={data.certificate}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />

          <InputField
            label="Tax Rate (%)"
            name="tax"
            type="number"
            value={data.tax}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />

        </div>

        <div>

          <InputField
            label="Internship Fee"
            name="internship"
            type="number"
            value={data.internship}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />

          <InputField
            label="Discount Amount"
            name="discount"
            type="number"
            value={data.discount}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />

        </div>

      </section>

    </form>
  );
};

export default FeeForm;
