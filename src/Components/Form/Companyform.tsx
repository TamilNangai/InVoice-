import React, { useState } from "react";
import InputField from "./Companyinput";
type CompanyProps = {
 companyName: string;
 companyEmail: string;
 companyPhone: string;
 companyAddress: string;
 companypara:string;
};
const StudentForm = (Props:CompanyProps) => {
  const [formData, setFormData] = useState<CompanyProps>({
  companyName: Props.companyName,
    companyEmail: Props.companyEmail,
    companyPhone: Props.companyPhone,
    companyAddress: Props.companyAddress,
    companypara: Props.companypara
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-[1170px] mx-11 mt-10 h-72 p-6 rounded-xl font-iceberg border-2 border-black shadow-[0_0_10px_rgba(0,0,0,0.5)] ">
      <h2 className="text-xl font-semibold mb-4">Company Details</h2>
      <p className="text-md font-sanchez">{Props.companypara}</p>
      <section className="grid grid-cols-2 gap-96 font-sanchez">
        <div className="text-sm">
          <InputField
            label={Props.companyName}
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Sweatha"

          />

          <InputField
            label={Props.companyEmail}
            name="companyEmail"
            value={formData.companyEmail}
            onChange={handleChange}
            placeholder="kings college of engineering"
          />
        </div>
        <div className="text-sm">
           <InputField
            label={Props.companyPhone}
            type="tel"
            name="companyPhone"
            value={formData.companyPhone}
            onChange={handleChange}
            placeholder="+91 1234567890"
          />
          <InputField
            label={Props.companyAddress}
            name="companyAddress"
            value={formData.companyAddress}
            onChange={handleChange}
            placeholder="sweatha@gmail.com"
          />
        </div>
      </section>

    </div>
   
  );
};

export default StudentForm;

