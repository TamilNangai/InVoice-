export const generateInvoiceId = () => {

    const year = new Date().getFullYear()

    const lastNumber = Number(localStorage.getItem("invoiceCount") || 0) + 1

    localStorage.setItem("invoiceCount", lastNumber.toString())

    const padded = String(lastNumber).padStart(3, "0")

    return `INV-${year}-${padded}`
}
