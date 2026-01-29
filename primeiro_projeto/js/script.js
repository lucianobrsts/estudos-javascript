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

console.log('Operadores lógicos com Strings')
let corCliente = 'White'
let corEstoque = 'Black'
let corVendida = corCliente || corEstoque
console.log(corVendida)

console.log('If e Else')
let driverSpeed = 110

if(driverSpeed > 110) {
    console.log('Resultado: Driving too fast')
} else if(driverSpeed > 40 && driverSpeed <= 110 ) {
    console.log('Resultado: OK')
} else {
    console.log('Resultado: Driver speed slow')
}

console.log('Switch Case')
let airport = 'ABC'
switch (airport) {
    case 'MCO':
        console.log('Orlando')
        break
    case 'JFK':
        console.log('JOohn F. Kennedy')
        break
    case 'SEA':
        console.log('Seattle')
        break
    default:
        console.log('Essa opção é inválida!')
        break
}

console.log('For loop')
console.log('vai iterar de 1 a 10')
for(i = 1; i <= 10; i++) {
    console.log('Número: ' + i)
}

console.log('---------------------')
console.log('vai iterar de 10 a 20')

for(i = 10; i <=20; i++) {
    console.log('Número: ' + i)
}

console.log('---------------------')
console.log('While loop')
var i = 1
while(i <= 10) {
    console.log('Número: ' + i)
    i++
}

console.log('---------------------')
console.log('Do While loop')
do {
    console.log('Número: ', i)
    i++
} while (i <= 10);

console.log('---------------------')
console.log('For in loop')
const myCar = {
    modelo: 'BMW',
    year: 2023,
    km: 68000
}

for(let i in myCar) {
    console.log(i, myCar[i])
}

console.log('---------------------')
console.log('For of loop')
const friends2 = ['Marcos', 'Ana', 'Jose']

for(let i of friends2) {
    console.log(i)
}

console.log('---------------------')
console.log('Objects In Javascript')

let bookTile = 'Atomic Habits'
let bookAuthor = 'James Clear'
let bookPages = 306

function createBook (title, author, pages) {
    const book = {
        bookTile: title,
        bookAuthor: author,
        bookPages: pages,
        printBook: function() {
            console.log('Printing...')
        }
    }
    return book
}

const book1 = createBook('Atomic', 'James', 306)
const book2 = createBook('Think', 'Napolean', 450)

console.log(book1)
console.log(book2)

book1.color = 'White'

console.log('---------------------')
console.log('Trabalhando com construtores')

function CreateBookConstructor (title, author, pages) {
    this.bookTile = title;
    this.bookAuthor = author;
    this.bookPages = pages
}

const book1Constructor = new CreateBookConstructor('Atomic', 'James', 306)

console.log(book1Constructor)

console.log('---------------------')
console.log('Objects Built in')

console.log('mostra o maior valor enter 1, 3, 15, 2, 7, 4')
console.log(Math.max(1, 3, 15, 2, 7, 4))
console.log('Mostra o menor valor entre 1, 3, 15, 2, 7, 4')
console.log(Math.min(1, 3, 15, 2, 7, 4))
console.log('Mostra o valor de PI')
console.log(Math.PI)
console.log('Trunca o valor de PI e mostra o inteiro')
console.log(Math.trunc(Math.PI))

let message = 'Hey, my name is Luciano'

console.log(message.startsWith('Hey'))
console.log(message.length)
console.log(message.includes('luciano'))
console.log(message.endsWith('Luciano'))

console.log('---------------------')
console.log('Templates Literals')

let firstNameJoe = 'Joe'

const email = 'Hi ' + firstNameJoe + ', \nThe meeting is confirmed! \nAndre'
const email2 = `Hi ${firstNameJoe}, 
The meeting is confirmed! 
Andre`

console.log(email)
console.log(email2)


console.log('---------------------')
console.log('Arrays')

const friends3 = ['Marcos', 'Ana', 'Marcela']
const num = [7, 8, 9,]

num.push(10, 11, 12)
num.unshift(1, 2, 3)
num.splice(3, 0, 4, 5, 6)

console.log(friends3)
console.log(num)
console.log(num.length)
console.log(num.indexOf(15))
console.log(num.includes(12))

console.log('----------------------------')
console.log('Movie list')

const movies = [
    {id: 1, movieName: 'Dejavu'},
    {id: 2, movieName: 'Back to the Future'},
    {id: 3, movieName: 'The Matrix'}
]

console.log(movies)
console.log(movies.includes({id: 1, movieName: 'Dejavu'}))

console.log(movies.find(function(movie) {
    return movie.movieName === 'The Matrix'
}))

console.log('----------------------------')
console.log('Next class')



