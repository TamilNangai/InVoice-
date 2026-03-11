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


// type Product = {
//   productName: string;
//   sub: string;
//   price: number;
//   tax: number;
// };

// type ProductFormProps = {
//   products: Product[];
//   onAddRow: () => void;
//   onDeleteRow: (index: number) => void;
//   onChange: (index: number, field: keyof Product, value: string | number) => void;
// };

// const ProductForm = ({
//   products = [
//     {
//       productName: "Report Management Software",
//       sub: "2M",
//       price: 100000,
//       tax: 18,
//     },
//     {
//       productName: "Hall Booking software",
//       sub: "1Y",
//       price: 200000,
//       tax: 18,
//     },
//   ],
//   onAddRow = () => {},
//   onDeleteRow = () => {},
//   onChange = () => {},
// }: Partial<ProductFormProps>) => {
//   return (
//     <form className="p-6 rounded-2xl border border-black shadow-[5px_5px_15px_rgba(0,0,0,0.3)]">
//       <h2 className="text-xl font-iceberg mb-6 font-bold pl-8">
//         Product Details
//       </h2>

//       {/* Header */}
//       <div className="grid grid-cols-12 gap-3 font-iceberg text-lg w-full">
//         <div className="col-span-5">Product Name</div>
//         <div className="col-span-2">Sub</div>
//         <div className="col-span-2">Price</div>
//         <div className="col-span-2">Tax %</div>
//         <div className="col-span-1"></div>
//       </div>

//       {/* Product Rows */}
//       {products?.map((product, index) => (
//         <div
//           key={index}
//           className="grid grid-cols-12 items-center gap-3 mt-3 font-sanchez text-sm"
//         >
//           <input
//             value={product.productName}
//             onChange={(e) =>
//               onChange(index, "productName", e.target.value)
//             }
//             placeholder="Product Name"
//             className="col-span-5 border-2 border-black rounded-md px-3 py-2"
//           />

//           <select
//             value={product.sub}
//             onChange={(e) => onChange(index, "sub", e.target.value)}
//             className="col-span-2 border-2 border-black rounded-md px-3 py-2"
//           >
//             <option value="1M">1M</option>
//             <option value="2M">2M</option>
//             <option value="6M">6M</option>
//             <option value="1Y">1Y</option>
//           </select>

//           <input
//             type="number"
//             value={product.price}
//             onChange={(e) =>
//               onChange(index, "price", Number(e.target.value))
//             }
//             placeholder="100000"
//             className="col-span-2 border-2 border-black rounded-md px-3 py-2"
//           />

//           <input
//             type="number"
//             value={product.tax}
//             onChange={(e) =>
//               onChange(index, "tax", Number(e.target.value))
//             }
//             placeholder="18"
//             className="col-span-2 border-2 border-black rounded-md px-3 py-2"
//           />

//           <button
//             type="button"
//             onClick={() => onDeleteRow(index)}
//             className="col-span-1 bg-orange-500 text-white rounded-md py-2"
//           >
//             ✕
//           </button>
//         </div>
//       ))}

//       {/* Add Row */}
//       <button
//         type="button"
//         onClick={onAddRow}
//         className="mt-6 w-full border-2 border-black rounded-md py-1 bg-gray-200 font-medium font-sanchez"
//       >
//         + Add Product Line
//       </button>
//     </form>
//   );
// };

// export default ProductForm;



// type Product = {
//   productName: string
//   sub: string
//   price: number
//   tax: number
// }

// type Props = {
//   data: Product[]
//   setData: (data: Product[]) => void
// }

// const ProductForm = ({ data, setData }: Props) => {

//   const handleChange = (
//     index: number,
//     field: keyof Product,
//     value: string | number
//   ) => {
//     const updated = [...data]
//     updated[index][field] = value as never
//     setData(updated)
//   }

//   const addRow = () => {
//     setData([
//       ...data,
//       { productName: "", sub: "1M", price: 0, tax: 18 }
//     ])
//   }

//   const deleteRow = (index: number) => {
//     setData(data.filter((_, i) => i !== index))
//   }

//   return (
//     <form className="p-6 rounded-2xl border border-black shadow-[5px_5px_15px_rgba(0,0,0,0.3)]">

//       <h2 className="text-xl font-iceberg mb-6 font-bold pl-8">
//         Product Details
//       </h2>

//       <div className="grid grid-cols-12 gap-3 font-iceberg text-lg w-full">
//         <div className="col-span-5">Product Name</div>
//         <div className="col-span-2">Sub</div>
//         <div className="col-span-2">Price</div>
//         <div className="col-span-2">Tax %</div>
//         <div className="col-span-1"></div>
//       </div>

//       {data.map((product, index) => (
//         <div
//           key={index}
//           className="grid grid-cols-12 items-center gap-3 mt-3 font-sanchez text-sm"
//         >

