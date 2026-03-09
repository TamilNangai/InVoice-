// import React from "react";
// import InputField from "@/Components/Form/InputField";

// type CustomerData = {
//   customer?: string;
//   email?: string;
//   office?: string;
//   gst?: string;
//   phone?: string;
//   address?: string;
// };

// type Props = {
//   data: CustomerData;
//   setData: React.Dispatch<React.SetStateAction<CustomerData>>;
// };

// const CustomerForm: React.FC<Props> = ({ data, setData }) => {

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;

//     setData({
//       ...data,
//       [name]: value,
//     });
//   };

//   return (
//     <form
//       className=" p-6 font-iceberg rounded-xl border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.2)]"
//     >
//       <h2 className="text-xl font-bold mb-4 pl-8">Customer Details</h2>

//       <section className="grid grid-cols-2 gap-10 font-iceberg text-md w-full h-full">

//         <div>

//           <InputField
//             label="Customer Name"
//             name="customer"
//             placeholder="Swetha"
//             value={data.customer || ""}
//             onChange={handleChange}
//           />

//           <InputField
//             label="Email Address"
//             type="email"
//             name="email"
//             placeholder="swetha@email.com"
//             value={data.email || ""}
//             onChange={handleChange}
//           />

//           <InputField
//             label="Office Name"
//             name="office"
//             placeholder="Kings College of Engineering"
//             value={data.office || ""}
//             onChange={handleChange}
//           />

//           <InputField
//             label="GST Number"
//             name="gst"
//             placeholder="33ABCDE1234F1Z5"
//             value={data.gst || ""}
//             onChange={handleChange}
//           />

//         </div>

//         {/* Right Side */}

//         <div className="mt-20">

//           <InputField
//             label="Phone Number"
//             type="tel"
//             name="phone"
//             placeholder="+91 1234567890"
//             value={data.phone || ""}
//             onChange={handleChange}
//           />

//           <InputField
//             label="Office Address"
//             name="address"
//             placeholder="Chennai, Tamil Nadu"
//             value={data.address || ""}
//             onChange={handleChange}
//           />

//         </div>

//       </section>

//     </form>
//   );
// };

// export default CustomerForm;

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
  setData: (data: any) => void;
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