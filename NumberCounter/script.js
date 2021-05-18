var inicio = window.document.querySelector('input#inicio')
var fim = window.document.querySelector('input#fim')
var passo = window.document.querySelector('input#passo')
var contagem = window.document.querySelector('p.contagem')

function contar() {
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("ERRO: Faltam dados!")
    } else if (Number(passo.value) == 0) {
        window.alert("Não é possível contar de 0 em 0!")
    } else {
        contagem.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i <= p) {
            for (var c = i; c <= f; c += p) {
                contagem.innerHTML += `${c} &#10145;`
            }
            contagem.innerHTML += `&#9940;`
        } else {
            for (var c = i; c >= f; c -= p) {
                contagem.innerHTML += `${c} &#10145;`
            }
        }
        contagem.innerHTML += `&#x26D4;`
    }
}

function limpar() {
    contagem.innerText = "Contagem..."
    inicio.value = ""
    fim.value = ""
    passo.value = ""
}
