function calcular() {
    var altura = window.document.querySelector('input#altura')
    var peso = window.document.querySelector('input#peso')

    var alturaf = Number(altura.value)
    var pesof = Number(peso.value)

    var imc = pesof / (alturaf * alturaf)

    var resultado = window.document.querySelector('p.resultado')
    resultado.innerText = "IMC: " + Number(imc).toPrecision(3)
}
