import React, { useState } from "react";
import InputField from "./Priceinput";
type stdform = {
 total:string;
 due:string;
 paid:string;
 duedate:string;
 paymentMethod:string;
};
const StudentForm = (Props:stdform) => {
  const [formData, setFormData] = useState<stdform>({
    total: Props.total,
    due: Props.due,
    paid: Props.paid,
    duedate: Props.duedate,
    paymentMethod: Props.paymentMethod
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-[500px] mx-11 mt-10 p-6 font-iceberg rounded-xl border-2 border-black shadow-[0_0_10px_rgba(0,0,0,0.5)] ">
      <h2 className="text-xl font-semibold mb-4">Price Details</h2>
      <section className="grid grid-cols-2 gap-10 font-sanchez">
        <div className="text-sm">
          <InputField
            label={Props.total}
            name="total"
            value={formData.total}
            onChange={handleChange}
            placeholder="110000"

          />

          <InputField
            label={Props.due}
            name="due"
            value={formData.due}
            onChange={handleChange}
            placeholder="10000"
          />
        </div>
        <div className="text-sm">
           <InputField
            label={Props.paid}
            type="tel"
            name="paid"
            value={formData.paid}
            onChange={handleChange}
            placeholder="+91 1234567890"
          />
          <InputField
            label={Props.duedate}
            type="date"
            name="duedate"
            value={formData.duedate}
            onChange={handleChange}
            placeholder="sweatha@gmail.com"
          />
        </div>
      </section>
      <div className="flex justify-center">
      <InputField
            label={Props.paymentMethod}
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            placeholder="+91 1234567890"
          />
</div>
    </div>
   
  );
};

export default StudentForm;

