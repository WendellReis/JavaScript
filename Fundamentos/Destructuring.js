const jogador = {
    nome: "Foxtrot",
    nivel: 25,
    sistema: {
        SO: "Windows",
        versao: 11
    }
}

//extraia nome e nivel do objeto jogador
const {nome,nivel} = jogador
console.log(nome,nivel)

const {classe} = jogador
console.log(classe)

const {nome: n, nivel: l, online: o = true} = jogador
console.log(n,l,o)

const {sistema: {SO,versao:v,arquitetura:arq = "x64"}} = jogador
console.log(SO,v,arq)
console.log(SO,v,arq)