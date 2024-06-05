const {somar, subtracao} = require('./array_atirimetica')
let array = [1,1,1,1,1]

describe('Teste de soma e subtracao de array',()=>{
    test('o valor da soma do array = 5',()=>{
        expect(somar(array))
        .toBe(5)
    })
    test('o valor da subtracao do array = -5',()=>{
        expect(subtracao(array))
        .toBe(-5)

    })
})