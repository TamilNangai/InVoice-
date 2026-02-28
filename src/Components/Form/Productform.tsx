// import React, { useState } from "react";
// import ProductInput from "./Productinput";

// type ProductForm = {
//   productName: string;
//   sub: string;
//   price: string;
//   tax: string;
// };

// const ProductDetails = (Props: ProductForm) => {
//   const [formData, setFormData] = useState<ProductForm>({
//     productName: Props.productName,
//     sub: Props.sub,
//     price: Props.price,
//     tax: Props.tax,
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <div className="w-[500px] mx-11 mt-10 p-6 font-iceberg rounded-xl border-2 border-black shadow-[0_0_10px_rgba(0,0,0,0.5)]">

//       <h2 className="text-xl font-semibold mb-4">
//         Product Details
//       </h2>

//       <section className="grid grid-cols-4 gap-10 font-sanchez text-sm">

//         <ProductInput
//           label="Product Name"
//           name="productName"
//           value={formData.productName}
//           onChange={handleChange}
//           placeholder="Report Management Software"
//         />

//        <div className="mb-4">
//       <label className="font-medium font-iceberg text-lg">
//         label="Subscription Period"
//       </label>
//       <select
//          name="price"
//           value={formData.price}
//           onChange={handleChange}
//           placeholder="100000"
//         className="py-2 outline-none border-0 border-b border-black bg-transparent"
//       >
//         <option value="1M">1M</option>
//         <option value="2M">2M</option>
//         <option value="6M">6M</option>
//         <option value="1Y">1Y</option>
//       </select>
//     </div>

//         <ProductInput
//           label="Price"
//           name="price"
//           value={formData.price}
//           onChange={handleChange}
//           placeholder="100000"
//         />

//         <ProductInput
//           label="Tax %"
//           name="tax"
//           value={formData.tax}
//           onChange={handleChange}
//           placeholder="18"
//         />

//       </section>

//       <div className="mt-6">
//         <button className="w-full border border-black py-2 rounded-md hover:bg-gray-100">
//           + Add Product Line
//         </button>
//       </div>

//     </div>
//   );
// };

// export default ProductDetails;








import React, { useState } from "react";
import InputField from "./Productinput";
type stdform = {
  productName: string;
  sub: string;
  price: string;
  tax: string;
};
const StudentForm = (Props: stdform) => {
  const [formData, setFormData] = useState<stdform>({
    productName: Props.productName,
    sub: Props.sub,
    price: Props.price,
    tax: Props.tax,

  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-[500px] mx-11 mt-10 p-6 font-iceberg rounded-xl border-2 border-black shadow-[0_0_10px_rgba(0,0,0,0.5)] ">
      <h2 className="text-xl font-semibold mb-4">Product Details</h2>
      <section className="grid grid-cols-6 font-sanchez">
        <div className="">
          <InputField
            label={Props.productName}
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            placeholder="Report Management Software"

          />
          <InputField
            label={Props.productName}
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            placeholder="Sweatha"

          />
        </div>
        <div>
          {/* <select
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="100000"
            className="py-2 border-2 border-black rounded-md"
          >
            <option value="1M">1M</option>
            <option value="2M">2M</option>
            <option value="6M">6M</option>
            <option value="1Y">1Y</option>
          </select>
          <select
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="100000"
            className="py-2 border-2 mt-3 border-black rounded-md"
          >
            <option value="1M">1M</option>
            <option value="2M">2M</option>
            <option value="6M">6M</option>
            <option value="1Y">1Y</option>
          </select> */}
        </div>

        <div >
          <InputField
            label=""
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="100000"
          />
          <InputField
            label=""
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="100000"
          />
        </div>
        <div>
          <InputField
            label={Props.sub}
            name="sub"
            value={formData.sub}
            onChange={handleChange}
            placeholder="100000"
          />

          <InputField
            label={Props.sub}
            name="sub"
            value={formData.sub}
            onChange={handleChange}
            placeholder="20000"
          />
        </div>
        <div>
          <InputField
            label={Props.tax}
            name="tax"
            value={formData.tax}
            onChange={handleChange}
            placeholder="18"
          />
          <InputField
            label={Props.tax}
            name="tax"
            value={formData.tax}
            onChange={handleChange}
            placeholder="18"
          />
        </div>

      </section>
      <div className="mt-6 w-[445px]">
        <button className="w-full border border-black py-2 rounded-md bg-gray-100">
          + Add Product Line
        </button>
      </div>
    </div>


  );
};

export default StudentForm;

