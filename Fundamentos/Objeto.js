const serie = 'code'

function exec() {
    const serie = "exec"
    return serie
}

function print() {
    const serie = 'print'
    console.log(serie)
}

console.log(serie)
console.log(exec())
print()

const Pessoa = {
    nome: 'Johan',
    idade: '20',
    endereco: {
        pais: 'Alemanha',
        cidade: 'Monique',
        rua: 'Rua Berlinda',
        numero: '82',
        print() {
            return this.cidade + '(' + this.pais + ') ' + this.rua + ' ' + this.numero
        }
    },
    print() {
        console.log(this.nome + ' ' + this.idade)
    }
}

console.log(Pessoa.nome)
Pessoa.print()
console.log(Pessoa.endereco.print())