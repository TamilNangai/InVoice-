import React, { useState } from "react";
import InputField from "./InputField";
const StudentForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    college: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6 border rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">Student Details</h2>
<section className="flex gap-10">
    <div>
      <InputField
        label="Student Name"
        name="studentName"
        value={formData.studentName}
        onChange={handleChange}
        placeholder="Enter your name"
      />

      <InputField
         label="College / Institution"
        name="college"
        value={formData.college}
        onChange={handleChange}
        placeholder="Enter college name"
      />
      </div>
<div>
      <InputField
        label="Email Address"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter email"
      />

      <InputField
        label="Phone Number"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter phone number"
      />
      </div>
</section>
     
    </div>
  );
};

export default StudentForm;

