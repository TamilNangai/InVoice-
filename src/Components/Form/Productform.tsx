// // // import React, { useState } from "react"

// // // type Product = {
// // //   productName: string
// // //   sub?: string
// // //   price: number
// // //   tax: number
// // // }

// // // type Props = {
// // //   data: Product[]
// // //   setData: (data: Product[]) => void
// // //   title?: string
// // //   nameLabel?: string
// // //   addButton?: string
// // //   showSub?: boolean
// // // }

// // // const ProductForm: React.FC<Props> = ({
// // //   data,
// // //   setData,
// // //   title = "Service Details",
// // //   nameLabel = "Service Name",
// // //   addButton = "+ Add Service Line",
// // //   showSub = false
// // // }) => {

// // //   const handleChange = (
// // //     index: number,
// // //     field: keyof Product,
// // //     value: string | number
// // //   ) => {

// // //     const updated = [...data]

// // //     updated[index] = {
// // //       ...updated[index],
// // //       [field]: value
// // //     }

// // //     setData(updated)
// // //   }

// // //   const addRow = () => {

// // //     setData([
// // //       ...data,
// // //       {
// // //         productName: "",
// // //         sub: "",
// // //         price: 0,
// // //         tax: 0
// // //       }
// // //     ])
// // //   }

// // //   const deleteRow = (index: number) => {

// // //     // Prevent deleting last row
// // //     if (data.length === 1) return

// // //     const updated = data.filter((_, i) => i !== index)

// // //     setData(updated)
// // //   }


// // //   const [errors, setErrors] = useState<any>({});

// // //   const validate = (name: string, value: string, index: number) => {

// // //     let message = "";

// // //     if (!value) {
// // //       message = "This field is required";
// // //     }

// // //     if (name === "price") {
// // //       const num = Number(value);

// // //       if (num < 0) {
// // //         message = "Price cannot be negative";
// // //       }
// // //     }

// // //     if (name === "tax") {
// // //       const num = Number(value);

// // //       if (num < 0) {
// // //         message = "Tax cannot be negative";
// // //       }

// // //       if (num > 100) {
// // //         message = "Tax cannot exceed 100%";
// // //       }
// // //     }

// // //     setErrors((prev: any) => ({
// // //       ...prev,
// // //       [`${name}-${index}`]: message
// // //     }));
// // //   };

// // //   const handleBlur = (
// // //     e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>,
// // //     index: number
// // //   ) => {

// // //     const { name, value } = e.target

// // //     validate(name, value, index)

// // //   }


// // //   return (

// // //     <div className="xl:p-6 sm:p-10 sm:-4 rounded-2xl border border-black shadow-[5px_5px_15px_rgba(0,0,0,0.2)] bg-white">

// // //       <h2 className="xl:text-xl font-iceberg mb-6 font-bold pl-2">
// // //         {title}
// // //       </h2>

// // //       {/* Header */}

// // //       <div className="flex xl:gap-3 sm:gap-5  font-iceberg xl:text-lg  sm:text-[14px]">

// // //         <div className="">
// // //           {nameLabel}
// // //         </div>

// // //         <div className="">
// // //           Sub
// // //         </div>

// // //         <div className="">
// // //           Price
// // //         </div>

// // //         <div className="">
// // //           Tax %
// // //         </div>

// // //         <div className=""></div>

// // //       </div>

// // //       {/* Rows */}

// // //       {data.map((row, index) => (
// // //         <div key={index}>

// // //           <div

// // //             className={`grid ${showSub ? "grid-cols-12" : "grid-cols-10"} items-center gap-3 mt-3 font-sanchez text-sm`}
// // //           >
// // //             {/* productName*/}

// // //             <input
// // //               name="productName"
// // //               placeholder={nameLabel}
// // //               value={row.productName}
// // //               required
// // //               onChange={(e) =>
// // //                 handleChange(index, "productName", e.target.value)
// // //               }
// // //               onBlur={(e) => handleBlur(e, index)}
// // //               className="col-span-5 border-2 border-black rounded-md px-3 py-2 sm:w-24"
// // //             />

// // //             {/* Subscription column only for product */}

// // //             {showSub && (

// // //               <select
// // //                 value={row.sub || ""}
// // //                 required
// // //                 name="sub"
// // //                 onBlur={(e) => handleBlur(e, index)}
// // //                 onChange={(e) =>
// // //                   handleChange(index, "sub", e.target.value)
// // //                 }
// // //                 className="col-span-2 border-2 border-black rounded-md sm:px-3 px-2 py-2 sm:w-9"
// // //               >
// // //                 <option value="">Select</option>
// // //                 <option value="1M">1M</option>
// // //                 <option value="2M">2M</option>
// // //                 <option value="6M">6M</option>
// // //                 <option value="1Y">1Y</option>
// // //               </select>

