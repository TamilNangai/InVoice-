// // functions/src/sendInvoiceEmail.ts
// import * as functions from "firebase-functions";
// import * as admin from "firebase-admin";
// import * as nodemailer from "nodemailer";

// admin.initializeApp();

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: functions.config().email.user, // set via `firebase functions:config:set email.user="your@gmail.com"`
//     pass: functions.config().email.pass, // set via `firebase functions:config:set email.pass="your_app_password"`
//   },
// });

// export const sendInvoiceEmail = functions.https.onCall(
//   async (data: { email: string; pdfBase64: string; fileName: string }) => {
//     const { email, pdfBase64, fileName } = data;

//     const mailOptions = {
//       from: `Your Company <${functions.config().email.user}>`,
//       to: email,
//       subject: `Invoice ${fileName}`,
//       text: "Please find your invoice attached.",
//       attachments: [
//         {
//           filename: fileName,
//           content: Buffer.from(pdfBase64, "base64"),
//         },
//       ],
//     };

//     await transporter.sendMail(mailOptions);
//     return { success: true };
//   }
// );