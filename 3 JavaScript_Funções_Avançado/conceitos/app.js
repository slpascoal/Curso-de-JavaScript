//declarações de funções
const falaOi = function(){
    console.log('oi')
}

//Parâmetros da função
function parametro() {
    console.log(arguments)
}

//retorno de função
function multiplicador(multiplicador){
    return function(n){
        return n * multiplicador
    }
}
const duplica = multiplicador(2) //duplica recebe uma função
                                 //que retornará número vezes multiplicador

//Escopo léxico
const num = 1

function contar(){
    console.log(num)
}

function usarContar(){
    const num = 2
    contar()
}

//console.log
falaOi()
parametro('ola','mundo','!')
console.log(duplica(3)) //resultado "6"
usarContar()