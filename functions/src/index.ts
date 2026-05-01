import {onSchedule} from "firebase-functions/v2/scheduler";
import * as admin from "firebase-admin";

admin.initializeApp();

export const updateOverdueInvoices = onSchedule(
  "every 24 hours",
  async () => {
    const db = admin.firestore();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const snapshot = await db.collection("invoices").get();
    const batch = db.batch();

    snapshot.forEach((doc) => {
      const data = doc.data();

      if (!data.dueDate || data.status === "paid") return;

      let dueDate: Date;

      if (data.dueDate?.toDate) {
        dueDate = data.dueDate.toDate();
      } else {
        dueDate = new Date(data.dueDate);
      }

      dueDate.setHours(0, 0, 0, 0);

      if (today > dueDate && data.status !== "overdue") {
        batch.update(doc.ref, {
          status: "overdue",
        });
      }
    });

    await batch.commit();
    console.log("Overdue invoices updated");
  }
);
