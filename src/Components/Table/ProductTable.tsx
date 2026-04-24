// import { useState, useEffect } from "react"
// import BaseTable from "./BaseTable"
// import { getProducts, Product } from "@/utils/getProduct"

// const ProductTable = () => {

//     const [currentPage, setCurrentPage] = useState(1)
//     const [products, setProducts] = useState<Product[]>([])

//     const rowsPerPage = 6

//     const fetchProducts = async () => {
//         const data = await getProducts()
//         setProducts(data)
//     }

//     useEffect(() => {
//         fetchProducts()
//     }, [])



//     const totalPages = Math.ceil(products.length / rowsPerPage)
//     const startIndex = (currentPage - 1) * rowsPerPage

//     const currentRows = products.slice(
//         startIndex,
//         startIndex + rowsPerPage
//     )

//     return (
//         <div className="w-full mt-3 bg-white shadow-md rounded-xl overflow-hidden border border-black">

//   {/* Table Wrapper (IMPORTANT) */}
//   <div className="w-full overflow-x-auto">

//     <BaseTable variant="grid" >

//       <BaseTable.Header>
//         <BaseTable.Row>

//           <BaseTable.HeadCell>
//             <div className="font-iceberg xl:text-2xl sm:text-lg md:text-[20px] font-semibold">
//               Product Details
//             </div>
//           </BaseTable.HeadCell>

//           <BaseTable.HeadCell>
//             <div className="font-iceberg xl:text-2xl sm:text-lg md:text-[20px]">
//               Product ID
//             </div>
//           </BaseTable.HeadCell>

//           <BaseTable.HeadCell>
//             <div className="font-iceberg xl:text-2xl sm:text-lg md:text-[20px]">
//               Max Price
//             </div>
//           </BaseTable.HeadCell>

//           <BaseTable.HeadCell>
//             <div className="font-iceberg xl:text-2xl sm:text-lg md:text-[20px]">
//               Min Price
//             </div>
//           </BaseTable.HeadCell>

//         </BaseTable.Row>
//       </BaseTable.Header>

//       <BaseTable.Body>
//         {currentRows.map((item) => (
//           <BaseTable.Row key={item.invoiceId}>

//             <BaseTable.Cell>
//               <div className="font-iceberg xl:text-xl sm:text-base md:text-lg text-gray-800">
//                 {item.name}
//               </div>

//               <div className="xl:text-md sm:text-xs font-sanchez text-gray-500">
//                 {item.description}
//               </div>
//             </BaseTable.Cell>

//             <BaseTable.Cell>
//               <div className="xl:text-[15px] sm:text-xs text-center font-sanchez">
//                 {item.invoiceId}
//               </div>
//             </BaseTable.Cell>

//             <BaseTable.Cell>
//               <div className="xl:text-lg sm:text-xs text-center font-sanchez">
//                 ₹{item.maxprice}
//               </div>
//             </BaseTable.Cell>

//             <BaseTable.Cell>
//               <div className="xl:text-lg sm:text-xs text-center font-sanchez">
//                 ₹{item.minprice}
//               </div>
//             </BaseTable.Cell>

//           </BaseTable.Row>
//         ))}
//       </BaseTable.Body>

//     </BaseTable>
//   </div>

//   {/* Pagination */}
//   <div className="
//     flex flex-col sm:flex-row
//     justify-between items-center
//     gap-3
//     border-x border-b border-black
//     px-4 py-3
//   ">

//     <div className="font-sanchez text-sm sm:text-base text-gray-600 text-center sm:text-left">
//       Showing {startIndex + 1} to{" "}
//       {Math.min(startIndex + rowsPerPage, products.length)} of{" "}
//       {products.length} Results
//     </div>

//     <div className="flex gap-2">

//       <button
//         onClick={() =>
//           setCurrentPage((prev) =>
//             prev > 1 ? prev - 1 : prev
//           )
//         }
//         disabled={currentPage === 1}
//         className="px-3 py-1 border border-black rounded bg-gray-200 disabled:opacity-50"
//       >
//         &lt;
//       </button>

//       <button
//         onClick={() =>
//           setCurrentPage((prev) =>
//             prev < totalPages ? prev + 1 : prev
//           )
//         }
//         disabled={currentPage === totalPages}
//         className="px-3 py-1 border border-black rounded bg-gray-200 disabled:opacity-50"
//       >
//         &gt;
//       </button>

//     </div>
//   </div>

// </div>
//     )
// }

// export default ProductTable


import { useState, useEffect } from "react"
import BaseTable from "./BaseTable"
import { getProducts, Product } from "@/utils/getProduct"

