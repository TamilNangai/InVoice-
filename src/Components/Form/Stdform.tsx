import React from "react";
import InputField from "./Stdinput";

type StudentFormProps = {
  studentName: string;
  college: string;
  phone: string;
  email: string;
};

const StudentForm = ({
  studentName,
  college,
  phone,
  email,
}: StudentFormProps) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const data = {
      studentName: (form.elements.namedItem("studentName") as HTMLInputElement).value,
      college: (form.elements.namedItem("college") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
    };

    console.log("Student Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 font-iceberg rounded-xl border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.2)] "
    >
      <h2 className="text-xl font-semibold mb-4 pl-8">
        Student Details
      </h2>

      <section className="grid grid-cols-2 gap-10 font-iceberg text-lg w-full h-full ">

        <div className="">
          <InputField
            label={studentName}
            name="studentName"
            placeholder="Sweatha"
          />

          <InputField
            label={college}
            name="college"
            placeholder="Kings College of Engineering"
          />
        </div>

        <div>
          <InputField
            label={phone}
            type="number"
            name="phone"
            placeholder="+91 1234567890"
          />

          <InputField
            label={email}
            type="email"
            name="email"
            placeholder="sweatha@gmail.com"
          />
        </div>

      </section>
    </form>
  );
};

export default StudentForm;