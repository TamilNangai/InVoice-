// import * as functions from "firebase-functions"
// import * as nodemailer from "nodemailer"

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "your_email@gmail.com",
//     pass: "your_app_password"
//   }
// })

// export const sendInvoiceEmail = functions.https.onCall(async (data) => {

//   const { email, pdf, invoiceId } = data

//   const base64Data = pdf.replace(/^data:application\/pdf;base64,/, "")

//   await transporter.sendMail({
//     from: "your_email@gmail.com",
//     to: email,
//     subject: `Invoice ${invoiceId}`,
//     text: "Please find your invoice attached.",
//     attachments: [
//       {
//         filename: `Invoice_${invoiceId}.pdf`,
//         content: base64Data,
//         encoding: "base64"
//       }
//     ]
//   })

//   return { success: true }
// })