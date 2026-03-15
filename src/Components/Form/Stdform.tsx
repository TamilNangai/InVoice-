// import React from "react";
// import InputField from "@/Components/Form/InputField";

// type StudentData = {
//   studentName: string;
//   college: string;
//   phone: string;
//   email: string;
// };

// type Props = {
//   data: StudentData;
//   setData: (data: StudentData) => void;
// };

// const StudentForm: React.FC<Props> = ({ data, setData }) => {

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;

//     setData({
//       ...data,
//       [name]: value
//     });
//   };

//   return (
//     <form
//       className="p-6 font-iceberg rounded-xl border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.2)] "
//     >
//       <h2 className="text-xl font-semibold mb-4 pl-8">
//         Student Details
//       </h2>

//       <section className="grid grid-cols-2 gap-10 font-iceberg text-lg w-full h-full ">

//         <div className="">
//           <InputField
//             label="Student Name"
//             name="studentName"
//             value={data.studentName || ""}
//             onChange={handleChange}
//             placeholder="Swetha"
          
//           />

//           <InputField
//             label="College Name"
//             name="college"
//             value={data.college || ""}
//             onChange={handleChange}
//             placeholder="Kings College of Engineering"
//           />

//         </div>

      

//         <div>

//           <InputField
//             label="Phone Number"
//             type="number"
//             name="phone"
//             value={data.phone || ""}
//             onChange={handleChange}
//             placeholder="+91 1234567890"
//           />

//           <InputField
//             label="Email Address"
//             type="email"
//             name="email"
//             value={data.email || ""}
//             onChange={handleChange}
//             placeholder="swetha@gmail.com"
//           />

//         </div>

//       </section>

//     </form>
//   );
// };

// export default StudentForm;












import React, { useState } from "react";
import InputField from "@/Components/Form/InputField";

type StudentData = {
  studentName: string;
  college: string;
  phone: string;
  email: string;
};

type Props = {
  data: StudentData;
  setData: (data: StudentData) => void;
};

const StudentForm: React.FC<Props> = ({ data, setData }) => {

  
  const [errors, setErrors] = useState<any>({})
  const [touched, setTouched] = useState<any>({})


  const validate = (name: string, value: string) => {

    let message = ""

    if (!value.trim()) {
      message = "This field is required"
    }

    if (name === "phone" && value) {
      if (!/^\d{10}$/.test(value)) {
        message = "Phone number must be 10 digits"
      }
    }

    if (name === "email" && value) {
      if (!value.includes("@gmail.com")) {
        message = "Email must include @gmail.com"
      }
    }

    setErrors((prev: any) => ({
      ...prev,
      [name]: message
    }))
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value
    });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {

    const { name, value } = e.target

    setTouched((prev: any) => ({
      ...prev,
      [name]: true
    }))

    validate(name, value)
  }


  return (
    <form className="p-6 font-iceberg rounded-xl border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.2)]">

      <h2 className="text-xl font-semibold mb-4 pl-8">
        Student Details
      </h2>

      <section className="grid grid-cols-2 gap-10 text-lg">

        <div>

          <InputField
            label="Student Name"
            name="studentName"
            value={data.studentName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Swetha"
            required
          />

          {errors.studentName && <p className="text-red-500 text-xs font-sanchez mb-4">{errors.studentName}</p>}

          <InputField
            label="College Name"
            name="college"
            value={data.college}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Kings College of Engineering"
            required
          />

          {errors.college && <p className="text-red-500 text-xs font-sanchez mb-4">{errors.college}</p>}

        </div>

        <div>

          <InputField
            label="Phone Number"
            type="tel"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="9876543210"
            maxLength={10}
            required
          />

          
          {touched.phone && errors.phone && (<p className="text-red-500 text-xs font-sanchez mb-4">{errors.phone}</p>)}


          <InputField
            label="Email Address"
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="swetha@gmail.com"
            required
          />

          {errors.email && <p className="text-red-500 text-xs font-sanchez mb-4">{errors.email}</p>}

        </div>

      </section>
    </form>
  );
};

export default StudentForm;
