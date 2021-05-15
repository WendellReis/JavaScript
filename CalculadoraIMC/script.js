var altura = window.document.querySelector('input#altura')
var peso = window.document.querySelector('input#peso')
var resultado = window.document.querySelector('p.resultado')
var desc1 = window.document.querySelector('p#desc1')
var desc2 = window.document.querySelector('p#desc2')
var desc3 = window.document.querySelector('p#desc3')

function calcular() {
    //Coletar os valores de texto dos input's
    var alturaf = altura.value
    var pesof = peso.value

    //Converter os valores de texto para número
    alturaf = Number(alturaf.toString().replace(",", "."))
    pesof = Number(pesof.toString().replace(",", "."))

    //Calcular imc e arredondar o resultado 
    var imc = pesof / (alturaf * alturaf)
    imc = Number(imc).toPrecision(3)
    resultado.innerText = "IMC: " + imc.toString().replace(".", ",")

    if (imc < 18.5) {
        desc1.innerHTML = "<strong>IMC:</strong> MENOR QUE 18,5"
        desc2.innerHTML = "<strong>Classificação:</strong> MAGREZA"
        desc3.innerHTML = "<strong>Obesidade (grau):</strong> 0"
        resultado.style.background = "grey"
    } else if (imc >= 18.5 && imc < 24.9) {
        desc1.innerHTML = "<strong>IMC:</strong> ENTRE 18,5 E 24,9"
        desc2.innerHTML = "<strong>Classificação:</strong> NORMAL"
        desc3.innerHTML = "<strong>Obesidade (grau):</strong> 0"
        resultado.style.background = "rgb(40, 96, 201)"
    } else if (imc >= 25 && imc < 29.9) {
        desc1.innerHTML = "<strong>IMC:</strong> ENTRE 25,0 E 29,9"
        desc2.innerHTML = "<strong>Classificação:</strong> SOBREPESO"
        desc3.innerHTML = "<strong>Obesidade (grau):</strong> 1"
        resultado.style.background = "rgb(119, 0, 167)"
    } else if (imc >= 30 && imc < 39.9) {
        desc1.innerHTML = "<strong>IMC:</strong> ENTRE 30,0 E 39,9"
        desc2.innerHTML = "<strong>Classificação:</strong> OBESIDADE"
        desc3.innerHTML = "<strong>Obesidade (grau):</strong> 2"
        resultado.style.background = "rgb(226, 192, 0)"
    } else if (imc >= 40) {
        desc1.innerHTML = "<strong>IMC:</strong> MAIOR QUE 40,0"
        desc2.innerHTML = "<strong>Classificação:</strong> OBESIDADE GRAVE"
        desc3.innerHTML = "<strong>Obesidade (grau):</strong> 3"
        resultado.style.background = "rgb(185, 19, 19)"
    }
}

function limpar() {
    altura.value = ""
    peso.value = ""

    resultado.innerText = "IMC: "
    resultado.style.background = "rgb(40, 96, 201)"

    desc1.innerText = "IMC:"
    desc2.innerText = "Classificação: "
    desc3.innerText = "Obesidade (grau):"
}