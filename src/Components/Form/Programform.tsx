
import React, { useState } from "react";
import InputField from "@/Components/Form/InputField";

type Props = {
  data: {
    internship: string;
    batch: string;
    start: string;
    trainer: string;
    enddate: string;
  };
  setData: (data: any) => void;
};

const ProgramForm = ({ data, setData }: Props) => {

  const [errors, setErrors] = useState<any>({});

  const validate = (name: string, value: string) => {

    let message = "";

    if (!value) {
      message = "This field is required";
    }

    if (name === "enddate" && data.start) {
      if (value < data.start) {
        message = "End date must be after start date";
      }
    }

    setErrors((prev: any) => ({
      ...prev,
      [name]: message
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value
    });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    validate(e.target.name, e.target.value);
  };

  return (
    <main className="p-6 font-iceberg rounded-xl border border-black shadow-[5px_5px_15px_rgba(0,0,0,0.2)] ">

      <h2 className="text-xl sm:text-[16px] font-semibold mb-4 pl-8">Program Details</h2>

      <section className="grid grid-cols-2 gap-10 text-lg sm:text-[14px]">

        <div>

          <InputField
            label="Internship Program Name"
            name="internship"
            value={data.internship}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Web Development Internship"
            required
          />
          
          <InputField
            label="Batch Name"
            name="batch"
            value={data.batch}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
         
          <InputField
            label="Start Date"
            type="date"
            name="start"
            value={data.start}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          
        </div>

        <div className="mt-20">

          <InputField
            label="Trainer Name"
            name="trainer"
            value={data.trainer}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Hariharan"
          />
         
          <InputField
            label="End Date"
            type="date"
            name="enddate"
            value={data.enddate}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
         
        </div>

      </section>
    </main>
  );
};

export default ProgramForm;
