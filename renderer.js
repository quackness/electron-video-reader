//https://www.electronjs.org/docs/latest/tutorial/quick-start#access-nodejs-from-the-renderer-with-a-preload-script
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})

// const { contextBridge, ipcRenderer } = require('electron');
// document.querySelector('#videoButton').disabled = false;
// document.getElementById('videoButton').addEventListener('click', () => {
//   console.log('video button')
// });







