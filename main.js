const {app, BrowserWindow} = require('electron')
const path = require('path')
/*
const sqlite3 = require('sqlite3');
const Promise = require('bluebird')

const DAO = require('./src/dao')
const Contato = require('./src/contato')
*/
let mainWindow

function createWindow () {

  mainWindow = new BrowserWindow({
    width: 900,
    height: 650,
    webPreferences: {
      // https://electronjs.org/docs/faq#i-can-not-use-jqueryrequirejsmeteorangularjs-in-electron
      nodeIntegration: true
    }
  })

  mainWindow.loadFile('index.html')

  mainWindow.webContents.openDevTools()
  mainWindow.setMenuBarVisibility(false)

  mainWindow.on('closed', function () {
    mainWindow = null
  })

  // ##########################################
  /*
  const dao = new DAO('./database/db.sqlite')
  const contato = new Contato(dao)

  contato.getAll()
    .then((contatos) => {
      //console.log(...contatos)
      console.log('\nListando Contatos')
        contatos.forEach((c) => {
          console.log(`id = ${c.id}`)
          console.log(`nome = ${c.nome}`)
          console.log(`telefone = ${c.telefone}`)
        })
    })
    .catch((err) => {
      console.log('Ocorreu um erro, ' + err)
    })
  */
  /*
  // Conexao através da Classe
  const dao = new DAO('./database/db.sqlite');

  dao.db.each('SELECT * FROM contatos', (err, row) => {
    if (err) {
      console.log('ERROR!', err)
    }

    console.log(row);
  })
  */

  /*
  // CONEXAO DIRETA
  var db = new sqlite3.Database('./database/db.sqlite');

  db.serialize(function () {
    db.run("CREATE TABLE contatos (id	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, nome TEXT NOT NULL, telefone TEXT)");
  
    db.run("INSERT INTO contatos (nome, telefone) VALUES ('Maria Silva', '092993846453');
    db.run("INSERT INTO contatos (nome, telefone) VALUES ('Carlos Machado', '011956473645');

    db.each("SELECT * FROM contatos", function (err, row) {
      console.log(row);
    });
  });
  */
  // ##########################################

}

app.on('ready', createWindow)
