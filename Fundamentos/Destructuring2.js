function rand({min = 0, max = 100}) {
    const valor = min + Math.random()*(max-min);
    return Math.floor(valor);
}

const obj = {max: 30, min:25}
console.log(rand({min: 10, max:99}))
console.log(rand(obj))
console.log(rand({min:90}))
console.log(rand({max: 10}))
console.log(rand({}))