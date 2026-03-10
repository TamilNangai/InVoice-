// import { useRef } from "react";

// const ProductForm = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const addRow = () => {
//     if (!containerRef.current) return;

//     const row = document.createElement("div");
//     row.className =
//       "grid grid-cols-12 items-center gap-3 mt-3 product-row";

//     row.innerHTML = `
//       <input
//         name="productName"
//         placeholder="Product Name"
//         class="col-span-4 border-2 border-black rounded-md px-3 py-2"
//       />

//       <select
//         name="sub"
//         class="col-span-2 border-2 border-black rounded-md px-3 py-2"
//       >
//         <option value="1M">1M</option>
//         <option value="2M">2M</option>
//         <option value="6M">6M</option>
//         <option value="1Y">1Y</option>
//       </select>

//       <input
//         name="price"
//         placeholder="100000"
//         class="col-span-2 border-2 border-black rounded-md px-3 py-2"
//       />

//       <input
//         name="tax"
//         placeholder="18"
//         class="col-span-2 border-2 border-black rounded-md px-3 py-2"
//       />

//       <button
//         type="button"
//         class="col-span-1 bg-orange-500 text-white rounded-md py-2 delete-btn"
//       >
//         ✕
//       </button>
//     `;

//     containerRef.current.appendChild(row);

//     row.querySelector(".delete-btn")?.addEventListener("click", () => {
//       row.remove();
//     });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     console.log(Object.fromEntries(formData.entries()));
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="p-6 rounded-2xl border border-black shadow-[5px_5px_15px_rgba(0,0,0,0.3)]"
//     >
//       <h2 className="text-xl font-iceberg mb-6 font-bold pl-8">Product Details</h2>

//       {/* Table Header */}
//       <div className="grid grid-cols-12 gap-3 font-iceberg text-lg h-full w-full">
//         <div className="col-span-5">Product Name</div>
//         <div className="col-span-2">Sub</div>
//         <div className="col-span-2">Price</div>
//         <div className="col-span-2">Tax %</div>
//         <div className="col-span-1"></div>
//       </div>

//       {/* Rows Container */}
//        <section>
//       <div ref={containerRef}>
//         {/* Default Row */}
//         <div className="grid grid-cols-12 items-center gap-3 mt-3 font-sanchez text-sm">
//           <input
//             name="productName"
//             placeholder="Report Management Software"
//             className="col-span-5 border-2 border-black rounded-md px-3 py-2"
//           />

//           <select
//             name="sub"
//             className="col-span-2 border-2 border-black rounded-md px-3 py-2"
//           >
//             <option value="2M">2M</option>
//             <option value="1Y">1Y</option>
//             <option value="6M">6M</option>
//           </select>

//           <input
//             name="price"
//             type="number"
//             placeholder="100000"
//             className="col-span-2 border-2 border-black rounded-md px-3 py-2"
//           />

//           <input
//             name="tax"
//             type="number"
//             placeholder="18"
//             className="col-span-2 border-2 border-black rounded-md px-3 py-2"
//           />

//           <button
//             type="button"
//             onClick={(e) =>
//               (e.currentTarget.parentElement as HTMLDivElement).remove()
//             }
//             className="col-span-1 bg-orange-500 text-white rounded-md py-2"
//           >
//             ✕
//           </button>
//         </div>
//       </div>

//        <div ref={containerRef}>
//         {/* Default Row */}
//         <div className="grid grid-cols-12 items-center gap-3 mt-3 product-row font-sanchez text-sm">
//           <input
//             name="productName"
//             placeholder="Report Management Software"
//             className="col-span-5 border-2 border-black rounded-md px-3 py-2"
//           />

//           <select
//             name="sub"
//             className="col-span-2 border-2 border-black rounded-md px-3 py-2"
//           >
//             <option value="2M">1Y</option>
//             <option value="1Y">2M</option>
//             <option value="6M">6M</option>
//           </select>

