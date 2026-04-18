// import { app, BrowserWindow, globalShortcut, Menu } from "electron";
// import { createRequire } from 'node:module'
// import { fileURLToPath } from 'node:url'
// import { GlobalShortcut } from "electron";
// import path from 'node:path'


// const require = createRequire(import.meta.url)
// const __dirname = path.dirname(fileURLToPath(import.meta.url))

// // The built directory structure
// //
// // ├─┬─┬ dist
// // │ │ └── index.html
// // │ │
// // │ ├─┬ dist-electron
// // │ │ ├── main.js
// // │ │ └── preload.mjs
// // │
// process.env.APP_ROOT = path.join(__dirname, '..')

// // 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
// export const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']
// export const MAIN_DIST = path.join(process.env.APP_ROOT, 'dist-electron')
// export const RENDERER_DIST = path.join(process.env.APP_ROOT, 'dist')

// process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, 'public') : RENDERER_DIST

// let win: BrowserWindow | null

// function createWindow() {
//   win = new BrowserWindow({
//     icon: path.join(process.env.VITE_PUBLIC, 'electron-vite.svg'),
//     webPreferences: {
//       preload: path.join(__dirname, 'preload.mjs'),
//     },
//   })
//   Menu.setApplicationMenu(null);
//   app.whenReady().then(() => {
//     globalShortcut.register('Control+Shift+I', () => {
//       win?.webContents.openDevTools();
//     });
//     });
//   // Test active push message to Renderer-process.
//   win.webContents.on('did-finish-load', () => {
//     win?.webContents.send('main-process-message', (new Date).toLocaleString())
//   })

//   if (VITE_DEV_SERVER_URL) {
//     win.loadURL(VITE_DEV_SERVER_URL)
//   } else {
//     // win.loadFile('dist/index.html')
//     win.loadFile(path.join(RENDERER_DIST, 'index.html'))
//   }
// }

// // Quit when all windows are closed, except on macOS. There, it's common
// // for applications and their menu bar to stay active until the user quits
// // explicitly with Cmd + Q.
// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit()
//     win = null
//   }
// })

// app.on('activate', () => {
//   // On OS X it's common to re-create a window in the app when the
//   // dock icon is clicked and there are no other windows open.
//   if (BrowserWindow.getAllWindows().length === 0) {
//     createWindow()
//   }
// })

// app.whenReady().then(createWindow)



import { app, BrowserWindow, globalShortcut, Menu, ipcMain, shell } from "electron";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import path from "node:path";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

process.env.APP_ROOT = path.join(__dirname, "..");

export const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
export const MAIN_DIST = path.join(process.env.APP_ROOT, "dist-electron");
export const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL
  ? path.join(process.env.APP_ROOT, "public")
  : RENDERER_DIST;

let win: BrowserWindow | null;

// 🔥 MAIN WINDOW CREATION
function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  Menu.setApplicationMenu(null);

  app.whenReady().then(() => {
    globalShortcut.register("Control+Shift+I", () => {
      win?.webContents.openDevTools();
    });
  });

  win.webContents.on("did-finish-load", () => {
    win?.webContents.send(
      "main-process-message",
      new Date().toLocaleString()
    );
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(RENDERER_DIST, "index.html"));
  }
}

// 🔥 EMAIL HANDLER (your requirement)
ipcMain.handle("open-email", async (_, emailData) => {
  try {
    const { to, subject = "", body = "" } = emailData;

    if (!to) throw new Error("Email address required");

    const mailtoLink =
      `mailto:${encodeURIComponent(to)}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    await shell.openExternal(mailtoLink);

    return { success: true };
  } catch (error) {
    console.error("Email open failed:", error);
    return { success: false };
  }
});

// 🔥 NODEMAILER SERVICE HANDLER
ipcMain.handle("send-invoice-email", async (_, emailData) => {
  const nodemailer = require("nodemailer");
  try {
    const { to, subject, body, pdfBase64, fileName } = emailData;

    if (!to) throw new Error("Recipient email address required");

    // ✅ CONFIGURE YOUR SMTP HERE
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "swethabo1810@gmail.com", // Replace with your email
        pass: "mlmx rlev crgc moat",    // Replace with your app password
      },
    });

    const mailOptions = {
      from: `"DesFlyer Billing" <swethabo1810@gmail.com>`,
      to: to,
      subject: subject || `Invoice: ${fileName}`,
      text: body || "Please find your invoice attached.",
      attachments: [
        {
          filename: fileName,
          content: Buffer.from(pdfBase64, "base64"),
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error: any) {
    console.error("Nodemailer failed:", error);
    return { success: false, error: error.message };
  }
});

// 🔥 APP EVENTS
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

