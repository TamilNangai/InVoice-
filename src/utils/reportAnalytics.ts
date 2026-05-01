import { Invoice } from "@/types/invoice"


export const reportAnalytics = (
    invoices: Invoice[],
    mode: "monthly" | "yearly" = "monthly",
    filter: "overall" | "internship" | "product" | "service" | "other" = "overall"
) => {

    const now = new Date()

    /* ================= SAFE STATUS ================= */

    const getStatus = (inv: Invoice) => {
        const today = new Date()
        const due = new Date(inv.dueDate)

        const pending = Number(inv.pending || 0)

        if (pending <= 0) return "paid"
        if (due < today) return "overdue"
        return "pending"
    }

    /* ================= FILTER BY TIME ================= */

    const filteredByTime = invoices.filter(inv => {
        const d = new Date(inv.date)

        if (mode === "monthly") {
            return (
                d.getMonth() === now.getMonth() &&
                d.getFullYear() === now.getFullYear()
            )
        }

        if (mode === "yearly") {
            return d.getFullYear() === now.getFullYear()
        }

        return true
    })

    /* ================= FILTER BY TYPE ================= */

    const finalInvoices = filteredByTime.filter(inv => {
        const type = (inv.type || "").toLowerCase()

        if (filter === "overall") return true
        if (filter === "internship") return type === "internship"
        if (filter === "product") return type === "product"
        if (filter === "service") return type === "service"
        if (filter === "other") return !["internship", "product", "service"].includes(type)

        return true
    })

    const data = finalInvoices

    /* ================= TOTAL REVENUE (ACTUAL RECEIVED) ================= */

    const totalRevenue = data.reduce(
        (sum, inv) => sum + (Number(inv.amount) - Number(inv.pending || 0)),
        0
    )

    const totalInvoices = data.length

    /* ================= PAID ================= */

    const paidInvoices = data.filter(inv => getStatus(inv) === "paid")

    const paidCount = paidInvoices.length

    const paidAmountTotal = data.reduce(
        (sum, inv) => sum + (Number(inv.amount) - Number(inv.pending || 0)),
        0
    )

    /* ================= PENDING ================= */

    const pendingInvoices = data.filter(inv => getStatus(inv) === "pending")

    const pendingAmount = pendingInvoices.reduce(
        (sum, inv) => sum + Number(inv.pending),
        0
    )

    const pendingCount = pendingInvoices.length

    /* ================= OVERDUE ================= */

    const overdueInvoices = data.filter(inv => getStatus(inv) === "overdue")

    const overdueAmount = overdueInvoices.reduce(
        (sum, inv) => sum + Number(inv.pending || 0),
        0
    )

    const overdueCount = overdueInvoices.length

    /* ================= CLIENTS ================= */

    const uniqueClients = new Set(
        data.map(inv => inv.client)
    ).size

    /* ================= COLLECTION RATE ================= */

    const collectionRate = data.length
        ? Math.round((paidCount / data.length) * 100)
        : 0

    /* ================= MONTHLY GROWTH (BASED ON PAID) ================= */

    const currentMonth = now.getMonth()
    const currentYear = now.getFullYear()

    const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1
    const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear

    const thisMonthRevenue = data
        .filter(inv => {
            const d = new Date(inv.date)
            return (
                d.getMonth() === currentMonth &&
                d.getFullYear() === currentYear &&
                inv.status === "paid"
            )
        })
        .reduce((sum, inv) => sum + inv.amount, 0)

    const lastMonthRevenue = data
        .filter(inv => {
            const d = new Date(inv.date)
            return (
                d.getMonth() === lastMonth &&
                d.getFullYear() === lastMonthYear &&
                inv.status === "paid"
            )
        })
        .reduce((sum, inv) => sum + inv.amount, 0)

    const growthValue =
        !isNaN(thisMonthRevenue) &&
        !isNaN(lastMonthRevenue) &&
        lastMonthRevenue !== 0
            ? ((thisMonthRevenue - lastMonthRevenue) / lastMonthRevenue) * 100
            : 0

    /* ================= REVENUE BY TYPE (PAID ONLY) ================= */

    const product = data
        .filter(inv => inv.status === "paid" && inv.type.toLowerCase() === "product")
        .reduce((sum, inv) => sum + inv.amount, 0)

    const service = data
        .filter(inv => inv.status === "paid" && inv.type.toLowerCase() === "service")
        .reduce((sum, inv) => sum + inv.amount, 0)

    const internship = data
        .filter(inv => inv.status === "paid" && inv.type.toLowerCase() === "internship")
        .reduce((sum, inv) => sum + inv.amount, 0)

    const totalType = product + service + internship

    const productPercent = totalType ? (product / totalType) * 100 : 0
    const servicePercent = totalType ? (service / totalType) * 100 : 0
    const internshipPercent = totalType ? (internship / totalType) * 100 : 0

    /* ================= RETURN ================= */

    return {
        // Dashboard
        totalRevenue,
        totalInvoices,
        pendingAmount,
        pendingCount,
        uniqueClients,

        // Reports
        paidCount,
        paidAmountTotal,
        overdueAmount,
        overdueCount,
        collectionRate,

        // Growth
        growth: growthValue.toFixed(0),

        // Charts
        productPercent,
        servicePercent,
        internshipPercent,

        productAmount: product,
        serviceAmount: service,
        internshipAmount: internship
    }
}