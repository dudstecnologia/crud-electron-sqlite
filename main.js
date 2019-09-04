const {app, BrowserWindow} = require('electron')
const path = require('path')
const sqlite3 = require('sqlite3');

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
  var db = new sqlite3.Database('./database/db.sqlite');

  db.serialize(function () {
    /*
    db.run("CREATE TABLE contatos (id	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, nome TEXT NOT NULL, telefone TEXT)");
  
    db.run("INSERT INTO contatos (nome, telefone) VALUES ('Maria Silva', '092993846453');
    db.run("INSERT INTO contatos (nome, telefone) VALUES ('Carlos Machado', '011956473645');
    */

    db.each("SELECT * FROM contatos", function (err, row) {
      console.log(row);
    });
  });
  // ##########################################

}

app.on('ready', createWindow)
