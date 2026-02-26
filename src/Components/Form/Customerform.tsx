import React, { useState } from "react";
import InputField from "./Customerinput";
type CustomerProps = {
customer: string;
email: string;
office: string;
gst: string;
phone: string;
address: string;
};
    const CustomerForm = (Props: CustomerProps) => {
  const [formData, setFormData] = useState<CustomerProps>({
    customer: Props.customer,
    email: Props.email,
    office: Props.office,
    gst: Props.gst,
    phone: Props.phone,
    address: Props.address,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-[500px] mx-11 mt-10 p-6 font-iceberg rounded-xl border-2 border-black shadow-[0_0_10px_rgba(0,0,0,0.5)] ">
      <h2 className="text-xl font-semibold mb-4">Fee Breakdown</h2>
      <section className="grid grid-cols-2 gap-10 font-sanchez">
        <div className="text-sm">
          <InputField
            label={Props.customer}
            name="customer"
            value={formData.customer}
            onChange={handleChange}
            placeholder="Sweatha"

          />

          <InputField
            label={Props.email}
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="kings college of engineering"
          />
          <InputField
            label={Props.gst}
            name="gst"
            value={formData.gst}
            onChange={handleChange}
            placeholder="GST Number"
          />
          <InputField
            label={Props.phone}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 1234567890"
          />
           
        </div>
        <div className="mt-20">
        <InputField
            label={Props.address}  
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
          />
          <InputField
            label={Props.office}
            name="office"
            value={formData.office}
            onChange={handleChange}
            placeholder="Office Number"
          />
          </div>
      </section>

    </div>

  );
};

export default CustomerForm;

