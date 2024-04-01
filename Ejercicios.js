/* 1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
1.2 Crea una variable llamada x, asigna el valor 50 a ella.
1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10. 
1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'. */

let myFavoriteHero = 'Hulk'
let x = 50
let h = 5
let y = 10
let z = h + y

/* 1.1 Dado el siguiente objeto, cambia el valor de la propiedad age a 25.
const character = {name: 'Jack Sparrow', age: 10}; */

const character = { name: 'Jack Sparrow', age: 10 }
character.age = 25

/* 1.2 Declara 3 variables con los nombres y valores siguientes 
	firstName = 'Jon'; 
	lastName = 'Snow'; 
	age = 24; 
Muestralos por consola de esta forma: 
	'Soy Jon Snow, tengo 24 años y me gustan los lobos.' */

let firstName = 'Jon'
let lastName = 'Snow'
let age = 24

console.log(
  `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`
)

/* 1.3 Dado el siguiente código, imprime con un console.log la suma del precio de
ambos juguetes.*/

const toy1 = { name: 'Buss myYear', price: 19 }
const toy2 = { name: 'Rallo mcKing', price: 29 }

function sumaprecios(toy1, toy2) {
  return toy1.price + toy2.price
}

console.log(`La suma de los precios es de $${sumaprecios(toy1, toy2)}`)

/* 1.4 Dado el siguiente código, actualiza el valor de la variable globalBasePrice a 25000 
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
basePrice más el valor de la variable globalBasePrice. 
let globalBasePrice = 10000 */

const car1 = { name: 'BMW m&m', basePrice: 50000, finalPrice: 60000 }
const car2 = { name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000 }
let globalBasePrice = 25000

car1.finalPrice = car1.basePrice + globalBasePrice
car2.finalPrice = car2.basePrice + globalBasePrice
console.log(car1)
console.log(car2)

/*1.1 Multiplica 10 por 5 y muestra el resultado mediante console. */
let result = 10 * 5
console.log(result)

/*1.2 Divide 10 por 2 y muestra el resultado en un console. */

let division = 10 / 2
console.log(division)

/* 1.3 Muestra mediante un console el resto de dividir 15 por 9. */
console.log(15 % 9)

/* 1.4 Usa el correcto operador de asignación que resultará en o = 15, 
teniendo dos variables p = 10 y j = 5. */

let p = 10
let j = 5
let o = p + j
console.log(o)

/*1.5 Usa el correcto operador de asignación que resultará en i = 50,
teniendo dos variables c = 10 y m = 5.
*/

let c = 10
let m = 5
let i = c * m
console.log(i)

/* 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.*/

{
  const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
  console.log(avengers[0])
}

/* 1.2 Cambia el primer elemento de avengers a "IRONMAN" */

{
  const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
  avengers[0] = 'IRONMAN'
  console.log(avengers)
}

/* 1.3 console numero de elementos en el array usando la propiedad correcta de Array. */
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers.length)

/* 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array */
{
  const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']
  rickAndMortyCharacters.push('Morty', 'Summer')
  console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1])
}

/* 1.5 Elimina el último elemento del array y muestra el primero y el último por consola. */

{
  const rickAndMortyCharacters = [
    'Rick',
    'Beth',
    'Jerry',
    'Morty',
    'Summer',
    'Lapiz Lopez'
  ]
  rickAndMortyCharacters.pop(rickAndMortyCharacters.length - 1)
  console.log(rickAndMortyCharacters[0])
  console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1])
}

/* 1.6 Elimina el segundo elemento del array y muestra el array por consola. */
const rickAndMortyCharacters = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters.splice(1, 1)
console.log(rickAndMortyCharacters)

// Ejercicio 5
const number1 = 10
const number2 = 20
const number3 = 2

if (number1 === 10) {
  console.log('number1 es estrictamente igual a 10')
}

if (number2 / number1 == 2) {
  console.log('number2 dividido entre number1 es igual a 2')
}

if (number1 !== number2) {
  console.log('number1 es estrictamente distinto a number2')
}

if (number3 !== number1) {
  console.log('number3 es distinto number1')
}

if (number3 * 5 == number1) {
  console.log('number3 por 5 es igual a number1')
}

if (number3 * 5 == number1 && number1 * 2 == number2) {
  console.log(
    'number3 por 5 es igual a number1 Y number1 por 2 es igual a number2'
  )
}

if (number2 / 2 == number1 || number1 / 5 == number3) {
  console.log(
    'number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3'
  )
}

/* 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola. */
for (let i = 0; i <= 9; i++) {
  console.log(i)
}

/* 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0. */

for (let i = 0; i <= 9; i++) {
  if (i % 2 === 0) console.log(i)
}

/* 1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a 'Dormido!'. */

for (let i = 1; i <= 10; i++) {
  if (i === 10) {
    console.log('Dormido!')
  } else {
    console.log('Intentando dormir  🐑')
  }
}

// Ejercicio 7

function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne
  } else {
    return numberTwo
  }
}

//Ejercicio 8

{
  const avengers = [
    'Hulk',
    'Thor',
    'IronMan',
    'Captain A.',
    'Spiderman',
    'Captain M.'
  ]
  function findLongestWord(param) {
    let longestWord = param[0]
    for (let i = 1; i < param.length; i++) {
      if (param[i].length > longestWord.length) {
        longestWord = param[i]
      }
    }
    return longestWord
  }
  console.log(findLongestWord(avengers))
}

// Ejercicio 9

{
  const numbers = [1, 2, 3, 5, 45, 37, 58]

  function sumAll(param) {
    let total = 0
    for (let i = 0; i < param.length; i++) {
      total += param[i]
    }
    return total
  }
  console.log(sumAll(numbers))
}

//Ejercicio 10

