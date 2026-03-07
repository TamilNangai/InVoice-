import React, { useState } from "react";
import InputField from "@/Components/Form/InputField"
type stdform = {
 internship: string;
 batch: string;
 start:string;
 tranier:string;
 enddate:string;
};
const StudentForm = (Props:stdform) => {
  const [formData, setFormData] = useState<stdform>({
   internship: Props.internship,
   batch: Props.batch,
   start: Props.start,
   tranier: Props.tranier,
   enddate: Props.enddate,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-[500px] mx-11 mt-10 p-6 font-iceberg rounded-xl border-2 border-black shadow-[0_0_10px_rgba(0,0,0,0.5)] ">
      <h2 className="text-xl font-semibold mb-4">Program Details</h2>
      <section className="grid grid-cols-2 gap-10 font-sanchez">
        <div className="text-sm">
          <InputField
            label={Props.internship}
            name="internship"
            value={formData.internship}
            onChange={handleChange}
            placeholder="Sweatha"

          />

          <InputField
            label={Props.batch}
            name="batch"
            value={formData.batch}
            onChange={handleChange}
            placeholder="kings college of engineering"
  
          />
              <InputField
            label={Props.start}
            type="date"
            name="start"
            value={formData.start}
            onChange={handleChange}
            placeholder="Start Date"
          />
        </div>
        <div className="text-sm mt-20">
       
          <InputField
            label={Props.tranier}
            name="tranier"
            value={formData.tranier}
            onChange={handleChange}
            placeholder="Trainer Name"
          />
          <div className="mx-2">
          <InputField
            label={Props.enddate}
            type="date"
            name="enddate"
            value={formData.enddate}
            onChange={handleChange}
            placeholder="+91 1234567890"
          />
         </div>
        </div>
      </section>

    </div>
   
  );
};

export default StudentForm;

