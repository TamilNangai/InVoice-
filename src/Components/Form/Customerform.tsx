import React from "react";
import InputField from "@/Components/Form/InputField";

type Props = {
  data: {
    customer: string;
    email: string;
    office: string;
    gst: string;
    phone: string;
    address: string;
  };
  setData: (data: Props["data"]) => void;

};

const CustomerForm = ({ data, setData }: Props) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form
      className="p-6 font-iceberg rounded-xl border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.2)]"
    >
      <h2 className="text-xl font-semibold mb-4 pl-8">
        Customer Details
      </h2>

      <section className="grid grid-cols-2 gap-10 font-iceberg text-lg w-full h-full">

        <div>

          <InputField
            label="Customer Name"
            name="customer"
            value={data.customer}
            onChange={handleChange}
            placeholder="Swetha"
          />

          <InputField
            label="Email Address"
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="swetha@email.com"
          />

          <InputField
            label="Office Name"
            name="office"
            value={data.office}
            onChange={handleChange}
            placeholder="Kings College of Engineering"
          />

          <InputField
            label="GST Number"
            name="gst"
            value={data.gst}
            onChange={handleChange}
            placeholder="33ABCDE1234F1Z5"
          />

        </div>

        <div className="mt-20">

          <InputField
            label="Phone Number"
            type="number"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            placeholder="+91 1234567890"
          />

          <InputField
            label="Office Address"
            name="address"
            value={data.address}
            onChange={handleChange}
            placeholder="Chennai, Tamil Nadu"
          />

        </div>

      </section>

    </form>
  );
};

export default CustomerForm;
