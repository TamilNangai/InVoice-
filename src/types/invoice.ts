export type Invoice = {
    uniqueId: string;
    invoiceId: string;
    type: string; 
    client: string;
    date: string;
    amount: number;
    status: "paid" | "pending" | "overdue";
    pending?: number;
    sub?: string;
    email?: string;
    phone?: string;
    gst?: number;
    payment?: string;
    dueDate: string;
    university?: string;
    programName?: string;
    batch?: string;
    duration?: string;
    items?: Array<{ name: string; id: string; subType?: string; amount: number }>;
    subtotal?: number;
    discount?: number;
    gstRate?: number; 
    paidAmount?: number;
    startDate?: string; 
    endDate?: string;  
};


