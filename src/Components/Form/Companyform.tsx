import InputField from "./Stdinput";

const CompanyForm = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const data = {
      companyName: (form.elements.namedItem("companyName") as HTMLInputElement).value,
      companyEmail: (form.elements.namedItem("companyEmail") as HTMLInputElement).value,
      companyPhone: (form.elements.namedItem("companyPhone") as HTMLInputElement).value,
      companyAddress: (form.elements.namedItem("companyAddress") as HTMLInputElement).value,
    };

    console.log("Company Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-10 mt-10 h-72 p-6 rounded-xl font-iceberg border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.5)]"
    >
      <h2 className="text-xl font-semibold mb-4 pl-5">Company Details</h2>

      <p className="text-md font-sanchez pl-5">
These details will appear on your invoices.      </p>

      <section className="grid grid-cols-2 gap-32 font-sanchez mt-5 mx-5">
        <div className="text-sm space-y-10">
          <InputField
            label="Company Name"
            name="companyName"
            placeholder="Sweathalknlkb"
          />

          <InputField
            label="Company Email"
            name="companyEmail"
            type="email"
            placeholder="sweatha@gmail.colknlknm"
          />
        </div>

        <div className="text-sm space-y-10">
          <InputField
            label="Company Phone"
            type="number"
            name="companyPhone"
            placeholder="+91 1234567890"
          />

          <InputField
            label="Company Address"
            name="companyAddress"
            placeholder="Chennai, Tamil Nadu"
          />
        </div>
      </section>

     
    </form>
  );
};

export default CompanyForm;