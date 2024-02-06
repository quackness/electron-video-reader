const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('node:path');

const isMac = process.platform === 'darwin';

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 605,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      //preload: path.join(__dirname, 'preload.js')
    }
  })
  mainWindow.loadFile('index.html');
  mainWindow.webContents.openDevTools();
}

const template = [
  ...(isMac
    ? [{
      label: app.name,
    }]
    : []),
  // { role: 'fileMenu' }
  {
    label: 'File',
    submenu: [
      {
        label: 'Video',
        submenu: [
          {
            label: 'Load...',
            click: () => {
              const loadVideoWindow = new BrowserWindow({
                width: 1000,
                height: 605,
                resizable: false,
                webPreferences: {
                  // nodeIntegration: true,
                  // contextIsolation: false,
                  preload: path.join(__dirname, "videoPreload.js")
                }
              })
              loadVideoWindow.loadFile('loadVideo.html');
              loadVideoWindow.webContents.openDevTools();
            },
          }
        ]
      },
      { type: 'separator' },
      isMac ? { role: 'close' } : { role: 'quit' }
    ]
  },
  {
    label: 'Developer',
    submenu: [
      { role: 'toggleDevTools' },
    ]
  }];

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)



app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
});

//hnadle new video selected
//https://www.electronjs.org/docs/latest/tutorial/ipc#pattern-1-renderer-to-main-one-way
// ipcMain.on('fileSelected', (e) => {
//   console.log(e.target)
// });











//add option for mac to prevent the app from closing 
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})






//source: https://www.electronjs.org/docs/latest/tutorial/quick-start