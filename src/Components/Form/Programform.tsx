// import React from "react";
import InputField from "./Stdinput";

const ProgramForm = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const data = {
      internship: (form.elements.namedItem("internship") as HTMLInputElement).value,
      batch: (form.elements.namedItem("batch") as HTMLInputElement).value,
      start: (form.elements.namedItem("start") as HTMLInputElement).value,
      trainer: (form.elements.namedItem("tranier") as HTMLInputElement).value,
      enddate: (form.elements.namedItem("enddate") as HTMLInputElement).value,
    };

    console.log("Program Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" p-6 font-iceberg rounded-xl border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.2)]"
    >
      <h2 className="text-xl font-semibold mb-4 pl-8">Program Details</h2>

      <section className="grid grid-cols-2 gap-10 font-iceberg text-lg w-full h-full">

        <div className="">
          <InputField
            label="Internship Program Name"
            name="internship"
            placeholder="Web Development Internship"
          />

          <InputField
            label="Batch Name"
            name="batch"
            placeholder="swetha@gmail.com"
          />

          <InputField
            label="Start Date"
            name="start"
            type="number"
            placeholder="01-01-2026"
          />
        </div>

        <div className="">
          <InputField
            label="Trainer Name(optional)"
            name="tranier"
            placeholder="HariHaran"
          />

          <InputField
            label="End Date"
            name="enddate"
            type="number"
            placeholder="31-01-2026"
          />
        </div>
      </section>
    </form>
  );
};

export default ProgramForm;