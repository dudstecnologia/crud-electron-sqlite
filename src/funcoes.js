

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

  console.log(...formData)
});
