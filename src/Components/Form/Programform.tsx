import React from "react";
import InputField from "@/Components/Form/InputField"

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div
      className="mx-11 mt-10 p-6 font-iceberg rounded-xl border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.2)]"
    >
      <h2 className="text-xl font-semibold mb-4 pl-8">Program Details</h2>

      <section className="grid grid-cols-2 gap-10 font-iceberg text-lg">

        <div className="">
          <InputField
            label="Internship Program Name"
            name="internship"
            value={data.internship}
            onChange={handleChange}
            placeholder="Web Development Internship"
          />

          <InputField
            label="Batch Name"
            name="batch"
            value={data.batch}
            onChange={handleChange}
            placeholder="Summer Batch 2026"
          />

          <InputField
            label="Start Date"
            type="date"
            name="start"
            value={data.start}
            onChange={handleChange}
          />
        </div>

        <div className="mt-20">
          <InputField
            label="Trainer Name (Optional)"
            name="trainer"
            value={data.trainer}
            onChange={handleChange}
            placeholder="Hariharan"
          />

          <InputField
            label="End Date"
            type="date"
            name="enddate"
            value={data.enddate}
            onChange={handleChange}
          />
        </div>
      </section>
    </div>
  );
};

export default ProgramForm;