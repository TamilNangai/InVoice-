import { useState } from "react";
import InputField from "@/Components/Form/InputField";

const CompanyForm = () => {

  const [companyData, setCompanyData] = useState({
    companyName: "",
    companyEmail: "",
    companyPhone: "",
    companyAddress: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCompanyData({
      ...companyData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Company Data:", companyData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-11 mt-10 h-72 p-6 rounded-xl font-iceberg border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.5)]"
    >
      <h2 className="text-xl font-semibold mb-4">Company Details</h2>

      <p className="text-md font-sanchez">
        Enter the company information below
      </p>

      <section className="grid grid-cols-2 gap-56 font-sanchez mt-5 mx-36">

        <div className="text-sm">

          <InputField
            label="Company Name"
            name="companyName"
            value={companyData.companyName}
            onChange={handleChange}
            placeholder="Sweatha"
          />

          <InputField
            label="Company Email"
            name="companyEmail"
            type="email"
            value={companyData.companyEmail}
            onChange={handleChange}
            placeholder="sweatha@gmail.com"
          />

        </div>

        <div className="text-sm">

          <InputField
            label="Company Phone"
            type="number"
            name="companyPhone"
            value={companyData.companyPhone}
            onChange={handleChange}
            placeholder="+91 1234567890"
          />

          <InputField
            label="Company Address"
            name="companyAddress"
            value={companyData.companyAddress}
            onChange={handleChange}
            placeholder="Chennai, Tamil Nadu"
          />

        </div>

      </section>

    </form>
  );
};

export default CompanyForm;