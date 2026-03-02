// import React from "react";
import InputField from "./Stdinput";

const CustomerForm = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const data = {
      customer: (form.elements.namedItem("customer") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      gst: (form.elements.namedItem("gst") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      address: (form.elements.namedItem("address") as HTMLInputElement).value,
      office: (form.elements.namedItem("office") as HTMLInputElement).value,
    };

    console.log("Customer Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-11 mt-10 p-6 font-iceberg rounded-xl border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.2)]"
    >
      <h2 className="text-xl font-bold mb-4 pl-8">Customer Details</h2>

      <section className="grid grid-cols-2 gap-10 font-iceberg text-md">

        <div>
          <InputField
            label="Customer Name"
            name="customer"
            placeholder="Sweatha"
          />

          <InputField
            label="Email Address"
            type="email"
            name="email"
            placeholder="swetha@email.com"
          />
          <InputField
            label="Office Name"
            name="office"
            placeholder="Kings College of Engineering"
          />
          <InputField
            label="GST Number"
            name="gst"
            placeholder="1234567890"
          />

        </div>

        <div className="mt-20">
          
          <InputField
            label="Phone Number"
            type="tel"
            name="phone"
            placeholder="+91 1234567890"
          />
          <InputField
            label="Office Address"
            name="address"
            placeholder="Kings College of Engineering"
          />


        </div>

      </section>

    </form>
  );
};

export default CustomerForm;