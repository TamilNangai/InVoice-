import React, { useState } from "react";
import InputField from "./Stdinput";
type stdform = {
  studentName: string;
  college: string;
  email: string;
  phone: string;
};
const StudentForm = (Props:stdform) => {
  const [formData, setFormData] = useState<stdform>({
    studentName: Props.studentName,
    college: Props.college,
    email: Props.email,
    phone: Props.phone,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-[500px] mx-11 mt-10 p-6 font-iceberg rounded-xl border-2 border-black shadow-[0_0_10px_rgba(0,0,0,0.5)] ">
      <h2 className="text-xl font-semibold mb-4">Student Details</h2>
      <section className="grid grid-cols-2 gap-10 font-sanchez">
        <div className="text-sm">
          <InputField
            label={Props.studentName}
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="Sweatha"

          />

          <InputField
            label={Props.college}
            name="college"
            value={formData.college}
            onChange={handleChange}
            placeholder="kings college of engineering"
          />
        </div>
        <div className="text-sm">
           <InputField
            label={Props.phone}
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 1234567890"
          />
          <InputField
            label={Props.email}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="sweatha@gmail.com"
          />
        </div>
      </section>

    </div>
   
  );
};

export default StudentForm;

