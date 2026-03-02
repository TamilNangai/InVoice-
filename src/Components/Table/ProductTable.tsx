import BaseTable from "./BaseTable";

const ProductTable = () => {
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
    ];

    return (
        <div className="w-[100%] mt-5 bg-white shadow-md rounded-xl overflow-hidden border border-black">

            <BaseTable variant="grid">
                <BaseTable.Header>
                    <BaseTable.Row>
                        <BaseTable.HeadCell>Product Details</BaseTable.HeadCell>
                        <BaseTable.HeadCell>Product ID</BaseTable.HeadCell>
                        <BaseTable.HeadCell>Max Price</BaseTable.HeadCell>
                        <BaseTable.HeadCell>Min Price</BaseTable.HeadCell>
                    </BaseTable.Row>
                </BaseTable.Header>

                <BaseTable.Body>
                    {products.map((item, index) => (
                        <BaseTable.Row key={index}>
                            <BaseTable.Cell>
                                <div className="font-medium text-gray-800">
                                    {item.name}
                                </div>
                                <div className="text-xs text-gray-500">
                                    {item.type}
                                </div>
                            </BaseTable.Cell>

                            <BaseTable.Cell>{item.id}</BaseTable.Cell>
                            <BaseTable.Cell>{item.max}</BaseTable.Cell>
                            <BaseTable.Cell>{item.min}</BaseTable.Cell>
                        </BaseTable.Row>
                    ))}
                </BaseTable.Body>
            </BaseTable>
            <div className="flex justify-between border-x border-b border-black items-center px-4 py-3  text-sm">
                <div>Showing 1 to 6 of 200 Results</div>

                <div className="flex gap-2">
                    <button className="px-3 py-1 border border-black rounded bg-gray-200">
                        &lt;
                    </button>
                    <button className="px-3 py-1 border border-black rounded bg-gray-200">
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductTable;
