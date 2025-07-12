import {app, BrowserWindow} from "electron";
import path from "path";

app.on("ready", () => {
    const mainWindow = new BrowserWindow({
        width: 847,
        height: 652,
        frame: false,
        transparent: true,
        resizable: true,
        hasShadow: false,
        alwaysOnTop: true,
        webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
        },
        icon: path.join(app.getAppPath(), "/src/ui/assets/note.ico")
    });
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
})