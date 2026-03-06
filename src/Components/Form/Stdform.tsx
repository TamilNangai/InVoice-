// // import React, { useState } from "react";
// // import InputField from "./Stdinput";
// // type stdform = {
// //   studentName: string;
// //   college: string;
// //   email: string;
// //   phone: string;
// // };
// // const StudentForm = (Props:stdform) => {
// //   const [formData, setFormData] = useState<stdform>({
// //     studentName: Props.studentName,
// //     college: Props.college,
// //     email: Props.email,
// //     phone: Props.phone,
// //   });

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   return (
// //     <div className="h-fit mx-11 mt-10 p-6 font-iceberg rounded-xl border-2 border-black shadow-[0_0_10px_rgba(0,0,0,0.5)] ">
// //       <h2 className="text-xl font-semibold mb-4">Student Details</h2>
// //       <section className="grid grid-cols-2 gap-10 font-sanchez">
// //         <div className="text-sm">
// //           <InputField
// //             label={Props.studentName}
// //             name="studentName"
// //             value={formData.studentName}
// //             onChange={handleChange}
// //             placeholder="Sweatha"

// //           />

// //           <InputField
// //             label={Props.college}
// //             name="college"
// //             value={formData.college}
// //             onChange={handleChange}
// //             placeholder="kings college of engineering"
// //           />
// //         </div>
// //         <div className="text-sm">
// //            <InputField
// //             label={Props.phone}
// //             type="tel"
// //             name="phone"
// //             value={formData.phone}
// //             onChange={handleChange}
// //             placeholder="+91 1234567890"
// //           />
// //           <InputField
// //             label={Props.email}
// //             type="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             placeholder="sweatha@gmail.com"
// //           />
// //         </div>
// //       </section>

// //     </div>
   
// //   );
// // };

// // export default StudentForm;

// import React from "react";
// import InputField from "./Stdinput";

// const StudentForm = () => {

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const form = e.currentTarget;

//     const data = {
//       studentName: (form.elements.namedItem("studentName") as HTMLInputElement).value,
//       college: (form.elements.namedItem("college") as HTMLInputElement).value,
//       phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
//       email: (form.elements.namedItem("email") as HTMLInputElement).value,
//     };

//     console.log("Student Data:", data);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className=" mx-11 mt-10 p-6 font-iceberg rounded-xl border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.2)]"
//     >
//       <h2 className="text-xl font-semibold mb-4 pl-8">Student Details</h2>

//       <section className="grid grid-cols-2 gap-10 font-iceberg text-lg">

//         <div>
//           <InputField
//             label="Student Name"
//             name="studentName"
//             placeholder="Sweatha"
//           />

//           <InputField
//             label="College / Institution"
//             name="college"
//             placeholder="Kings College of Engineering"
//           />
//         </div>

//         <div>
//           <InputField
//             label="Phone Number"
//             type="tel"
//             name="phone"
//             placeholder="+91 1234567890"
//           />

//           <InputField
//             label="Email Address"
//             type="email"
//             name="email"
//             placeholder="sweatha@gmail.com"
//           />
//         </div>

//       </section>

     

//     </form>
//   );
// };

// export default StudentForm;


import React from "react";
import InputField from "./Stdinput";

type StudentFormProps = {
  studentName: string;
  college: string;
  phone: string;
  email: string;
};

const StudentForm = ({
  studentName,
  college,
  phone,
  email,
}: StudentFormProps) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const data = {
      studentName: (form.elements.namedItem("studentName") as HTMLInputElement).value,
      college: (form.elements.namedItem("college") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
    };

    console.log("Student Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-11 mt-10 p-6 font-iceberg rounded-xl border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.2)]"
    >
      <h2 className="text-xl font-semibold mb-4 pl-8">
        Student Details
      </h2>

      <section className="grid grid-cols-2 gap-10 font-iceberg text-lg">

        <div className="">
          <InputField
            label={studentName}
            name="studentName"
            placeholder="Sweatha"
          />

          <InputField
            label={college}
            name="college"
            placeholder="Kings College of Engineering"
          />
        </div>

        <div>
          <InputField
            label={phone}
            type="number"
            name="phone"
            placeholder="+91 1234567890"
          />

          <InputField
            label={email}
            type="email"
            name="email"
            placeholder="sweatha@gmail.com"
          />
        </div>

      </section>
    </form>
  );
};

export default StudentForm;