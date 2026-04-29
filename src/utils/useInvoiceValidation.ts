import { showError } from "@/utils/alert"

/* ================= COMMON HELPERS ================= */

const isValidPhone = (phone: string) => /^[0-9]{10}$/.test(phone)

const isValidEmail = (email: string) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(email)

const isValidGST = (gst: string) =>
  /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{3}$/.test(gst)

/* ================= INTERNSHIP ================= */

export const validateInternshipInvoice = async (
  data: any,
  subtotal: number,
  totalAmount: number
): Promise<boolean> => {
  const { student, program, fees, price } = data

  if (!student.studentName || !student.email || !student.phone || !student.college) {
    await showError("Please fill all student details.")
    return false
  }

  if (!isValidPhone(student.phone)) {
    await showError("Phone number must be 10 digits")
    return false
  }

  if (!isValidEmail(student.email)) {
    await showError("Invalid email address")
    return false
  }

  if (!program.internship || !program.batch || !program.start || !program.enddate) {
    await showError("Please fill all program details.")
    return false
  }

  if (new Date(program.enddate) <= new Date(program.start)) {
    await showError("End date must be after start date")
    return false
  }

  if (fees.training <= 0 || fees.internship <= 0 || fees.certificate <= 0) {
    await showError("Invalid fees")
    return false
  }

  if (fees.tax <= 0 || fees.tax > 100) {
    await showError("Tax must be between 0–100")
    return false
  }

  if (fees.discount < 0 || fees.discount > subtotal) {
    await showError("Invalid discount")
    return false
  }

  if (!price.paymentMethod) {
    await showError("Select payment method")
    return false
  }

  if (price.paid < 0 || price.paid > totalAmount) {
    await showError("Invalid paid amount")
    return false
  }

  const today = new Date().toISOString().split("T")[0]

  if (!price.duedate || price.duedate <= today) {
    await showError("Due date must be future")
    return false
  }

  return true
}

/* ================= PRODUCT ================= */

export const validateProductInvoice = async (
  data: any,
  totalAmount: number
): Promise<boolean> => {
  const { customer, product, price } = data

  if (!customer.customer || !customer.email || !customer.office || !customer.phone || !customer.address) {
    await showError("Fill all customer details")
    return false
  }

  if (!isValidPhone(customer.phone)) {
    await showError("Phone must be 10 digits")
    return false
  }

  if (!isValidEmail(customer.email)) {
    await showError("Invalid email")
    return false
  }

  if (customer.gst && !isValidGST(customer.gst)) {
    await showError("Invalid GST")
    return false
  }

  const invalidProduct = product.some(
    (p: any) =>
      !p.productName ||
      p.price <= 0 ||
      p.tax < 0 ||
      p.tax > 100
  )

  if (invalidProduct) {
    await showError("Invalid product details")
    return false
  }

  if (!price.paymentMethod || !price.duedate) {
    await showError("Fill payment details")
    return false
  }

  if (price.paid < 0 || price.paid > totalAmount) {
    await showError("Invalid paid amount")
    return false
  }

  const today = new Date().toISOString().split("T")[0]

  if (price.duedate <= today) {
    await showError("Due date must be future")
    return false
  }

  return true
}

/* ================= SERVICE ================= */

export const validateServiceInvoice = async (
  data: any,
  totalAmount: number
): Promise<boolean> => {
  const { customer, service, price } = data

  if (!customer.customer || !customer.email || !customer.office || !customer.phone || !customer.address) {
    await showError("Fill all customer details")
    return false
  }

  if (!isValidPhone(customer.phone)) {
    await showError("Phone must be 10 digits")
    return false
  }

  if (!isValidEmail(customer.email)) {
    await showError("Invalid email")
    return false
  }

  if (customer.gst && !isValidGST(customer.gst)) {
    await showError("Invalid GST")
    return false
  }

  const invalidService = service.some(
    (s: any) =>
      !s.serviceName ||
      s.price <= 0 ||
      s.tax < 0 ||
      s.tax > 100
  )

  if (invalidService) {
    await showError("Invalid service details")
    return false
  }

  if (!price.paymentMethod || !price.duedate) {
    await showError("Fill payment details")
    return false
  }

  if (price.paid <= 0 || price.paid > totalAmount) {
    await showError("Invalid paid amount")
    return false
  }

  const today = new Date().toISOString().split("T")[0]

  if (price.duedate <= today) {
    await showError("Due date must be future")
    return false
  }

  return true
}

/* ================= BASIC FORM VALIDATION ================= */

export const validateForm = (form: HTMLFormElement | null) => {
  if (!form) return false

  if (!form.checkValidity()) {
    form.reportValidity()
    return false
  }

  return true
}