const { contextBridge, ipcRenderer } = require('electron');

// contextBridge.exposeInMainWorld('electronAPI', {
//   getVideo: (callback) => ipcRenderer.on('get-image', callback),
// });
ipcRenderer.on('videoLoaded', (event, videoData) => {
  console.log(videoData);
})


