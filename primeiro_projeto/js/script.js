console.log('Imprimindo no console');
console.log('Javascript funcionando!');

console.log('------------------------------')
console.log('Atribuindo valores')
let firstName = 'Luciano';
let lastName = 'Brito'

console.log(firstName);
console.log(lastName);

let corCarro = 'vermelha';
console.log(corCarro);

const price = 30;
// price = 20;
console.log(price);

let myName = 'Luciano Brito';
console.log(myName);
console.log('-----------------------------')

console.log('Trabalhando com variáveis e Objetos')
let itemName = 'Pen'
let itemPrice = 3
let itemAvailable = true
let itemcolor = 'Rede'

console.log(itemName)

let pen = {
    itemName: 'Pen',
    itemPrice: 3,
    itemAvailable: true,
    itemColor: 'Red'
}

pen.itemColor = 'Blue'

console.log(pen)
console.log('------------------------------')

console.log('Trabalhando com Arrays')
let friends = ['Marcos', 'Silvia', 'Elisa']
friends[2] = 'Junior'
console.log(friends)
console.log(friends[2])
console.log('------------------------------')

console.log('Trabalhando com Functions')
function saleStatus(status, total) {
    console.log('Transaction ' + status + '! Total amount: $' + total)
}

// chamda da função
saleStatus('Approved', 30)

console.log('------------------------------')
console.log('Trabalhando com Functions 2')

function percentage10(price) {
    return price - (price * 10 / 100)
}

console.log(percentage10(20))
console.log('------------------------------')

console.log('Trabalhando com operações matemáticas')

let num1 = 3
let num2 = 2

console.log('Total da soma é: ' + (num1 + num2))
console.log('Total da subtração é: ' + (num1 - num2))
console.log('Total da multiplicação é: ' + (num1 * num2))
console.log('Total da divisão é: ' + (num1 / num2))
console.log('O resto da divisão é: ' + (num1 % num2))
console.log('O resultado do exponencial é: ' + (num1 ** num2))

console.log('Operadores de atribuição')

let num11 = 3

// num11 = num11 + 20
num11 *= 20
console.log(num11)

console.log('Operadores de comparação')

let num22 = 3
let nomeString = 'Luciano'

console.log(num22 > 0)
console.log(num22 < 0)
console.log(num22 >= 3)
console.log(num22 <= 3)
console.log(num22 === 3)
console.log(num22 !== 3)
console.log(nomeString !== 'Luciano')
console.log(nomeString === 'Luciano')

if(num22 > 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

console.log('Operadores de comparação 2')

let num111 = '1'
let num222 = 1

// Strict => avalia tipo e valor
console.log(num111 === num222)
// Lose => avalia somente valor
console.log(num111 == num222)

console.log('Operadores Ternários')

let driver = 90
let speed = driver > 110 ? 'Above' : 'Below'
console.log(speed)

console.log('Operadores lógicos')
let temIdadeMinima = true
let temTituloDeEleitor = false
let podeVotarUsandoE = temIdadeMinima && temTituloDeEleitor
let podeVotarUsandoOU = temIdadeMinima || temTituloDeEleitor
let podeViajarE = !podeVotarUsandoE
let podeViajarOU = !podeVotarUsandoOU
console.log('Usando o &&: ' + podeVotarUsandoE)
console.log('Usando o ||: ' + podeVotarUsandoOU)
console.log('Usando o !: ' + podeViajarE)
console.log('Usando o !: ' + podeViajarOU)