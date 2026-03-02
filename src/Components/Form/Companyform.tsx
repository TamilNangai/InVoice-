// import React, { useState } from "react";
// import InputField from "./Companyinput";
// type CompanyProps = {
//  companyName: string;
//  companyEmail: string;
//  companyPhone: string;
//  companyAddress: string;
//  companypara:string;
// };
// const StudentForm = (Props:CompanyProps) => {
//   const [formData, setFormData] = useState<CompanyProps>({
//   companyName: Props.companyName,
//     companyEmail: Props.companyEmail,
//     companyPhone: Props.companyPhone,
//     companyAddress: Props.companyAddress,
//     companypara: Props.companypara
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <div className="w-[1170px] mx-11 mt-10 h-72 p-6 rounded-xl font-iceberg border-2 border-black shadow-[0_0_10px_rgba(0,0,0,0.5)] ">
//       <h2 className="text-xl font-semibold mb-4">Company Details</h2>
//       <p className="text-md font-sanchez">{Props.companypara}</p>
//       <section className="grid grid-cols-2 gap-96 font-sanchez">
//         <div className="text-sm">
//           <InputField
//             label={Props.companyName}
//             name="companyName"
//             value={formData.companyName}
//             onChange={handleChange}
//             placeholder="Sweatha"

//           />

//           <InputField
//             label={Props.companyEmail}
//             name="companyEmail"
//             value={formData.companyEmail}
//             onChange={handleChange}
//             placeholder="kings college of engineering"
//           />
//         </div>
//         <div className="text-sm">
//            <InputField
//             label={Props.companyPhone}
//             type="tel"
//             name="companyPhone"
//             value={formData.companyPhone}
//             onChange={handleChange}
//             placeholder="+91 1234567890"
//           />
//           <InputField
//             label={Props.companyAddress}
//             name="companyAddress"
//             value={formData.companyAddress}
//             onChange={handleChange}
//             placeholder="sweatha@gmail.com"
//           />
//         </div>
//       </section>

//     </div>
   
//   );
// };

// export default StudentForm;

import InputField from "./Stdinput";

const CompanyForm = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const data = {
      companyName: (form.elements.namedItem("companyName") as HTMLInputElement).value,
      companyEmail: (form.elements.namedItem("companyEmail") as HTMLInputElement).value,
      companyPhone: (form.elements.namedItem("companyPhone") as HTMLInputElement).value,
      companyAddress: (form.elements.namedItem("companyAddress") as HTMLInputElement).value,
    };

    console.log("Company Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-11 mt-10 h-72 p-6 rounded-xl font-iceberg border border-black shadow-[0_0_10px_rgba(0,0,0,0.5)]"
    >
      <h2 className="text-xl font-semibold mb-4">Company Details</h2>

      <p className="text-md font-sanchez">
        Enter the company information below
      </p>

      <section className="grid grid-cols-2 gap-56 font-sanchez mt-5 mx-36" >
        <div className="text-sm">
          <InputField
            label="Company Name"
            name="companyName"
            placeholder="Sweathalknlkb"
          />

          <InputField
            label="Company Email"
            name="companyEmail"
            type="email"
            placeholder="sweatha@gmail.colknlknm"
          />
        </div>

        <div className="text-sm">
          <InputField
            label="Company Phone"
            type="tel"
            name="companyPhone"
            placeholder="+91 1234567890"
          />

          <InputField
            label="Company Address"
            name="companyAddress"
            placeholder="Chennai, Tamil Nadu"
          />
        </div>
      </section>

     
    </form>
  );
};

export default CompanyForm;