const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  let sum = 0
  for (let i = 0; i < param.length; i++) {
    sum += param[i]
  }
  const avg = sum / param.length
  return avg
}
console.log(average(numbers))

// Ejercicio 11

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
function averageWord(array) {
  let sum = 0
  let count = 0
  for (let element of array) {
    if (typeof element === 'number') {
      sum += element
      count++
    } else if (typeof element === 'string') {
      sum += element.length
      count++
    }
  }
  return sum / count
}
console.log(averageWord(mixedElements))

// Ejercicio 12

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(array) {
  return [...new Set(array)]
}
console.log(removeDuplicates(duplicates))

//Ejercicio 13

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function finderName(array, name) {
  return [array.includes(name), array.indexOf(name)]
}
console.log(finderName(nameFinder, 'Logan'))

// Ejercicio 14

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]

function repeatCounter(array) {
  const count = {}
  for (let i = 0; i < array.length; i++) {
    if (count[array[i]] >= 1) {
      count[array[i]]++
    } else {
      count[array[i]] = 1
    }
  }

  console.log(count)
}

repeatCounter(counterWords)

//Ejercicio 15
const products = [
  'Camiseta de Pokemon',
  'Pantalón coquinero',
  'Gorra de gansta',
  'Camiseta de Basket',
  'Cinrurón de Orión',
  'AC/DC Camiseta'
]
products.forEach((product) => {
  if (product.includes('Camiseta')) {
    console.log(product)
  }
})

//Ejercicio 16
const placesToTravel = [
  'Japon',
  'Venecia',
  'Murcia',
  'Santander',
  'Filipinas',
  'Madagascar'
]
for (const places of placesToTravel) {
  console.log(places)
}

//Ejercicio 17
const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}
for (const key in alien) {
  console.log(alien[key])
}

//Ejercicio 18
{
  const placesToTravel = [
    { id: 5, name: 'Japan' },
    { id: 11, name: 'Venecia' },
    { id: 23, name: 'Murcia' },
    { id: 40, name: 'Santander' },
    { id: 44, name: 'Filipinas' },
    { id: 59, name: 'Madagascar' }
  ]

  for (let i = 0; i < placesToTravel.length; i++) {
    if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
      placesToTravel.splice(i, 1)
    }
    console.log(placesToTravel)
  }
}

// Ejercicio 19

{
  const toys = [
    { id: 5, name: 'Buzz MyYear' },
    { id: 11, name: 'Action Woman' },
    { id: 23, name: 'Barbie Man' },
    { id: 40, name: 'El gato con Guantes' },
    { id: 40, name: 'El gato felix' }
  ]
  for (let i = 0; i < toys.length; i++) {
    if (toys[i].name.includes('gato')) {
      toys.splice(i, 1)
      i--
      console.log(toys)
    }
  }
}

// Ejercicio 20

const popularToys = []
const toys = [
  { id: 5, name: 'Buzz MyYear', sellCount: 10 },
  { id: 11, name: 'Action Woman', sellCount: 24 },
  { id: 23, name: 'Barbie Man', sellCount: 15 },
  { id: 40, name: 'El gato con Guantes', sellCount: 8 },
  { id: 40, name: 'El gato felix', sellCount: 35 }
]
for (const toy of toys) {
  if (toy.sellCount >= 15) {
    popularToys.push(toy)
  }

  console.log(popularToys)
}

// Ejercicio 21

const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]

for (const age of users) {
  if (age.years >= 18) {
    console.log('usuarios mayores de edad:' + age.name)
  } else {
    console.log('usuarios menores de edad: ' + age.name)
  }
}

// Ejercicio 22
const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]
for (let i = 0; i < foodSchedule.length; i++) {
  if (foodSchedule[i].isVegan === false) {
    foodSchedule[i].name = fruits.shift()
    foodSchedule[i].isVegan = true
  }
  console.log(foodSchedule)
}

//  Ejercicio 23
const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]

const movieSmall = []
const movieMedium = []
const movieLarge = []

for (let i = 0; i < movies.length; i++) {
  if (movies[i].durationInMinutes < 100) {
    movieSmall.push(movies[i])
  } else if (movies[i].durationInMinutes > 200) {
    movieLarge.push(movies[i])
  } else {
    movieMedium.push(movies[i])
  }
  console.log(movieSmall)
  console.log(movieMedium)
  console.log(movieLarge)
}

//   Ejercicio  24
{
  const products = [
    { name: 'Funko Dr. Strange', sellCount: 10 },
    { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
    { name: 'Sable laser FX', sellCount: 23 },
    { name: 'Varita de Voldemort', sellCount: 6 }
  ]
  let totalVentas = 0
  for (let i = 0; i < products.length; i++) {
    totalVentas += products[i].sellCount
    console.log(totalVentas)
  }
}

//   Ejercicio  25
{
  const products = [
    { name: 'Funko Dr. Strange', sellCount: 10 },
    { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
    { name: 'Sable laser FX', sellCount: 23 },
    { name: 'Varita de Voldemort', sellCount: 6 }
  ]
  let sum = 0
  for (let i = 0; i < products.length; i++) {
    sum += products[i].sellCount
    const average = sum / products.length

    console.log(sum)
    console.log(average)
  }
}

//   Ejercicio  26
{
  const goodProducts = []
  const badProducts = []
  const products = [
    { name: 'Funko Dr. Strange', sellCount: 10 },
    { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
    { name: 'Sable laser FX', sellCount: 23 },
    { name: 'Varita de Voldemort', sellCount: 6 }
  ]
  for (const product of products) {
    if (product.sellCount > 20) {
      goodProducts.push(product.name)
    } else {
      badProducts.push(product.name)
    }
  }
  console.log(goodProducts)
  console.log(badProducts)
}
