"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("electron", {
  send: (channel, data) => {
    electron.ipcRenderer.send(channel, data);
  },
  on: (channel, func) => {
    electron.ipcRenderer.on(channel, (_event, ...args) => func(...args));
  },
  off: (channel, func) => {
    electron.ipcRenderer.removeListener(channel, func);
  },
  invoke: (channel, data) => {
    return electron.ipcRenderer.invoke(channel, data);
  }
});
electron.contextBridge.exposeInMainWorld("electronAPI", {
  openEmail: (data) => electron.ipcRenderer.invoke("open-email", data)
});
