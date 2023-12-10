//declarações de funções
const falaOi = function(){
    console.log('**declarações de funções**')
    console.log('oi')
}

//Parâmetros da função
function parametro() {
    console.log('**Parâmetros da função**')
    console.log(arguments)
}

//retorno de função
function multiplicador(multiplicador){
    console.log('**retorno de função**')
    return function(n){
        return n * multiplicador
    }
}
const duplica = multiplicador(2) //duplica recebe uma função
                                 //que retornará número vezes multiplicador

//Escopo léxico
console.log('**Escopo léxico**')
const num = 1

function contar(){
    console.log(num)
}

function usarContar(){
    const num = 2
    contar()
}

//Closures
function Closures(){
    console.log('**Closures**')
    function retornaFuncao(){
        const nome = 'Silas'
        return function(){
            return nome
        }
    }

    const funcao = retornaFuncao()
    console.dir(funcao)
}

//Funções de callback
function Callback(){
    console.log('**Funções de callback**')
    function f1(callback){
        console.log('f1')
        if (callback) callback()
    }
    function f2(callback){
        console.log('f2')
        if (callback) callback()
    }

    f1(function(){
        f2(function(){
            console.log('f3')
        })
    })
}

//Funções imediatas (IIFE)
function FunçõesImediatas(){
    (function(){
        console.log('**Funções imediatas (IIFE)')
        console.log('execução imediata!')
    })()
}

//Funções fábrica (Factory Functions)
function FuncoesFabrica(){
    console.log('**Funções fábrica (Factory Functions)')
    function criarPessoa(nome, altura, peso){
        return{
            nome : nome,
            altura : altura,
            peso : peso,
            imc(){
                const indice = this.peso / (this.altura ** 2)
                return indice.toFixed(1)
            }
        }
    }

    const p1 = criarPessoa('Silas', '1.74', '53')
    console.log(`${p1.nome} está com IMC de ${p1.imc()}`)
}

//console.log
falaOi()
parametro('ola','mundo','!')
console.log(duplica(3)) //resultado "6"
usarContar()
Closures()
Callback()
FunçõesImediatas()
FuncoesFabrica()