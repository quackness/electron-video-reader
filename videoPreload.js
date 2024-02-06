const { contextBridge, ipcRenderer } = require('electron');
// const fs = require("fs");


window.addEventListener('DOMContentLoaded', () => {
  // document.querySelector('#videoButton').disabled = false;
  document.querySelector('#videoButton').addEventListener('click', () => {
    console.log('video button')
  });
});
