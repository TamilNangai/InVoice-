// import React from "react";
import InputField from "./Feeinput";

const ProForm = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const data = {
      tranining: (form.elements.namedItem("tranining") as HTMLInputElement).value,
      certificate: (form.elements.namedItem("certificate") as HTMLInputElement).value,
      tax: (form.elements.namedItem("tax") as HTMLInputElement).value,
      intership: (form.elements.namedItem("intership") as HTMLInputElement).value,
      discount: (form.elements.namedItem("discount") as HTMLInputElement).value,
    };

    console.log("Form Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[500px] mx-11 mt-10 p-6 font-iceberg rounded-xl border-2 border-black shadow-[5px_5px_10px_rgba(0,0,0,0.3)]"
    >
      <h2 className="text-xl font-semibold mb-4">Fee Breakdown</h2>

      <section className="grid grid-cols-2 gap-10 font-sanchez">
        <div className="text-sm ">
          <InputField
            label="Training Fee"
            name="tranining"
            type="number"

            placeholder="5000.0"
          />

          <InputField
            label="Certificate Fee"
            name="certificate"
            type="number"

            placeholder="Swetha@gmail.com"
          />

          <InputField
            label="Tax Rate(%)"
            name="tax"
            type="number"
            placeholder="10"
          />
        </div>

        <div className="text-sm ">
          <InputField
            label="Internship Fee"
            type="number"
            name="intership"
            placeholder="500.00"
          />

          <InputField
            label="Discount"
            name="discount"
            type="number"
            placeholder="50.0"
          />
        </div>
      </section>


    </form>
  );
};

export default ProForm;