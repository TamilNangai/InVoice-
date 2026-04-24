import { ipcMain, shell, app, BrowserWindow, Menu, globalShortcut } from "electron";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import path from "node:path";
const require$1 = createRequire(import.meta.url);
const __dirname$1 = path.dirname(fileURLToPath(import.meta.url));
process.env.APP_ROOT = path.join(__dirname$1, "..");
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
const MAIN_DIST = path.join(process.env.APP_ROOT, "dist-electron");
const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, "public") : RENDERER_DIST;
let win;
function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 400,
    minHeight: 600,
    resizable: true,
    center: true,
    icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    webPreferences: {
      preload: path.join(__dirname$1, "preload.mjs"),
      contextIsolation: true,
      nodeIntegration: false
    }
  });
  win.maximize();
  Menu.setApplicationMenu(null);
  app.whenReady().then(() => {
    globalShortcut.register("Control+Shift+I", () => {
      win == null ? void 0 : win.webContents.openDevTools();
    });
  });
  win.webContents.on("did-finish-load", () => {
    win == null ? void 0 : win.webContents.send(
      "main-process-message",
      (/* @__PURE__ */ new Date()).toLocaleString()
    );
  });
  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(RENDERER_DIST, "index.html"));
  }
}
ipcMain.handle("open-email", async (_, emailData) => {
  try {
    const { to, subject = "", body = "" } = emailData;
    if (!to) throw new Error("Email address required");
    const mailtoLink = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    await shell.openExternal(mailtoLink);
    return { success: true };
  } catch (error) {
    console.error("Email open failed:", error);
    return { success: false };
  }
});
ipcMain.handle("send-invoice-email", async (_, emailData) => {
  const nodemailer = require$1("nodemailer");
  try {
    const { to, subject, body, pdfBase64, fileName } = emailData;
    if (!to) throw new Error("Recipient email address required");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "swethabo1810@gmail.com",
        // Replace with your email
        pass: "mlmx rlev crgc moat"
        // Replace with your app password
      }
    });
    const mailOptions = {
      from: `"DesFlyer Billing" <swethabo1810@gmail.com>`,
      to,
      subject: subject || `Invoice: ${fileName}`,
      text: body || "Please find your invoice attached.",
      attachments: [
        {
          filename: fileName,
          content: Buffer.from(pdfBase64, "base64")
        }
      ]
    };
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Nodemailer failed:", error);
    return { success: false, error: error.message };
  }
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
app.whenReady().then(createWindow);
export {
  MAIN_DIST,
  RENDERER_DIST,
  VITE_DEV_SERVER_URL
};
