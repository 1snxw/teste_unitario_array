let soma = 0
let subtrair = 0

function somar(array){
    for(i = 0; i<array.length;i++){
        soma += array[i] 
    }
    return soma
}

function subtracao(array){
    for(i=0;i<array.length;i++){
        subtrair -= array[i]
    }
    return subtrair
}

module.exports = {somar, subtracao}