//           <input
//             value={product.productName}
//             onChange={(e)=>handleChange(index,"productName",e.target.value)}
//             className="col-span-5 border-2 border-black rounded-md px-3 py-2"
//           />

//           <select
//             value={product.sub}
//             onChange={(e)=>handleChange(index,"sub",e.target.value)}
//             className="col-span-2 border-2 border-black rounded-md px-3 py-2"
//           >
//             <option value="1M">1M</option>
//             <option value="2M">2M</option>
//             <option value="6M">6M</option>
//             <option value="1Y">1Y</option>
//           </select>

//           <input
//             type="number"
//             value={product.price}
//             onChange={(e)=>handleChange(index,"price",Number(e.target.value))}
//             className="col-span-2 border-2 border-black rounded-md px-3 py-2"
//           />

//           <input
//             type="number"
//             value={product.tax}
//             onChange={(e)=>handleChange(index,"tax",Number(e.target.value))}
//             className="col-span-2 border-2 border-black rounded-md px-3 py-2"
//           />

//           <button
//             type="button"
//             onClick={()=>deleteRow(index)}
//             className="col-span-1 bg-orange-500 text-white rounded-md py-2"
//           >
//             ✕
//           </button>

//         </div>

//       ))}
//        {data.map((product, index) => (
//         <div
//           key={index}
//           className="grid grid-cols-12 items-center gap-3 mt-3 font-sanchez text-sm"
//         >

//           <input
//             value={product.productName}
//             onChange={(e)=>handleChange(index,"productName",e.target.value)}
//             className="col-span-5 border-2 border-black rounded-md px-3 py-2"
//           />

//           <select
//             value={product.sub}
//             onChange={(e)=>handleChange(index,"sub",e.target.value)}
//             className="col-span-2 border-2 border-black rounded-md px-3 py-2"
//           >
//             <option value="1M">1M</option>
//             <option value="2M">2M</option>
//             <option value="6M">6M</option>
//             <option value="1Y">1Y</option>
//           </select>

//           <input
//             type="number"
//             value={product.price}
//             onChange={(e)=>handleChange(index,"price",Number(e.target.value))}
//             className="col-span-2 border-2 border-black rounded-md px-3 py-2"
//           />

//           <input
//             type="number"
//             value={product.tax}
//             onChange={(e)=>handleChange(index,"tax",Number(e.target.value))}
//             className="col-span-2 border-2 border-black rounded-md px-3 py-2"
//           />

//           <button
//             type="button"
//             onClick={()=>deleteRow(index)}
//             className="col-span-1 bg-orange-500 text-white rounded-md py-2"
//           >
//             ✕
//           </button>

//         </div>

//       ))}

//       <button
//         type="button"
//         onClick={addRow}
//         className="mt-6 w-full border-2 border-black rounded-md py-1 bg-gray-200"
//       >
//         + Add Service Line
//       </button>

//     </form>
//   )
// }

// export default ProductForm








// type Product = {
//   productName: string
//   sub: string
//   price: number
//   tax: number
// }

// type Props = {
//   data: Product[]
//   setData: (data: Product[]) => void
// }

// const ProductForm = ({ data, setData }: Props) => {

//   const handleChange = (
//     index: number,
//     field: keyof Product,
//     value: string | number
//   ) => {
//     const updated = [...data]
//     updated[index][field] = value as never
//     setData(updated)
//   }

//   const deleteRow = (index: number) => {
//     const updated = data.filter((_, i) => i !== index)
//     setData(updated)
//   }



//   return (
//     <form className="p-6 rounded-2xl border border-black shadow-[5px_5px_15px_rgba(0,0,0,0.3)]">

//       <h2 className="text-xl font-iceberg mb-6 font-bold pl-8">
//         Product Details
//       </h2>

//       <div className="grid grid-cols-12 gap-3 font-iceberg text-lg w-full">
//         <div className="col-span-5">Product Name</div>
//         <div className="col-span-2">Sub</div>
//         <div className="col-span-2">Price</div>
//         <div className="col-span-2">Tax %</div>
//       </div>

//       {/* ROW 1 */}

//       <div className="grid grid-cols-12 items-center gap-3 mt-3">

//         <input
//           value={data[0]?.productName || ""}
//           onChange={(e) => handleChange(0, "productName", e.target.value)}
//           className="col-span-5 border-2 border-black rounded-md px-3 py-2"
//         />

//         <select
//           value={data[0]?.sub || "1M"}
//           onChange={(e) => handleChange(0, "sub", e.target.value)}
//           className="col-span-2 border-2 border-black rounded-md px-3 py-2"
//         >
//           <option value="1M">1M</option>
//           <option value="2M">2M</option>
//           <option value="6M">6M</option>
//           <option value="1Y">1Y</option>
//         </select>

