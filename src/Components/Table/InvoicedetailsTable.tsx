import BaseTable from "./BaseTable";

const InvoicedetailsTable = () => {
    const invoices = [
        {
            no: "INV-2025-006",
            type: "Internship",
            name: "Hariharan S",
            sub: "HR Internship",
            amount: "₹ 5000/-",
            status: "Paid",
            pending: "₹ 5000/-",
            date: "Dec 28,2025",
        },
        {
            no: "INV-2025-005",
            type: "Product",
            name: "Swetha S",
            sub: "Invoice Management",
            amount: "₹ 100000/-",
            status: "Pending",
            pending: "₹ 100000/-",
            date: "Dec 02,2025",
        },
        {
            no: "INV-2025-004",
            type: "Internship",
            name: "Tamil K",
            sub: "Web Development Internship",
            amount: "₹ 10000/-",
            status: "Over Due",
            pending: "₹ 10000/-",
            date: "Nov 28,2025",
        },
        {
            no: "INV-2025-003",
            type: "Product",
            name: "Akash K",
            sub: "Attendance Management",
            amount: "₹ 200000/-",
            status: "Paid",
            pending: "₹ 200000/-",
            date: "Nov 02,2025",
        },
        {
            no: "INV-2025-002",
            type: "Others",
            name: "Akash K",
            sub: "Some things",
            amount: "₹ 20000/-",
            status: "Pending",
            pending: "₹ 20000/-",
            date: "Oct 28,2025",
        },
        {
            no: "INV-2025-001",
            type: "Internship",
            name: "Swetha S",
            sub: "Digital Marketing Internship",
            amount: "₹ 4000/-",
            status: "Over Due",
            pending: "₹ 4000/-",
            date: "Oct 02,2025",
        },
    ];

    const typeBadge = (type: string) => {
        const base = "px-3 py-1 text-xs rounded-md font-medium";

        switch (type) {
            case "Internship":
                return `${base} bg-blue-500 text-white`;
            case "Product":
                return `${base} bg-green-500 text-white`;
            case "Others":
                return `${base} bg-gray-400 text-white`;
            default:
                return base;
        }
    };

    const statusColor = (status: string) => {
        switch (status) {
            case "Paid":
                return "text-green-500";
            case "Pending":
                return "text-yellow-500";
            case "Over Due":
                return "text-red-500";
            default:
                return "";
        }
    };

    return (
        <div className="max-w-6xl mx-auto mt-10 border-2 border-black rounded-2xl  overflow-hidden">
            <BaseTable variant="grid" >
                <BaseTable.Header>
                    <BaseTable.Row>
                        <BaseTable.HeadCell>Invoice NO</BaseTable.HeadCell>
                        <BaseTable.HeadCell>Type</BaseTable.HeadCell>
                        <BaseTable.HeadCell>Client / Student Name</BaseTable.HeadCell>
                        <BaseTable.HeadCell>Amount</BaseTable.HeadCell>
                        <BaseTable.HeadCell>Status</BaseTable.HeadCell>
                        <BaseTable.HeadCell>Pending</BaseTable.HeadCell>
                        <BaseTable.HeadCell>Date</BaseTable.HeadCell>
                        <BaseTable.HeadCell> </BaseTable.HeadCell>
                    </BaseTable.Row>
                </BaseTable.Header>

                <BaseTable.Body>
                    {invoices.map((item) => (
                        <BaseTable.Row key={item.no}>
                            <BaseTable.Cell>{item.no}</BaseTable.Cell>

                            <BaseTable.Cell>
                                <span className={typeBadge(item.type)}>
                                    {item.type}
                                </span>
                            </BaseTable.Cell>

                            <BaseTable.Cell>
                                <div className="font-medium">{item.name}</div>
                                <div className="text-xs text-gray-600">
                                    {item.sub}
                                </div>
                            </BaseTable.Cell>

                            <BaseTable.Cell>{item.amount}</BaseTable.Cell>

                            <BaseTable.Cell>
                                <span className={`${statusColor(item.status)} font-medium`}>
                                    • {item.status}
                                </span>
                            </BaseTable.Cell>

                            <BaseTable.Cell>{item.pending}</BaseTable.Cell>

                            <BaseTable.Cell>{item.date}</BaseTable.Cell>

                            <BaseTable.Cell>
                                <button className="text-xl font-bold hover:text-gray-700">
                                    ⋮
                                </button>
                            </BaseTable.Cell>
                        </BaseTable.Row>
                    ))}
                </BaseTable.Body>
            </BaseTable>

           
            <div className="flex justify-between items-center px-5 py-4  border-t">
                <div className="text-gray-700">
                    Showing 1 to 6 of 200 Result
                </div>

                <div className="flex gap-4">
                    <button className="px-3 py-1 border border-black rounded bg-gray-200">
                        &#8249;
                    </button>
                    <button className="px-3 py-1 border border-black rounded bg-gray-200">
                        &#8249;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InvoicedetailsTable;
