import { app, BrowserWindow } from "electron";

console.info("process.env.NODE_ENV:", process.env.NODE_ENV);

let mainWindow: BrowserWindow | null;
const distDir = "dist";
const baseURL = `file://${__dirname}/${distDir}/index.html`;
console.info(`baseURL:`, baseURL);

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: Math.trunc(600 * 1.618),
    height: 600,
  });

  mainWindow.webContents.openDevTools();
  mainWindow.loadURL(baseURL);
};

app.on("ready", createWindow);