// // //             )}

// // //             {/* Price */}

// // //             <input
// // //               name="price"
// // //               type="number"
// // //               placeholder="10000"
// // //               value={row.price}
// // //               required
// // //               onChange={(e) =>
// // //                 handleChange(index, "price", Number(e.target.value))
// // //               }
// // //               onBlur={(e) => handleBlur(e, index)}
// // //               className="col-span-2 border-2 border-black rounded-md px-3 py-2 sm:w-10"
// // //             />

// // //             {/* Tax */}




// // //             <input
// // //               name="tax"
// // //               type="number"
// // //               placeholder="18"
// // //               value={row.tax}
// // //               required
// // //               onChange={(e) =>
// // //                 handleChange(index, "tax", Number(e.target.value))
// // //               }
// // //               onBlur={(e) => handleBlur(e, index)}
// // //               className="col-span-2 border-2 border-black rounded-md px-3 py-2 sm:w-9"
// // //             />




// // //             {/* Delete */}

// // //             <button
// // //               type="button"
// // //               onClick={() => deleteRow(index)}
// // //               disabled={data.length === 1}
// // //               className={`col-span-1 text-white rounded-md py-2 sm:w-7
// // //             ${data.length === 1
// // //                   ? "bg-gray-400 cursor-not-allowed"
// // //                   : "bg-orange-500"
// // //                 }`}
// // //             >
// // //               ✕
// // //             </button>

// // //           </div>
// // //         </div>

// // //       ))}

// // //       {/* Add Row */}

// // //       <button
// // //         type="button"
// // //         onClick={addRow}
// // //         className="mt-6 w-full border-2 border-black rounded-md py-2 bg-gray-200 font-medium font-sanchez sm:w-[60%] sm:text-[12px] sm:mx-10"
// // //       >
// // //         {addButton}
// // //       </button>

// // //     </div>

// // //   )
// // // }

// // // export default ProductForm


// // import React, { useState } from "react"

// // type Product = {
// //   productName: string
// //   sub?: string
// //   price: number
// //   tax: number
// // }

// // type Props = {
// //   data: Product[]
// //   setData: (data: Product[]) => void
// //   title?: string
// //   nameLabel?: string
// //   addButton?: string
// //   showSub?: boolean
// // }

// // const ProductForm: React.FC<Props> = ({
// //   data,
// //   setData,
// //   title = "Service Details",
// //   nameLabel = "Service Name",
// //   addButton = "+ Add Service Line",
// //   showSub = false
// // }) => {

// //   const handleChange = (
// //     index: number,
// //     field: keyof Product,
// //     value: string | number
// //   ) => {
// //     const updated = [...data]
// //     updated[index] = { ...updated[index], [field]: value }
// //     setData(updated)
// //   }

// //   const addRow = () => {
// //     setData([
// //       ...data,
// //       { productName: "", sub: "", price: 0, tax: 0 }
// //     ])
// //   }

// //   const deleteRow = (index: number) => {
// //     if (data.length === 1) return
// //     setData(data.filter((_, i) => i !== index))
// //   }

// //   const [errors, setErrors] = useState<any>({})

// //   const validate = (name: string, value: string, index: number) => {
// //     let message = ""

// //     if (!value) message = "Required"

// //     if (name === "price" && Number(value) < 0) message = "Invalid"
// //     if (name === "tax") {
// //       const num = Number(value)
// //       if (num < 0) message = "Invalid"
// //       if (num > 100) message = "Max 100%"
// //     }

// //     setErrors((prev: any) => ({
// //       ...prev,
// //       [`${name}-${index}`]: message
// //     }))
// //   }

// //   const handleBlur = (
// //     e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>,
// //     index: number
// //   ) => {
// //     validate(e.target.name, e.target.value, index)
// //   }

// //   return (
// //     <div className="p-3 md:p-4 xl:p-6 rounded-2xl border border-black shadow bg-white">

// //       <h2 className="pl-8 text-[16px] md:text-sm xl:text-xl font-bold font-iceberg mb-3 xl:mb-5">
// //         {title}
// //       </h2>

