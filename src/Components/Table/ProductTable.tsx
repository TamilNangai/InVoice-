import { useState, useEffect } from "react"
import BaseTable from "./BaseTable"
import { getProducts, Product } from "@/utils/getProduct"

const ProductTable = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [products, setProducts] = useState<Product[]>([])

    const rowsPerPage = 6

    const fetchProducts = async () => {
        const data = await getProducts()
        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])



    const totalPages = Math.ceil(products.length / rowsPerPage)
    const startIndex = (currentPage - 1) * rowsPerPage

    const currentRows = products.slice(
        startIndex,
        startIndex + rowsPerPage
    )

    return (
        <div className="w-[100%] mt-3 bg-white shadow-md rounded-xl overflow-hidden border border-black">

            <BaseTable variant="grid">

                <BaseTable.Header>
                    <BaseTable.Row>
                        <BaseTable.HeadCell>
                            <div className="font-iceberg font-extralight text-[28px]">
                                Product Details
                            </div>
                        </BaseTable.HeadCell>

                        <BaseTable.HeadCell>
                            <div className="font-iceberg font-extralight text-[28px]">
                                Category
                            </div>
                        </BaseTable.HeadCell>

                        <BaseTable.HeadCell>
                            <div className="font-iceberg font-extralight text-[28px]">
                                Price
                            </div>
                        </BaseTable.HeadCell>

                        <BaseTable.HeadCell>
                            <div className="font-iceberg font-extralight text-[28px]">
                                Product ID
                            </div>
                        </BaseTable.HeadCell>
                    </BaseTable.Row>
                </BaseTable.Header>

                <BaseTable.Body>

                    {currentRows.map((item) => (

                        <BaseTable.Row key={item.id}>

                            <BaseTable.Cell>
                                <div className="font-iceberg text-[20px] text-gray-800">
                                    {item.name}
                                </div>

                                <div className="text-[15px] font-sanchez text-gray-500">
                                    {item.description}
                                </div>
                            </BaseTable.Cell>

                            <BaseTable.Cell>
                                <div className="text-[18px] text-center font-sanchez">
                                    {item.category}
                                </div>
                            </BaseTable.Cell>

                            <BaseTable.Cell>
                                <div className="text-[18px] text-center font-sanchez">
                                    ₹ {item.price}
                                </div>
                            </BaseTable.Cell>

                            <BaseTable.Cell>
                                <div className="text-[18px] text-center font-sanchez">
                                    {item.id}
                                </div>
                            </BaseTable.Cell>

                        </BaseTable.Row>

                    ))}

                </BaseTable.Body>

            </BaseTable>

            <div className="flex justify-between border-x border-b border-black items-center px-4 py-3 text-sm">

                <div className="font-sanchez text-[18px] text-gray-600">
                    Showing {startIndex + 1} to{" "}
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
                        disabled={currentPage === totalPages}
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
