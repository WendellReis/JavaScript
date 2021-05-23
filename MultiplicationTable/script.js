var num = document.getElementById('num')
var lin = document.getElementById('lin')
var resultado = document.getElementById('resultado')

function calcular() {
    let n = Number(num.value)
    let l = Number(lin.value)
    let i = 0

    if (l < 0) {
        alert("O número de linhas não pode ser menor 0!")
        lin.value = ""
    } else {
        resultado.innerHTML = "Resultado: <br>"
        while (i <= l) {
            resultado.innerHTML += `${n} x ${i} = ${n * i} <br>`
            i++
        }
    }
}

function limpar() {
    resultado.innerText = "Aguardando..."
    num.value = ""
    lin.value = ""
}