// //       <div className="flex gap-7 xl:gap-4  text-[14px] md:text-xs xl:text-sm font-medium font-iceberg">
// //         <div>{nameLabel}</div>
// //         <div>Sub</div>
// //         <div>Price</div>
// //         <div>Tax %</div>
// //         <div></div>
// //       </div>

// //       {data.map((row, index) => (
// //         <div key={index}>

// //           <div
// //             className={`grid ${showSub ? "grid-cols-12" : "grid-cols-10"} items-center gap-2 md:gap-3 mt-2 xl:mt-3`}
// //           >

// //             <input
// //               name="productName"
// //               value={row.productName}
// //               placeholder={nameLabel}
// //               onChange={(e) =>
// //                 handleChange(index, "productName", e.target.value)
// //               }
// //               onBlur={(e) => handleBlur(e, index)}
// //               className="col-span-5 border border-black rounded px-2 md:px-3 py-1 md:py-2 text-[10px] md:text-xs xl:text-sm"
// //             />

// //             {showSub && (
// //               <select
// //                 value={row.sub || ""}
// //                 name="sub"
// //                 onChange={(e) =>
// //                   handleChange(index, "sub", e.target.value)
// //                 }
// //                 onBlur={(e) => handleBlur(e, index)}
// //                 className="col-span-2 border border-black rounded px-1 md:px-2 py-1 md:py-2 text-[10px] md:text-xs xl:text-sm"
// //               >
// //                 <option value="">Select</option>
// //                 <option value="1M">1M</option>
// //                 <option value="2M">2M</option>
// //                 <option value="6M">6M</option>
// //                 <option value="1Y">1Y</option>
// //               </select>
// //             )}

// //             <input
// //               name="price"
// //               type="number"
// //               value={row.price}
// //               placeholder="10000"
// //               onChange={(e) =>
// //                 handleChange(index, "price", Number(e.target.value))
// //               }
// //               onBlur={(e) => handleBlur(e, index)}
// //               className="col-span-2 border border-black rounded px-2 md:px-3 py-1 md:py-2 text-[10px] md:text-xs xl:text-sm"
// //             />

// //             <input
// //               name="tax"
// //               type="number"
// //               value={row.tax}
// //               placeholder="18"
// //               onChange={(e) =>
// //                 handleChange(index, "tax", Number(e.target.value))
// //               }
// //               onBlur={(e) => handleBlur(e, index)}
// //               className="col-span-2 border border-black rounded px-2 md:px-3 py-1 md:py-2 text-[10px] md:text-xs xl:text-sm"
// //             />

// //             <button
// //               type="button"
// //               onClick={() => deleteRow(index)}
// //               disabled={data.length === 1}
// //               className={`col-span-1 text-white rounded py-1 md:py-2 text-[10px] md:text-xs
// //               ${data.length === 1
// //                   ? "bg-gray-400"
// //                   : "bg-orange-500"
// //                 }`}
// //             >
// //               ✕
// //             </button>

// //           </div>

// //         </div>
// //       ))}

// //       <button
// //         type="button"
// //         onClick={addRow}
// //         className="mt-3 md:mt-4 xl:mt-6 w-full border border-black rounded py-1 md:py-2 text-[10px] md:text-xs xl:text-sm bg-gray-200"
// //       >
// //         {addButton}
// //       </button>

// //     </div>
// //   )
// // }

// // export default ProductForm


// import React,{useState} from "react"

// type Product = {
//   productName: string
//   sub?: string
//   price: number
//   tax: number
// }

// type Props = {
//   data: Product[]
//   setData: (data: Product[]) => void
//   title?: string
//   nameLabel?: string
//   addButton?: string
//   showSub?: boolean
// }

// const ProductForm: React.FC<Props> = ({
//   data,
//   setData,
//   title = "Service Details",
//   nameLabel = "Service Name",
//   addButton = "+ Add Service Line",
//   showSub = false
// }) => {

//   const handleChange = (
//     index: number,
//     field: keyof Product,
//     value: string | number
//   ) => {

//     const updated = [...data]

//     updated[index] = {
//       ...updated[index],
//       [field]: value
//     }

//     setData(updated)
//   }

//   const addRow = () => {

//     setData([
//       ...data,
//       {
//         productName: "",
//         sub: "",
//         price: 0,
//         tax: 0
//       }
//     ])
//   }

//   const deleteRow = (index: number) => {

//     // Prevent deleting last row
//     if (data.length === 1) return

//     const updated = data.filter((_, i) => i !== index)

//     setData(updated)
//   }


//   const [errors, setErrors] = useState<any>({});

//   const validate = (name: string, value: string, index: number) => {

