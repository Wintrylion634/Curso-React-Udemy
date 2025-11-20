// 1 - var, let e const

var x = 10;
var y = 20;

if (y > 10) {
    var x = 30;
    console.log(x); // 30
}

// 2 - Arrow Function, função simplificada que resolve pproblemas de referencia de objeto e escopo

//Jeito antigo
const soma = function (a, b) {
    return a + b;
}

const arrowSoma = (a, b) => a + b;

console.log(arrowSoma(30, 30))

const saudacao = (name) => {
    if (name) {
        return "Olá " + name + "!"
    } else {
        return "Olá!"
    }
}

console.log(saudacao("Nathan"))
console.log(saudacao())

const testeArrow = () => console.log("Estou testando !!!!!!!!!!!");

testeArrow();

const user = {
    name: "Nathan",
    sayUserName() {
        var self = this
        setTimeout(function () {
            console.log(self);
            console.log('Username: ' + self.name)
        }, 500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log('Username: ' + this.name)
        }
        ), 700
    }
}
/* user.sayUserName()
user.sayUserNameArrow() */

// 3 - filter, ele filtra o array selecionado com base em alguma condição

const arr = [1, 2, 3, 4, 5]

const highNumber = arr.filter((n => {
    if (n >= 3) {
        return n
    }
}))

console.log(highNumber)

const users = [
    { name: 'Nathan', available: false },
    { name: 'Paulo', available: true },
    { name: 'João', available: false },
    { name: 'Maria', available: true },
]

const availableUsers = users.filter((user) => user.available)
const notavailableUsers = users.filter((user) => !user.available)

console.log(availableUsers);
console.log(notavailableUsers)

// 4 - map percorre um array e modifica alguma propriedade dele com base numa condição

const produtos = [
    { name: 'Camisa', price: 25.9, category: 'Roupas' },
    { name: 'Geladeira', price: 900.9, category: 'Eletro' },
    { name: 'Monitor', price: 150.9, category: 'Informática' },
    { name: 'Calça', price: 15.9, category: 'Roupas' },
]

produtos.map((produto => {
    if (produto.category === "Roupas") {
        produto.onSale = true
    }
}))

console.log(produtos)

//5 - Template Literals, literamente um template de exibição de texto em string onde podemos misturar variaveis e string sem necessidade de contatenação com + 

const string = "String"

const username = "Nathan"

const idade = 60;

const texto1 = `Estou numa ${string} de template literais`

const texto2 = `Meu nome é ${username} e eu tenho ${idade} anos`

console.log(texto1)
console.log(texto2)

// 6 - Destructuring, é uma dessestruturação de objetos e arrays em variaveis

const frutas = ["Maçã", "Banana", "Mamão", "Kiwi"];

const [f1, f2, f3, f4] = frutas;

console.log(f1)
console.log(f3)

const detalhesProdutos = {
    nome: "Mouse",
    preco: 50.6,
    categoria: "Periférico",
    cor: "Cinza"
}

const { nome: produtoNome, preco, categoria: produtoCategoria, cor } = detalhesProdutos

console.log(`O nome do produto é ${produtoNome}, custa R$${preco}, pertence a categoria ${produtoCategoria} `)

// 7 - Spread Operator, usado em arrays e objetos para constituir novos valores desses dados em outros arrays ou objetos. Podemos unir vários arrays

const a1 = [1, 2, 3]

const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

const a4 = [0, ...a1, 4]

console.log(a4)

const carName = { name: "Gol" }
const carBrand = { brand: "VW" }
const otherInfos = { km: 10000, price: 500000 }

const car = { ...carName, ...carBrand, ...otherInfos, wheels: 5 }

console.log(car);

// 8 - Classes, fundamentos de POO onde temos acessos ao constructor, props e methods

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const camisa = new Product("Camisa Gola V", 60);

console.log(camisa);

console.log(camisa.name);

console.log(camisa.productWithDiscount(10))

// 9 - Herança 

class ProductsWithColor extends Product {
    constructor(name, price, color) {
        super(name, price)
        this.color = color
    }

    showColor() {
        console.log("As cores são: ")
    }
}