const ProductTable = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const [products, setProducts] = useState<Product[]>([])

  const rowsPerPage = 6

  const fetchProducts = async () => {
    const data = await getProducts()

    // ✅ FILTER: remove completely empty products
    const filteredData = data.filter((item: Product) => {
      return (
        item.name?.trim() ||
        item.description?.trim() ||
        item.maxprice ||
        item.minprice
      )
    })

    setProducts(filteredData)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  // ✅ Helper to handle empty values
  const safeValue = (val: any) => {
    if (val === null || val === undefined) return "-"
    if (typeof val === "string" && val.trim() === "") return "-"
    return val
  }

  const totalPages = Math.ceil(products.length / rowsPerPage)
  const startIndex = (currentPage - 1) * rowsPerPage

  const currentRows = products.slice(
    startIndex,
    startIndex + rowsPerPage
  )

  return (
    <div className="w-full mt-3 bg-white shadow-md rounded-xl overflow-hidden border border-black">

      {/* Table Wrapper */}
      <div className="w-full overflow-x-auto">

        <BaseTable variant="grid">

          <BaseTable.Header>
            <BaseTable.Row>

              <BaseTable.HeadCell>
                <div className="font-iceberg xl:text-2xl sm:text-lg md:text-[20px] font-semibold">
                  Product Details
                </div>
              </BaseTable.HeadCell>

              <BaseTable.HeadCell>
                <div className="font-iceberg xl:text-2xl sm:text-lg md:text-[20px]">
                  Product ID
                </div>
              </BaseTable.HeadCell>

              <BaseTable.HeadCell>
                <div className="font-iceberg xl:text-2xl sm:text-lg md:text-[20px]">
                  Max Price
                </div>
              </BaseTable.HeadCell>

              <BaseTable.HeadCell>
                <div className="font-iceberg xl:text-2xl sm:text-lg md:text-[20px]">
                  Min Price
                </div>
              </BaseTable.HeadCell>

            </BaseTable.Row>
          </BaseTable.Header>

          <BaseTable.Body>

            {currentRows.length === 0 ? (
              <BaseTable.Row>
                <BaseTable.Cell>
                  <div className="text-center w-full py-4">No Data Found</div>
                </BaseTable.Cell>
              </BaseTable.Row>
            ) : (
              currentRows.map((item) => (
                <BaseTable.Row key={item.invoiceId}>

                  <BaseTable.Cell>
                    <div className="font-iceberg xl:text-xl sm:text-base md:text-lg text-gray-800">
                      {safeValue(item.name)}
                    </div>

                    <div className="xl:text-md sm:text-xs font-sanchez text-gray-500">
                      {safeValue(item.description)}
                    </div>
                  </BaseTable.Cell>

                  <BaseTable.Cell>
                    <div className="xl:text-[15px] sm:text-xs text-center font-sanchez">
                      {safeValue(item.invoiceId)}
                    </div>
                  </BaseTable.Cell>

                  <BaseTable.Cell>
                    <div className="xl:text-lg sm:text-xs text-center font-sanchez">
                      {item.maxprice ? `₹${item.maxprice}` : "-"}
                    </div>
                  </BaseTable.Cell>

                  <BaseTable.Cell>
                    <div className="xl:text-lg sm:text-xs text-center font-sanchez">
                      {item.minprice ? `₹${item.minprice}` : "-"}
                    </div>
                  </BaseTable.Cell>

                </BaseTable.Row>
              ))
            )}

          </BaseTable.Body>

        </BaseTable>
      </div>

      {/* Pagination */}
      <div className="
        flex flex-col sm:flex-row
        justify-between items-center
        gap-3
        border-x border-b border-black
        px-4 py-3
      ">

        <div className="font-sanchez text-sm sm:text-base text-gray-600 text-center sm:text-left">
          Showing {products.length === 0 ? 0 : startIndex + 1} to{" "}
          {Math.min(startIndex + rowsPerPage, products.length)} of{" "}
          {products.length} Results
        </div>

        <div className="flex gap-2">

          <button
            onClick={() =>
              setCurrentPage((prev) =>
                prev > 1 ? prev - 1 : prev
              )
            }
            disabled={currentPage === 1}
            className="px-3 py-1 border border-black rounded bg-gray-200 disabled:opacity-50"
          >
            &lt;
          </button>

          <button
            onClick={() =>
              setCurrentPage((prev) =>
                prev < totalPages ? prev + 1 : prev
              )
            }
            disabled={currentPage === totalPages || totalPages === 0}
            className="px-3 py-1 border border-black rounded bg-gray-200 disabled:opacity-50"
          >
            &gt;
          </button>

        </div>
      </div>

    </div>
  )
}

export default ProductTable