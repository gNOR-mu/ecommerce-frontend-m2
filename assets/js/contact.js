const btnContact = $("#btn-contact")
const inputText = $("#input-text")
const inputEmail = $("#input-email")

btnContact.click(function () {
    // validación simple
    if (inputText.val() == "" || inputEmail.val() == "") {
        alert("rellene los campos")
        return
    }
    alert("mensaje enviado")
    location.reload()
})