//     let message = "";

//     if (!value) {
//       message = "This field is required";
//     }

//     if (name === "price") {
//       const num = Number(value);

//       if (num < 0) {
//         message = "Price cannot be negative";
//       }
//     }

//     if (name === "tax") {
//       const num = Number(value);

//       if (num < 0) {
//         message = "Tax cannot be negative";
//       }

//       if (num > 100) {
//         message = "Tax cannot exceed 100%";
//       }
//     }

//     setErrors((prev: any) => ({
//       ...prev,
//       [`${name}-${index}`]: message
//     }));
//   };

//   const handleBlur = (
//     e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>,
//     index: number
//   ) => {

//     const { name, value } = e.target

//     validate(name, value, index)

//   }


//   return (

//     <div className="p-6 rounded-2xl border border-black shadow-[5px_5px_15px_rgba(0,0,0,0.2)] bg-white">

//       <h2 className="text-xl font-iceberg mb-6 font-bold pl-2">
//         {title}
//       </h2>

//       {/* Header */}

//       <div className={`grid ${showSub ? "grid-cols-12" : "grid-cols-10"} gap-3 font-iceberg text-lg`}>

//         <div className="col-span-5">
//           {nameLabel}
//         </div>

//         {showSub && (
//           <div className="col-span-2">
//             Sub
//           </div>
//         )}

//         <div className="col-span-2">
//           Price
//         </div>

//         <div className="col-span-2">
//           Tax %
//         </div>

//         <div className="col-span-1"></div>

//       </div>

//       {/* Rows */}

//       {data.map((row, index) => (
//         <div key={index}>

//         <div
          
//           className={`grid ${showSub ? "grid-cols-12" : "grid-cols-10"} items-center gap-3 mt-3 font-sanchez text-sm`}
//         >
//           {/* productName*/}

//           <input
//             name="productName"
//             placeholder={nameLabel}
//             value={row.productName}
//             required
//             onChange={(e) =>
//               handleChange(index, "productName", e.target.value)
//             }
//             onBlur={(e) => handleBlur(e, index)}
//             className="col-span-5 border-2 border-black rounded-md px-3 py-2"
//           />
         

//           {/* Subscription column only for product */}

//           {showSub && (

//             <select
//               value={row.sub || ""}
//               required
//               name="sub"
//               onBlur={(e) => handleBlur(e, index)}
//               onChange={(e) =>
//                 handleChange(index, "sub", e.target.value)
//               }
//               className="col-span-2 border-2 border-black rounded-md px-2 py-2"
//             >
//               <option value="">Select</option>
//               <option value="1M">1M</option>
//               <option value="2M">2M</option>
//               <option value="6M">6M</option>
//               <option value="1Y">1Y</option>
//             </select>

//           )}

//           {/* Price */}

         

//           <input
//             name="price"
//             type="number"
//             placeholder="10000"
//             value={row.price}
//             required
//             onChange={(e) =>
//               handleChange(index, "price", Number(e.target.value))
//             }
//             onBlur={(e) => handleBlur(e, index)}
//             className="col-span-2 border-2 border-black rounded-md px-3 py-2"
//           />
          
//           {/* Tax */}

          
                                

//           <input
//             name="tax"
//             type="number"
//             placeholder="18"
//             value={row.tax}
//             required
//             onChange={(e) =>
//               handleChange(index, "tax", Number(e.target.value))
//             }
//             onBlur={(e) => handleBlur(e, index)}
//             className="col-span-2 border-2 border-black rounded-md px-3 py-2"
//           />
                                 



//           {/* Delete */}

//           <button
//             type="button"
//             onClick={() => deleteRow(index)}
//             disabled={data.length === 1}
//             className={`col-span-1 text-white rounded-md py-2
//             ${data.length === 1
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-orange-500"
//               }`}
//           >
//             ✕
//           </button>

//         </div>
//          </div>

//       ))}

//       {/* Add Row */}

//       <button
//         type="button"
//         onClick={addRow}
//         className="mt-6 w-full border-2 border-black rounded-md py-2 bg-gray-200 font-medium font-sanchez"
//       >
//         {addButton}
//       </button>

//     </div>
//   )
// }

// export default ProductForm

import React, { useState } from "react"

type Product = {
  productName: string
  sub?: string
  price: number
  tax: number
}

type Props = {
  data: Product[]
  setData: (data: Product[]) => void
  title?: string
  nameLabel?: string
  addButton?: string
  showSub?: boolean
}

