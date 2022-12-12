// Todos os conceitos de Javacript - Básico serão aplicados aqui 

//criação de variavel let
let mensagem = "Olá"
mensagem = "Olá"

//criação de constante
const pi = 3.14

//atribuições e incrementos
let num1 = 1
let num2 = 3
num1++
num2--

//operações aritméticas
const resultado = num1 / num2

//objeto Math
let aleatorio = Math.round(Math.random() * (100 - 0) + 0)

//strings
let minhaString = "Ola Mundo"

//array
const alunos = ['ana', 'maria']

alunos.push('silas')

//funções
function somar(num1, num2) {
    return num1 + num2
}

let minhaSoma = somar(2, 3)

//objeto
function criaPessoa(nome, idade) {
    return{ 
        nome: nome,
        idade: idade,
        
        fala() {
            console.log(`Sou uma pessoa, meu nome é ${this.nome} e tenho ${this.idade} anos`)
        }
    };
}

const pessoa1 = criaPessoa('silas', 21)
const pessoa2 = criaPessoa('maria', 20)

//Console.log para exibir os resultados
console.log('*Variaveis, console.log e constantes')
console.log(`${mensagem}, o número PI é= ${pi}`)
console.log('-----------------')
console.log('*operações aritméticas')
console.log(resultado)
console.log('-----------------')
console.log('*objeto math')
console.log(`as chances de chover hoje são de: ${aleatorio}%`)
console.log('-----------------')
console.log('*strings')
console.log(minhaString.match('a'))
console.log('-----------------')
console.log('*array')
console.log(alunos)
console.log('-----------------')
console.log('*funções')
console.log(minhaSoma)
console.log('-----------------')
console.log('*objeto')
pessoa1.fala()
pessoa2.fala()
console.log('-----------------')