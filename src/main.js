const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
import started from "electron-squirrel-startup";

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false
    },
  });

  // Load index.html
  mainWindow.loadFile('index.html');

  // open devtools
  mainWindow.webContents.openDevTools();
});

// handle file dialog for video uplaods
ipcMain.handle('open-file', async () => {
  const { filePaths } = await dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [{ name: 'Videos', extensions: ['mp4', 'mov', 'avi', 'mkv']}],
  });
  return filePaths[0];
})