const ProductForm: React.FC<Props> = ({
  data,
  setData,
  title = "Service Details",
  nameLabel = "Service Name",
  addButton = "+ Add Service Line",
  showSub = false
}) => {

  const handleChange = (
    index: number,
    field: keyof Product,
    value: string | number
  ) => {
    const updated = [...data]
    updated[index] = { ...updated[index], [field]: value }
    setData(updated)
  }

  const addRow = () => {
    setData([
      ...data,
      { productName: "", sub: "", price: 0, tax: 0 }
    ])
  }

  const deleteRow = (index: number) => {
    if (data.length === 1) return
    setData(data.filter((_, i) => i !== index))
  }

  const [errors, setErrors] = useState<any>({})

  const validate = (name: string, value: string, index: number) => {
    let message = ""

    if (!value) message = "Required"

    if (name === "price" && Number(value) < 0) {
      message = "Invalid"
    }

    if (name === "tax") {
      const num = Number(value)
      if (num < 0 || num > 100) message = "0–100 only"
    }

    setErrors((prev: any) => ({
      ...prev,
      [`${name}-${index}`]: message
    }))
  }

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>,
    index: number
  ) => {
    const { name, value } = e.target
    validate(name, value, index)
  }

  return (
    <div className="p-3 sm:p-4 md:p-5 xl:p-6 
    rounded-xl md:rounded-2xl 
    border border-black 
    shadow-md md:shadow-lg 
    bg-white">

      <h2 className="pl-8 text-sm sm:text-base md:text-lg xl:text-xl 
      font-iceberg font-bold mb-4 md:mb-6">
        {title}
      </h2>

      <div className={`grid ${showSub ? "grid-cols-12" : "grid-cols-10"} 
      gap-2 md:gap-3 
      text-[11px] sm:text-xs md:text-sm xl:text-base 
      font-iceberg`}>

        <div className="col-span-5">{nameLabel}</div>

        {showSub && <div className="col-span-2">Sub</div>}

        <div className="col-span-2">Price</div>
        <div className="col-span-2">Tax %</div>
        <div className="col-span-1"></div>
      </div>

      {data.map((row, index) => (
        <div key={index}
          className={`grid ${showSub ? "grid-cols-12" : "grid-cols-10"} 
          items-center gap-2 md:gap-3 mt-2 md:mt-3 
          text-[11px] sm:text-xs md:text-sm`}>

          <input
            name="productName"
            value={row.productName}
            placeholder={nameLabel}
            onChange={(e) => handleChange(index, "productName", e.target.value)}
            onBlur={(e) => handleBlur(e, index)}
            className="col-span-5 border border-black 
            rounded-md px-2 py-1 md:px-3 md:py-2"
          />

          {showSub && (
            <select
              value={row.sub || ""}
              name="sub"
              onChange={(e) => handleChange(index, "sub", e.target.value)}
              onBlur={(e) => handleBlur(e, index)}
              className="col-span-2 border border-black 
              rounded-md px-2 md:px-2 py-1 md:py-2"
            >
              <option value="">Select</option>
              <option value="1M">1M</option>
              <option value="2M">2M</option>
              <option value="6M">6M</option>
              <option value="1Y">1Y</option>
            </select>
          )}

          <input
            name="price"
            type="number"
            value={row.price}
            onChange={(e) => handleChange(index, "price", Number(e.target.value))}
            onBlur={(e) => handleBlur(e, index)}
            className="col-span-2 border border-black 
            rounded-md px-2 py-1 md:px-3 md:py-2"
          />

          <input
            name="tax"
            type="number"
            value={row.tax}
            onChange={(e) => handleChange(index, "tax", Number(e.target.value))}
            onBlur={(e) => handleBlur(e, index)}
            className="col-span-2 border border-black 
            rounded-md px-2 py-1 md:px-3 md:py-2"
          />

          <button
            type="button"
            onClick={() => deleteRow(index)}
            disabled={data.length === 1}
            className={`col-span-1 rounded-md 
            text-white text-xs md:text-sm 
            py-1 md:py-2
            ${data.length === 1
                ? "bg-gray-400"
                : "bg-orange-500 hover:bg-orange-600"
              }`}
          >
            ✕
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addRow}
        className="mt-4 md:mt-6 w-full 
        border border-black 
        rounded-md 
        py-1.5 md:py-2 
        text-xs sm:text-sm md:text-base 
        bg-gray-200 hover:bg-gray-300"
      >
        {addButton}
      </button>
    </div>
  )
}

export default ProductForm