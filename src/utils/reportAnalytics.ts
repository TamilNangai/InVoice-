import { Invoice } from "@/Components/Table/Reporttable"

export const reportAnalytics = (invoices: Invoice[]) => {

    /* ================= TOTAL REVENUE ================= */

    const totalRevenue = invoices.reduce(
        (sum, inv) => sum + inv.amount,
        0
    )


    /* ================= PAID ================= */

    const paidInvoices = invoices.filter(
        inv => inv.status === "paid"
    )

    const paidCount = paidInvoices.length


    /* ================= PENDING ================= */

    const pendingInvoices = invoices.filter(
        inv => inv.status === "pending"
    )

    const pendingAmount = pendingInvoices.reduce(
        (sum, inv) => sum + inv.amount,
        0
    )


    /* ================= OVERDUE ================= */

    const overdueInvoices = invoices.filter(
        inv => inv.status === "overdue"
    )

    const overdueAmount = overdueInvoices.reduce(
        (sum, inv) => sum + inv.amount,
        0
    )


    /* ================= COLLECTION RATE ================= */

    const collectionRate = invoices.length
        ? Math.round((paidCount / invoices.length) * 100)
        : 0


    /* ================= MONTHLY GROWTH ================= */

    const now = new Date()

    const currentMonth = now.getMonth()
    const currentYear = now.getFullYear()

    const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1
    const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear

    const thisMonthRevenue = invoices
        .filter(inv => {
            const d = new Date(inv.date)
            return d.getMonth() === currentMonth &&
                d.getFullYear() === currentYear
        })
        .reduce((sum, inv) => sum + inv.amount, 0)

    const lastMonthRevenue = invoices
        .filter(inv => {
            const d = new Date(inv.date)
            return d.getMonth() === lastMonth &&
                d.getFullYear() === lastMonthYear
        })
        .reduce((sum, inv) => sum + inv.amount, 0)

    const growth =
        lastMonthRevenue === 0
            ? 0
            : ((thisMonthRevenue - lastMonthRevenue) / lastMonthRevenue) * 100


    /* ================= REVENUE BY TYPE ================= */

    const product = invoices
        .filter(inv => inv.type === "Product")
        .reduce((sum, inv) => sum + inv.amount, 0)

    const service = invoices
        .filter(inv => inv.type === "Service")
        .reduce((sum, inv) => sum + inv.amount, 0)

    const internship = invoices
        .filter(inv => inv.type === "Internship")
        .reduce((sum, inv) => sum + inv.amount, 0)

    const totalType = product + service + internship

    const productPercent = totalType
        ? (product / totalType) * 100
        : 0

    const servicePercent = totalType
        ? (service / totalType) * 100
        : 0

    const internshipPercent = totalType
        ? (internship / totalType) * 100
        : 0


    return {

        totalRevenue,

        paidCount,

        pendingAmount,
        pendingCount: pendingInvoices.length,

        overdueAmount,
        overdueCount: overdueInvoices.length,

        collectionRate,

        growth: growth.toFixed(0),

        productPercent,
        servicePercent,
        internshipPercent
    }
}
