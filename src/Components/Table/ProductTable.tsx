import { useState } from "react";
import BaseTable from "./BaseTable";

const ProductTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 6;

    const products = [
        {
            name: "Report Management System",
            type: "Product",
            id: "RMS-DF_2025",
            max: "20 Lakhs",
            min: "25 Lakhs",
        },
        {
            name: "Attendance Management System",
            type: "Product",
            id: "AMS-DF_2025",
            max: "8 Lakhs",
            min: "10 Lakhs",
        },
        {
            name: "Invoice Management System",
            type: "Product",
            id: "IMS-DF_2025",
            max: "4 Lakhs",
            min: "5 Lakhs",
        },
        {
            name: "Study Lalat",
            type: "Service",
            id: "SV-DF_2025",
            max: "Service",
            min: "1000/-",
        },
        {
            name: "Project Sports",
            type: "Service",
            id: "PS-DF_2025",
            max: "Service",
            min: "500/-",
        },
        {
            name: "Digital Marketing Internship",
            type: "Internship • Student • 15 Days",
            id: "DMI-DF_2025",
            max: "Internship",
            min: "3500/-",
        },

        {
            name: "CRM Software",
            type: "Product",
            id: "CRM-DF_2025",
            max: "15 Lakhs",
            min: "18 Lakhs",
        },
        {
            name: "AI Chatbot Service",
            type: "Service",
            id: "AI-DF_2025",
            max: "Service",
            min: "2500/-",
        },
    ];

    const totalPages = Math.ceil(products.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;

    const currentRows = products.slice(
        startIndex,
        startIndex + rowsPerPage
    );

    return (
        <div className="w-[100%] mt-3 bg-white shadow-md rounded-xl overflow-hidden border border-black">
            <BaseTable variant="grid">
                <BaseTable.Header>
                    <BaseTable.Row>
                        <BaseTable.HeadCell><div className="font-iceberg font-extralight text-[28px]">Product Details</div></BaseTable.HeadCell>
                        <BaseTable.HeadCell><div className="font-iceberg font-extralight text-[28px]">Product ID</div></BaseTable.HeadCell>
                        <BaseTable.HeadCell><div className="font-iceberg font-extralight text-[28px]">Max Price</div></BaseTable.HeadCell>
                        <BaseTable.HeadCell><div className="font-iceberg font-extralight text-[28px]">Min Price</div></BaseTable.HeadCell>
                    </BaseTable.Row>
                </BaseTable.Header>

                <BaseTable.Body>
                    {currentRows.map((item, index) => (
                        <BaseTable.Row key={index}>
                            <BaseTable.Cell>
                                <div className="font-iceberg text-[20px] text-gray-800">
                                    {item.name}
                                </div>
                                <div className="text-[15px] font-sanchez text-gray-500">
                                    {item.type}
                                </div>
                            </BaseTable.Cell>

                            <BaseTable.Cell><div className="text-[18px] text-center font-sanchez">{item.id}</div></BaseTable.Cell>
                            <BaseTable.Cell><div className="text-[18px] text-center font-sanchez">{item.max}</div></BaseTable.Cell>
                            <BaseTable.Cell><div className="text-[18px] text-center font-sanchez">{item.min}</div></BaseTable.Cell>
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
    );
};

export default ProductTable;
