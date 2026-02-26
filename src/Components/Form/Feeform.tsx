import React, { useState } from "react";
import InputField from "./Feeinput";
type Proform = {
  tranining: string;
  certificate: string;
  tax: string;
  intership: string;
  discount: string;
};
const ProForm = (Props: Proform) => {
  const [formData, setFormData] = useState<Proform>({
    tranining: Props.tranining,
    certificate: Props.certificate,
    tax: Props.tax,
    intership: Props.intership,
    discount: Props.discount,
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
            label={Props.tranining}
            name="tranining"
            value={formData.tranining}
            onChange={handleChange}
            placeholder="Sweatha"

          />

          <InputField
            label={Props.certificate}
            name="certificate"
            value={formData.certificate}
            onChange={handleChange}
            placeholder="kings college of engineering"
          />
          <InputField
            label={Props.tax}
            name="tax"
            value={formData.tax}
            onChange={handleChange}
            placeholder="Tax"
          />
        </div>
        <div className="text-sm">
          <InputField
            label={Props.intership}
            type="date"
            name="intership"
            value={formData.intership}
            onChange={handleChange}
            placeholder="Start Date"
          />

          <InputField
            label={Props.discount}
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            placeholder="+91 1234567890"
          />

        </div>
      </section>

    </div>

  );
};

export default ProForm;

