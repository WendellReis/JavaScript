function rand([min = 0,max = 1000]) {
    if(min > max) [min,max] = [max,min]
    const valor = min + Math.random()*(max-min);
    return Math.floor(valor);
}

console.log(rand([200,100]))
console.log(rand([,10]))
console.log(rand([990]))