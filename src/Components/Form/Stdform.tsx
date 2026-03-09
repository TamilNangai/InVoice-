import React from "react";
import InputField from "@/Components/Form/InputField";

type StudentData = {
  studentName: string;
  college: string;
  phone: string;
  email: string;
};

type Props = {
  data: StudentData;
  setData: (data: StudentData) => void;
};

const StudentForm: React.FC<Props> = ({ data, setData }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value
    });
  };

  return (
    <form
      className="p-6 font-iceberg rounded-xl border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.2)] "
    >
      <h2 className="text-xl font-semibold mb-4 pl-8">
        Student Details
      </h2>

      <section className="grid grid-cols-2 gap-10 font-iceberg text-lg w-full h-full ">

        <div className="">
          <InputField
            label="Student Name"
            name="studentName"
            value={data.studentName || ""}
            onChange={handleChange}
            placeholder="Swetha"
          
          />

          <InputField
            label="College Name"
            name="college"
            value={data.college || ""}
            onChange={handleChange}
            placeholder="Kings College of Engineering"
          />

        </div>

      

        <div>

          <InputField
            label="Phone Number"
            type="number"
            name="phone"
            value={data.phone || ""}
            onChange={handleChange}
            placeholder="+91 1234567890"
          />

          <InputField
            label="Email Address"
            type="email"
            name="email"
            value={data.email || ""}
            onChange={handleChange}
            placeholder="swetha@gmail.com"
          />

        </div>

      </section>

    </form>
  );
};

export default StudentForm;