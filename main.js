const {app, BrowserWindow} = require('electron')
const path = require('path')

let mainWindow

function createWindow () {

  mainWindow = new BrowserWindow({
    width: 900,
    height: 650
  })

  mainWindow.loadFile('index.html')

  mainWindow.webContents.openDevTools()
  mainWindow.setMenuBarVisibility(false)

  mainWindow.on('closed', function () {
    mainWindow = null
  })

  // ##########################################

  

  // ##########################################

}

app.on('ready', createWindow)
