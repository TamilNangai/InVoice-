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
      className="w-[500px] mx-11 mt-10 p-6 font-iceberg rounded-xl border-2 border-black shadow-[0_0_10px_rgba(0,0,0,0.5)]"
    >
      <h2 className="text-xl font-semibold mb-4">Program Details</h2>

      <section className="grid grid-cols-2 gap-10 font-sanchez text-sm">

        <div>
          <InputField
            label="Internship"
            name="internship"
            placeholder="Frontend Development"
          />

          <InputField
            label="Batch"
            name="batch"
            placeholder="Jan 2026"
          />

          <InputField
            label="Start Date"
            type="date"
            name="start"
          />
        </div>

        <div className="mt-20">
          <InputField
            label="Trainer"
            name="tranier"
            placeholder="Trainer Name"
          />

          <InputField
            label="End Date"
            type="date"
            name="enddate"
          />
        </div>

      </section>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full border border-black py-2 rounded-md bg-gray-100"
        >
          Submit
        </button>
      </div>

    </form>
  );
};

export default ProgramForm;