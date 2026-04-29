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

    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value
    });
  };

  return (

    <div className="p-6 mx-5 mt-5 rounded-xl font-iceberg border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.2)]">

      <h2 className="xl:text-[28px] sm:text-[24px] font-extralight pl-5">
        Company Details
      </h2>

      <p className="xl:text-md sm:text-sm font-sanchez pl-5 mt-2">
        These details will appear on your invoices.
      </p>

      <section className="grid grid-cols-2 gap-32 font-iceberg mt-3 w-full h-full pl-5 pr-10">

        <div className="xl:text-lg sm:text-md space-y-10">

          <InputField
            label="Company Name"
            name="companyName"
            value={data.companyName}
            onChange={handleChange}
            placeholder="Sweatha"
            required
          />

          <InputField
            label="Company Email"
            name="companyEmail"
            type="email"
            value={data.companyEmail}
            onChange={handleChange}
            placeholder="sweatha@gmail.com"
            required
          />

        </div>

        <div className="xl:text-lg sm:text-md  space-y-10">

          <InputField
            label="Company Phone"
            type="tel"
            name="companyPhone"
            value={data.companyPhone}
            onChange={handleChange}
            maxLength={10}
            placeholder="+91 1234567890"
            required
          />

          <InputField
            label="Company Address"
            name="companyAddress"
            value={data.companyAddress}
            onChange={handleChange}
            placeholder="Chennai, Tamil Nadu"
            required
          />

        </div>

      </section>

    </div>
  );
};

export default CompanyForm;
