// import React from "react";
// import InputField from "@/Components/Form/InputField"

// type Props = {
//   data: {
//     internship: string;
//     batch: string;
//     start: string;
//     trainer: string;
//     enddate: string;
//   };
//   setData: (data: any) => void;
// };

// const ProgramForm = ({ data, setData }: Props) => {

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setData({
//       ...data,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <form
//       className=" p-6 font-iceberg rounded-xl border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.2)]"
//     >
//       <h2 className="text-xl font-semibold mb-4 pl-8">Program Details</h2>

//       <section className="grid grid-cols-2 gap-10 font-iceberg text-lg w-full h-full">

//         <div className="">
//           <InputField
//             label="Internship Program Name"
//             name="internship"
//             value={data.internship}
//             onChange={handleChange}
//             placeholder="Web Development Internship"
//           />

//           <InputField
//             label="Batch Name"
//             name="batch"
//             value={data.batch}
//             onChange={handleChange}
//             placeholder="Summer Batch 2026"
//           />

//           <InputField
//             label="Start Date"
//             type="date"
//             name="start"
//             value={data.start}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="mt-20">
//           <InputField
//             label="Trainer Name (Optional)"
//             name="trainer"
//             value={data.trainer}
//             onChange={handleChange}
//             placeholder="Hariharan"
//           />

//           <InputField
//             label="End Date"
//             type="date"
//             name="enddate"
//             value={data.enddate}
//             onChange={handleChange}
//           />
//         </div>
//       </section>
//     </form>
//   );
// };

// export default ProgramForm;












import React, { useState } from "react";
import InputField from "@/Components/Form/InputField";

type Props = {
  data: {
    internship: string;
    batch: string;
    start: string;
    trainer: string;
    enddate: string;
  };
  setData: (data: any) => void;
};

const ProgramForm = ({ data, setData }: Props) => {

  const [errors, setErrors] = useState<any>({});

  const validate = (name: string, value: string) => {

    let message = "";

    if (!value) {
      message = "This field is required";
    }

    if (name === "enddate" && data.start) {
      if (value < data.start) {
        message = "End date must be after start date";
      }
    }

    setErrors((prev: any) => ({
      ...prev,
      [name]: message
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value
    });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    validate(e.target.name, e.target.value);
  };

  return (
    <form className="p-6 font-iceberg rounded-xl border border-black shadow">

      <h2 className="text-xl font-semibold mb-4 pl-8">Program Details</h2>

      <section className="grid grid-cols-2 gap-10 text-lg">

        <div>

          <InputField
            label="Internship Program Name"
            name="internship"
            value={data.internship}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Web Development Internship"
            required
          />
          {errors.internship && <p className="text-red-500 text-xs font-sanchez mb-4">{errors.internship}</p>}

          <InputField
            label="Batch Name"
            name="batch"
            value={data.batch}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.batch && <p className="text-red-500 text-xs font-sanchez mb-4">{errors.batch}</p>}

          <InputField
            label="Start Date"
            type="date"
            name="start"
            value={data.start}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.start && <p className="text-red-500 text-xs font-sanchez mb-4">{errors.start}</p>}

        </div>

        <div className="mt-20">

          <InputField
            label="Trainer Name"
            name="trainer"
            value={data.trainer}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            placeholder="Hariharan"
          />
          {errors.trainer && <p className="text-red-500 text-xs font-sanchez mb-4">{errors.trainer}</p>}

          <InputField
            label="End Date"
            type="date"
            name="enddate"
            value={data.enddate}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.enddate && <p className="text-red-500 text-xs font-sanchez mb-4">{errors.enddate}</p>}

        </div>

      </section>
    </form>
  );
};

export default ProgramForm;
