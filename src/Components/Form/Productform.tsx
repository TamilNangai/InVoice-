// // import React, { useState } from "react";
// // import ProductInput from "./Productinput";

// // type ProductForm = {
// //   productName: string;
// //   sub: string;
// //   price: string;
// //   tax: string;
// // };

// // const ProductDetails = (Props: ProductForm) => {
// //   const [formData, setFormData] = useState<ProductForm>({
// //     productName: Props.productName,
// //     sub: Props.sub,
// //     price: Props.price,
// //     tax: Props.tax,
// //   });

// //   const handleChange = (
// //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
// //   ) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   return (
// //     <div className="w-[500px] mx-11 mt-10 p-6 font-iceberg rounded-xl border-2 border-black shadow-[0_0_10px_rgba(0,0,0,0.5)]">

// //       <h2 className="text-xl font-semibold mb-4">
// //         Product Details
// //       </h2>

// //       <section className="grid grid-cols-4 gap-10 font-sanchez text-sm">

// //         <ProductInput
// //           label="Product Name"
// //           name="productName"
// //           value={formData.productName}
// //           onChange={handleChange}
// //           placeholder="Report Management Software"
// //         />

// //        <div className="mb-4">
// //       <label className="font-medium font-iceberg text-lg">
// //         label="Subscription Period"
// //       </label>
// //       <select
// //          name="price"
// //           value={formData.price}
// //           onChange={handleChange}
// //           placeholder="100000"
// //         className="py-2 outline-none border-0 border-b border-black bg-transparent"
// //       >
// //         <option value="1M">1M</option>
// //         <option value="2M">2M</option>
// //         <option value="6M">6M</option>
// //         <option value="1Y">1Y</option>
// //       </select>
// //     </div>

// //         <ProductInput
// //           label="Price"
// //           name="price"
// //           value={formData.price}
// //           onChange={handleChange}
// //           placeholder="100000"
// //         />

// //         <ProductInput
// //           label="Tax %"
// //           name="tax"
// //           value={formData.tax}
// //           onChange={handleChange}
// //           placeholder="18"
// //         />

// //       </section>

// //       <div className="mt-6">
// //         <button className="w-full border border-black py-2 rounded-md hover:bg-gray-100">
// //           + Add Product Line
// //         </button>
// //       </div>

// //     </div>
// //   );
// // };

// // export default ProductDetails;








// import React, { useState } from "react";
// import InputField from "./Productinput";
// type stdform = {
//   productName: string;
//   sub: string;
//   price: string;
//   tax: string;
// };
// const StudentForm = (Props: stdform) => {
//   const [formData, setFormData] = useState<stdform>({
//     productName: Props.productName,
//     sub: Props.sub,
//     price: Props.price,
//     tax: Props.tax,

//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <div className="w-[500px] mx-11 mt-10 p-6 font-iceberg rounded-xl border-2 border-black shadow-[0_0_10px_rgba(0,0,0,0.5)] ">
//       <h2 className="text-xl font-semibold mb-4">Product Details</h2>
//       <section className="grid grid-cols-6 font-sanchez">
//         <div className="">
//           <InputField
//             label={Props.productName}
//             name="productName"
//             value={formData.productName}
//             onChange={handleChange}
//             placeholder="Report Management Software"

//           />
//           <InputField
//             label={Props.productName}
//             name="productName"
//             value={formData.productName}
//             onChange={handleChange}
//             placeholder="Sweatha"

//           />
//         </div>
//         <div>
//           {/* <select
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             placeholder="100000"
//             className="py-2 border-2 border-black rounded-md"
//           >
//             <option value="1M">1M</option>
//             <option value="2M">2M</option>
//             <option value="6M">6M</option>
//             <option value="1Y">1Y</option>
//           </select>
//           <select
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             placeholder="100000"
//             className="py-2 border-2 mt-3 border-black rounded-md"
//           >
//             <option value="1M">1M</option>
//             <option value="2M">2M</option>
//             <option value="6M">6M</option>
//             <option value="1Y">1Y</option>
//           </select> */}
//         </div>

//         <div >
//           <InputField
//             label=""
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             placeholder="100000"
//           />
//           <InputField
//             label=""
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             placeholder="100000"
//           />
//         </div>
//         <div>
//           <InputField
//             label={Props.sub}
//             name="sub"
//             value={formData.sub}
//             onChange={handleChange}
//             placeholder="100000"
//           />

//           <InputField
//             label={Props.sub}
//             name="sub"
//             value={formData.sub}
//             onChange={handleChange}
//             placeholder="20000"
//           />
//         </div>
//         <div>
//           <InputField
//             label={Props.tax}
//             name="tax"
//             value={formData.tax}
//             onChange={handleChange}
//             placeholder="18"
//           />
//           <InputField
//             label={Props.tax}
//             name="tax"
//             value={formData.tax}
//             onChange={handleChange}
//             placeholder="18"
//           />
//         </div>