//           <input
//             name="price"
//             type="number"
//             placeholder="100000"
//             className="col-span-2 border-2 border-black rounded-md px-3 py-2"
//           />

//           <input
//             name="tax"
//             type="number"
//             placeholder="18"
//             className="col-span-2 border-2 border-black rounded-md px-3 py-2"
//           />

//           <button
//             type="button"
//             onClick={(e) =>
//               (e.currentTarget.parentElement as HTMLDivElement).remove()
//             }
//             className="col-span-1 bg-orange-500 text-white rounded-md py-2"
//           >
//             ✕
//           </button>
//         </div>
//       </div>
//      </section>

//       {/* Add Button */}
//       <button
//         type="button"
//         onClick={addRow}
//         className="mt-6 w-full border-2 border-black rounded-md py-1 bg-gray-200 font-medium font-sanchez"
//       >
//         + Add Product Line
//       </button>
//     </form>
//   );
// };

// export default ProductForm;

import React from "react"

type Product = {
  productName: string
  sub: string
  price: number
  tax: number
}

type Props = {
  data: Product[]
  setData: (data: Product[]) => void
}

const ProductForm = ({ data, setData }: Props) => {

  const addRow = () => {
    setData([
      ...data,
      {
        productName: "",
        sub: "2M",
        price: 0,
        tax: 0
      }
    ])
  }

  const deleteRow = (index: number) => {
    const updated = data.filter((_, i) => i !== index)
    setData(updated)
  }

  const handleChange = (
    index: number,
    field: string,
    value: string
  ) => {

    const updated = [...data]

    updated[index] = {
      ...updated[index],
      [field]:
        field === "price" || field === "tax"
          ? Number(value)
          : value
    }

    setData(updated)
  }

  return (

    <form className="p-6 rounded-2xl border border-black shadow-[5px_5px_15px_rgba(0,0,0,0.3)]">

      <h2 className="text-xl font-iceberg mb-6 font-bold pl-8">
        Product Details
      </h2>

      {/* HEADER */}

      <div className="grid grid-cols-12 gap-3 font-iceberg text-lg">

        <div className="col-span-5">Product Name</div>
        <div className="col-span-2">Sub</div>
        <div className="col-span-2">Price</div>
        <div className="col-span-2">Tax %</div>
        <div className="col-span-1"></div>

      </div>


      {/* ROWS */}

      {data.map((item, index) => (

        <div
          key={index}
          className="grid grid-cols-12 items-center gap-3 mt-3 font-sanchez text-sm"
        >

          <input
            value={item.productName}
            onChange={(e) => handleChange(index, "productName", e.target.value)}
            placeholder="Report Management Software"
            className="col-span-5 border-2 border-black rounded-md px-3 py-2"
          />

          <select
            value={item.sub}
            onChange={(e) => handleChange(index, "sub", e.target.value)}
            className="col-span-2 border-2 border-black rounded-md px-3 py-2"
          >

            <option value="2M">2M</option>
            <option value="6M">6M</option>
            <option value="1Y">1Y</option>

          </select>

          <input
            type="number"
            value={item.price}
            onChange={(e) => handleChange(index, "price", e.target.value)}
            className="col-span-2 border-2 border-black rounded-md px-3 py-2"
          />

          <input
            type="number"
            value={item.tax}
            onChange={(e) => handleChange(index, "tax", e.target.value)}
            className="col-span-2 border-2 border-black rounded-md px-3 py-2"
          />

          <button
            type="button"
            onClick={() => deleteRow(index)}
            className="col-span-1 bg-orange-500 text-white rounded-md py-2"
          >
            ✕
          </button>

        </div>

      ))}


      <button
        type="button"
        onClick={addRow}
        className="mt-6 w-full border-2 border-black rounded-md py-1 bg-gray-200 font-medium font-sanchez"
      >
        + Add Product Line
      </button>

    </form>

  )
}

export default ProductForm