//         <input
//           type="number"
//           value={data[0]?.price || 0}
//           onChange={(e) => handleChange(0, "price", Number(e.target.value))}
//           className="col-span-2 border-2 border-black rounded-md px-3 py-2"
//         />

//         <input
//           type="number"
//           value={data[0]?.tax || 18}
//           onChange={(e) => handleChange(0, "tax", Number(e.target.value))}
//           className="col-span-2 border-2 border-black rounded-md px-3 py-2"
//         />

//       </div>

//       {/* ROW 2 */}

//       <div className="grid grid-cols-12 items-center gap-3 mt-3">

//         <input
//           value={data[1]?.productName || ""}
//           onChange={(e) => handleChange(1, "productName", e.target.value)}
//           className="col-span-5 border-2 border-black rounded-md px-3 py-2"
//         />

//         <select
//           value={data[1]?.sub || "1M"}
//           onChange={(e) => handleChange(1, "sub", e.target.value)}
//           className="col-span-2 border-2 border-black rounded-md px-3 py-2"
//         >
//           <option value="1M">1M</option>
//           <option value="2M">2M</option>
//           <option value="6M">6M</option>
//           <option value="1Y">1Y</option>
//         </select>

//         <input
//           type="number"
//           value={data[1]?.price || 0}
//           onChange={(e) => handleChange(1, "price", Number(e.target.value))}
//           className="col-span-2 border-2 border-black rounded-md px-3 py-2"
//         />

//         <input
//           type="number"
//           value={data[1]?.tax || 18}
//           onChange={(e) => handleChange(1, "tax", Number(e.target.value))}
//           className="col-span-2 border-2 border-black rounded-md px-3 py-2"
//         />
//  <button
//     type="button"
//     onClick={() => deleteRow(index)}
//     className="col-span-1 bg-orange-500 text-white rounded-md py-2"
//   >
//     ✕
//   </button>

//       </div>
//       <button
//         type="button"

//         className="mt-6 w-full border-2 border-black rounded-md py-1 bg-gray-200 font-medium font-sanchez"
//       >
//         + Add Service Line
//       </button>

//     </form>
//   )
// }

// export default ProductForm

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

  const handleChange = (
    index: number,
    field: keyof Product,
    value: string | number
  ) => {
    const updated = [...data]
    updated[index][field] = value as never
    setData(updated)
  }

  const deleteRow = (index: number) => {
    const updated = data.filter((_, i) => i !== index)
    setData(updated)
  }

  const addRow = () => {
    setData([
      ...data,
      { productName: "", sub: "1M", price: 0, tax: 18 }
    ])
  }

  return (
    <form className="p-6 rounded-2xl border border-black shadow-[5px_5px_15px_rgba(0,0,0,0.3)]">

      <h2 className="text-xl font-iceberg mb-6 font-bold pl-8">
        Product Details
      </h2>

      {/* Header */}
      <div className="grid grid-cols-12 gap-3 font-iceberg text-lg w-full">
        <div className="col-span-5">Product Name</div>
        <div className="col-span-2">Sub</div>
        <div className="col-span-2">Price</div>
        <div className="col-span-2">Tax %</div>
        <div className="col-span-1"></div>
      </div>

      {/* Rows */}
      {data.map((product, index) => (
        <div
          key={index}
          className="grid grid-cols-12 items-center gap-3 mt-3"
        >

          <input
            value={product.productName}
            placeholder={
              index === 0
                ? "Report Management Software"
                : "Hall Booking software"
            }
            onChange={(e) =>
              handleChange(index, "productName", e.target.value)
            }
            className="col-span-5 border-2 border-black rounded-md px-3 py-2"
          />

          <select
            value={product.sub}
            onChange={(e) =>
              handleChange(index, "sub", e.target.value)
            }
            className="col-span-2 border-2 border-black rounded-md px-3 py-2"
          >
            <option value="1M">1M</option>
            <option value="2M">2M</option>
            <option value="6M">6M</option>
            <option value="1Y">1Y</option>
          </select>

          <input
            type="number"
            value={product.price}
            onChange={(e) =>
              handleChange(index, "price", Number(e.target.value))
            }
            className="col-span-2 border-2 border-black rounded-md px-3 py-2"
          />

          <input
            type="number"
            value={product.tax}
            onChange={(e) =>
              handleChange(index, "tax", Number(e.target.value))
            }
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

      {/* Add Row Button */}
      <button
        type="button"
        onClick={addRow}
        className="mt-6 w-full border-2 border-black rounded-md py-1 bg-gray-200 font-medium font-sanchez"
      >
        + Add Service Line
      </button>

    </form>
  )
}

export default ProductForm