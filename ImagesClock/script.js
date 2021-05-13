function carregar() {
    var msg = window.document.querySelector('div.msg')
    var imagem = window.document.querySelector('img#imagem')
    var legenda = window.document.querySelector('p.legenda')
    var body = window.document.getElementsByTagName('body')[0]

    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    msg.innerText = `Agora são ${hora} horas e ${minuto} minutos!`

    if (hora >= 6 && hora < 12) {
        imagem.src = "surce/manha.jpg"
        legenda.innerText = "Manhã!"
        body.style.backgroundImage = "linear-gradient(to right,rgb(14, 217, 224) , rgb(14, 122, 224))"
    } else if (hora >= 12 && hora < 18) {
        imagem.src = "surce/tarde.jpg"
        legenda.innerText = "Tarde!"
        body.style.backgroundImage = "linear-gradient(to right, rgb(110, 240, 77) , rgb(142, 240, 77))"
    } else {
        imagem.src = "surce/noite.jpg"
        legenda.innerText = "Noite!"
        body.style.backgroundImage = "linear-gradient(to right,rgb(20, 0, 109) , rgb(4, 1, 27))"
    }
}