//       </section>
//       <div className="mt-6 w-[445px]">
//         <button className="w-full border border-black py-2 rounded-md bg-gray-100">
//           + Add Product Line
//         </button>
//       </div>
//     </div>


//   );
// };

// export default StudentForm;

import { useRef } from "react";

const ProductForm = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const addRow = () => {
    if (!containerRef.current) return;

    const row = document.createElement("div");
    row.className =
      "grid grid-cols-12 items-center gap-3 mt-3 product-row";

    row.innerHTML = `
      <input
        name="productName"
        placeholder="Product Name"
        class="col-span-4 border-2 border-black rounded-md px-3 py-2"
      />

      <select
        name="sub"
        class="col-span-2 border-2 border-black rounded-md px-3 py-2"
      >
        <option value="1M">1M</option>
        <option value="2M">2M</option>
        <option value="6M">6M</option>
        <option value="1Y">1Y</option>
      </select>

      <input
        name="price"
        placeholder="100000"
        class="col-span-2 border-2 border-black rounded-md px-3 py-2"
      />

      <input
        name="tax"
        placeholder="18"
        class="col-span-2 border-2 border-black rounded-md px-3 py-2"
      />

      <button
        type="button"
        class="col-span-1 bg-orange-500 text-white rounded-md py-2 delete-btn"
      >
        ✕
      </button>
    `;

    containerRef.current.appendChild(row);

    row.querySelector(".delete-btn")?.addEventListener("click", () => {
      row.remove();
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(Object.fromEntries(formData.entries()));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-11 mt-10 p-6 rounded-2xl border border-black shadow-[5px_5px_15px_rgba(0,0,0,0.3)]"
    >
      <h2 className="text-xl font-iceberg mb-6 font-bold pl-8">Product Details</h2>

      {/* Table Header */}
      <div className="grid grid-cols-12 gap-3 font-iceberg text-lg">
        <div className="col-span-4">Product Name</div>
        <div className="col-span-2">Sub</div>
        <div className="col-span-2">Price</div>
        <div className="col-span-2">Tax %</div>
        <div className="col-span-1"></div>
      </div>

      {/* Rows Container */}
       <section>
      <div ref={containerRef}>
        {/* Default Row */}
        <div className="grid grid-cols-12 items-center gap-3 mt-3 font-sanchez text-sm">
          <input
            name="productName"
            placeholder="Report Management Software"
            className="col-span-5 border-2 border-black rounded-md px-3 py-2"
          />

          <select
            name="sub"
            className="col-span-2 border-2 border-black rounded-md px-3 py-2"
          >
            <option value="2M">2M</option>
            <option value="1Y">1Y</option>
            <option value="6M">6M</option>
          </select>

          <input
            name="price"
            placeholder="100000"
            className="col-span-2 border-2 border-black rounded-md px-3 py-2"
          />

          <input
            name="tax"
            placeholder="18"
            className="col-span-2 border-2 border-black rounded-md px-3 py-2"
          />

          <button
            type="button"
            onClick={(e) =>
              (e.currentTarget.parentElement as HTMLDivElement).remove()
            }
            className="col-span-1 bg-orange-500 text-white rounded-md py-2"
          >
            ✕
          </button>
        </div>
      </div>

       <div ref={containerRef}>
        {/* Default Row */}
        <div className="grid grid-cols-12 items-center gap-3 mt-3 product-row font-sanchez text-sm">
          <input
            name="productName"
            placeholder="Report Management Software"
            className="col-span-5 border-2 border-black rounded-md px-3 py-2"
          />

          <select
            name="sub"
            className="col-span-2 border-2 border-black rounded-md px-3 py-2"
          >
            <option value="2M">1Y</option>
            <option value="1Y">2M</option>
            <option value="6M">6M</option>
          </select>

          <input
            name="price"
            placeholder="100000"
            className="col-span-2 border-2 border-black rounded-md px-3 py-2"
          />

          <input
            name="tax"
            placeholder="18"
            className="col-span-2 border-2 border-black rounded-md px-3 py-2"
          />

          <button
            type="button"
            onClick={(e) =>
              (e.currentTarget.parentElement as HTMLDivElement).remove()
            }
            className="col-span-1 bg-orange-500 text-white rounded-md py-2"
          >
            ✕
          </button>
        </div>
      </div>
     </section>

      {/* Add Button */}
      <button
        type="button"
        onClick={addRow}
        className="mt-6 w-full border-2 border-black rounded-md py-1 bg-gray-200 font-medium font-sanchez"
      >
        + Add Product Line
      </button>
    </form>
  );
};

export default ProductForm;