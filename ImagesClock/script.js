function carregar() {
    var msg = window.document.querySelector('div.msg')
    var imagem = window.document.querySelector('img#imagem')
    var legenda = window.document.querySelector('p.legenda')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerText = `Agora são ${hora} horas e ${minuto} minutos!`
    if (hora >= 6 && hora < 12) {
        imagem.src = "surce/manha.jpg"
        legenda.innerText = "Manhã!"

    } else if (hora >= 12 && hora < 18) {
        imagem.src = "surce/tarde.jpg"
        legenda.innerText = "Tarde!"
    } else {
        imagem.src = "surce/noite.jpg"
        legenda.innerText = "Noite!"
    }
}