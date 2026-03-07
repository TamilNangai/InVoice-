import React from "react";
import InputField from "@/Components/Form/InputField";

type CustomerData = {
  customer?: string;
  email?: string;
  office?: string;
  gst?: string;
  phone?: string;
  address?: string;
};

type Props = {
  data: CustomerData;
  setData: React.Dispatch<React.SetStateAction<CustomerData>>;
};

const CustomerForm: React.FC<Props> = ({ data, setData }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <form
      className="mx-11 mt-10 p-6 font-iceberg rounded-xl border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.2)]"
    >
      <h2 className="text-xl font-bold mb-4 pl-8">Customer Details</h2>

      <section className="grid grid-cols-2 gap-10 font-iceberg text-md">

        {/* Left Side */}

        <div>

          <InputField
            label="Customer Name"
            name="customer"
            placeholder="Swetha"
            value={data.customer || ""}
            onChange={handleChange}
          />

          <InputField
            label="Email Address"
            type="email"
            name="email"
            placeholder="swetha@email.com"
            value={data.email || ""}
            onChange={handleChange}
          />

          <InputField
            label="Office Name"
            name="office"
            placeholder="Kings College of Engineering"
            value={data.office || ""}
            onChange={handleChange}
          />

          <InputField
            label="GST Number"
            name="gst"
            placeholder="33ABCDE1234F1Z5"
            value={data.gst || ""}
            onChange={handleChange}
          />

        </div>

        {/* Right Side */}

        <div className="mt-20">

          <InputField
            label="Phone Number"
            type="tel"
            name="phone"
            placeholder="+91 1234567890"
            value={data.phone || ""}
            onChange={handleChange}
          />

          <InputField
            label="Office Address"
            name="address"
            placeholder="Chennai, Tamil Nadu"
            value={data.address || ""}
            onChange={handleChange}
          />

        </div>

      </section>

    </form>
  );
};

export default CustomerForm;