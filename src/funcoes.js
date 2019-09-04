const DAO = require('./src/dao')
const Contato = require('./src/contato')

const dao = new DAO('./database/db.sqlite')
const contato = new Contato(dao)

document.getElementById("painel-form").style.display = "none"

function exibeLista() {
  document.getElementById('link-form').classList.remove("active")
  document.getElementById('link-lista').classList.add("active")

  document.getElementById("painel-form").style.display = "none"
  document.getElementById("painel-lista").style.display = "block"
}

function exibeForm() {
  document.getElementById('link-lista').classList.remove("active")
  document.getElementById('link-form').classList.add("active")

  document.getElementById("painel-lista").style.display = "none"
  document.getElementById("painel-form").style.display = "block"
}

document.getElementById('form-principal').addEventListener("submit", function(evt) {
  evt.preventDefault()

  var formData = new FormData(this)

  contato.create(formData.get('nome'), formData.get('telefone'))
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      alert('Ops! ocorreu um erro ao inserir')
    })

  this.reset()
  listaContatos()
  exibeLista()
});

function listaContatos() {

  document.getElementById("lista-contatos").innerHTML = ""

  contato.getAll()
    .then((contatos) => {
        contatos.forEach((c) => {
          // console.log(`id = ${c.id}`)
          // console.log(`nome = ${c.nome}`)
          // console.log(`telefone = ${c.telefone}`)
          var item = document.createElement('LI')
          item.setAttribute('class','list-group-item');
          item.innerHTML = `<strong>${c.nome}</strong> <p>${c.telefone}</p>`
          document.getElementById('lista-contatos').appendChild(item)
        })
    })
    .catch((err) => {
      alert('Ops! ocorreu um erro ao listar os contatos')
    })
}

listaContatos()

