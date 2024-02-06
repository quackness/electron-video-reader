const { contextBridge, ipcRenderer } = require('electron');
const fs = require("fs");


window.addEventListener('DOMContentLoaded', () => {
  // document.querySelector('#videoButton').disabled = false;
  document.querySelector('#videoButton').addEventListener('click', () => {
    console.log('video button clicked');
    const filePath = document.querySelector('#js-player').files[0].path;
    let changedPath = filePath.split("/");
    changedPath = changedPath[changedPath.length - 1];
    console.log(changedPath);
    ipcRenderer.send('file-selected', changedPath);
  });
});
