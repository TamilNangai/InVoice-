
// import { useState } from "react";
// import InputField from "@/Components/Form/InputField";

// const CompanyForm = () => {

//   const [companyData, setCompanyData] = useState({
//     companyName: "",
//     companyEmail: "",
//     companyPhone: "",
//     companyAddress: ""
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;

//     setCompanyData({
//       ...companyData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     console.log("Company Data:", companyData);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="w-auto mx-10 mt-8 h-72 p-6 rounded-xl font-iceberg border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.5)]"
//     >
//       <h2 className="text-[28px] font-extralight pl-5">Company Details</h2>

//       <p className="text-md font-sanchez pl-5 mt-2">
//         These details will appear on your invoices.      </p>


//       <section className="grid grid-cols-2 gap-32 font-iceberg mt-3 mx-5">
//         <div className="text-lg space-y-10">

//           <InputField
//             label="Company Name"
//             name="companyName"
//             value={companyData.companyName}
//             onChange={handleChange}
//             placeholder="Sweatha"
//           />

//           <InputField
//             label="Company Email"
//             name="companyEmail"
//             type="email"
//             value={companyData.companyEmail}
//             onChange={handleChange}
//             placeholder="sweatha@gmail.com"
//           />

//         </div>

//         <div className="text-lg space-y-10">

//           <InputField
//             label="Company Phone"
//             type="number"
//             name="companyPhone"
//             value={companyData.companyPhone}
//             onChange={handleChange}
//             placeholder="+91 1234567890"
//           />

//           <InputField
//             label="Company Address"
//             name="companyAddress"
//             value={companyData.companyAddress}
//             onChange={handleChange}
//             placeholder="Chennai, Tamil Nadu"
//           />

//         </div>

//       </section>

//     </form>
//   );
// };

// export default CompanyForm;

// import { useState } from "react";
// import InputField from "@/Components/Form/InputField";
// const CompanyForm = () => {
//   const [companyData, setCompanyData] = useState({
//     companyName: "",
//     companyEmail: "",
//     companyPhone: "",
//     companyAddress: ""
//   }); const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target; setCompanyData({ ...companyData, [name]: value });
//   }; const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); console.log("Company Data:", companyData); };
//   return (<form onSubmit={handleSubmit} className="w-auto mx-10 mt-8 h-72 p-6 rounded-xl font-iceberg border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.5)]" >
//     <h2 className="text-[28px] font-extralight pl-5">Company Details</h2>
//     <p className="text-md font-sanchez pl-5 mt-2"> These details will appear on your invoices. </p>
//     <section className="grid grid-cols-2 gap-32 font-iceberg mt-3 mx-5">
//       <div className="text-lg space-y-10">
//         <InputField label="Company Name" name="companyName"
//           value={companyData.companyName}
//           onChange={handleChange}
//           placeholder="Sweatha" />
//         <InputField label="Company Email" name="companyEmail" type="email"
//           value={companyData.companyEmail}
//           onChange={handleChange}
//           placeholder="sweatha@gmail.com" />
//       </div> <div className="text-lg space-y-10">
//         <InputField label="Company Phone" type="number" name="companyPhone" value={companyData.companyPhone} onChange={handleChange} placeholder="+91 1234567890" /> <InputField label="Company Address" name="companyAddress" value={companyData.companyAddress} onChange={handleChange} placeholder="Chennai, Tamil Nadu" /> </div> </section> </form>);
// };
// export default CompanyForm;



import React from "react";
import InputField from "@/Components/Form/InputField";

type Props = {
  data: {
    companyName: string;
    companyEmail: string;
    companyPhone: string;
    companyAddress: string;
  };
  setData: (data: any) => void;
};

const CompanyForm = ({ data, setData }: Props) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form
      className="p-6  mx-5 mt-5 rounded-xl font-iceberg border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.5)]"
    >
      <h2 className="text-[28px] font-extralight pl-5">
        Company Details
      </h2>

      <p className="text-md font-sanchez pl-5 mt-2">
        These details will appear on your invoices.
      </p>

      <section className="grid grid-cols-2 gap-32 font-iceberg mt-3 mx-5 w-full h-full">

        <div className="text-lg space-y-10">
          <InputField
            label="Company Name"
            name="companyName"
            value={data.companyName}
            onChange={handleChange}
            placeholder="Sweatha"
          />

          <InputField
            label="Company Email"
            name="companyEmail"
            type="email"
            value={data.companyEmail}
            onChange={handleChange}
            placeholder="sweatha@gmail.com"
          />
        </div>

        <div className="text-lg space-y-10">
          <InputField
            label="Company Phone"
            type="number"
            name="companyPhone"
            value={data.companyPhone}
            onChange={handleChange}
            placeholder="+91 1234567890"
          />

          <InputField
            label="Company Address"
            name="companyAddress"
            value={data.companyAddress}
            onChange={handleChange}
            placeholder="Chennai, Tamil Nadu"
          />
        </div>

      </section>
    </form>
  );
};

export default CompanyForm;