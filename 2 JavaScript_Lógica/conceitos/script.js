// Todos os conceitos de Javacript - Lógica serão aplicados aqui 

//operadores de comparação
function comparacao(num1 = 0 , num2 = 0){
    return num1 > num2
}

//Operadores Lógicos
function logicos(){
    return !true || false
}

//Short-Circuit
function ola(){
    return 'ola'
}

let vaiExecutar = true

//if, else if e else
function se(){
    const lampada = 'funcionando'
    let resultado = 0

    if (lampada === 'queimada' || lampada === 'sem lâmpada') {
        resultado = 'trocar lâmpada'
    }else if(lampada === 'funcionando'){
        resultado = 'lâmpada está funcionando'
    }else{
        resultado = 'não há lâmpada'
    }

    return resultado
}

//operador ternário
function ternario(){
    const nota = 5

    return nota >= 6 ? 'Aprovado' : 'Reprovado'
}

//Objeto Date
function date(){
    const data = new Date()

    return data.toString()
}

//Switch/Case
function calculadora(num1 = 0, num2 = 0, menu = 0){ 
    let resultado = 0

    switch(menu){
        case 1:
            resultado = 'Adição: '
            resultado += num1 + num2
            break
        case 2:
            resultado = 'Subtração: '
            resultado += num1 - num2
            break
        case 3:
            resultado = 'Multiplicação: '
            resultado += num1 * num2
            break
        case 4:
            resultado = 'Divisão: '
            resultado += num1 / num2
            break
        default:
            resultado = `Selecione uma opção de 1 a 4`
    }

    return resultado
}

//Atribuição via desestruturação (Arrays)
function atribuicaoArrays(){
    const numeros = [1,2,3,4]
    const [primeiro, segundo] = numeros

    //             1         2      
    console.log(primeiro, segundo)
}

//Atribuição via desestruturação (Objetos)
function atribuicaoObjeto(){
    const pessoa = {
        nome: 'silas',
        idade: 21
    }

    const {nome, idade} = pessoa
    console.log(nome,idade)
}

//for
function lacofor(x){ 
    for(let i = 0; i<=x; i++){
        console.log(i)
    }
}

//For in
function forin(){
    let frutas = ['maça', 'uva', 'abacaxi']

    for(let i in frutas){
        console.log(frutas[i])
    }
}

// For of - Estrutura de repetição
function forof(){
    let nome = 'Silas'

    for(let i of nome){
        console.log(i)
    }
}

//While e Do While - Estrutura de repetição
function dowhile(){
    function random(min,max){
        const r = Math.random() * (max-min) + min
        return Math.floor(r)
    }

    let min = 1
    let max = 10
    let rand = random(min,max)
    
    while(rand !== 9){
        rand = random(min,max)
        console.log(rand)
    }
}

//resultados dos conceitos
console.log(`* operadores de comparação`)
console.log(comparacao(2,3))
console.log('------------------')
console.log(`* Operadores Lógicos`)
console.log(logicos())
console.log('------------------')
console.log(`* Short-Circuit`)
console.log(vaiExecutar || ola())
console.log('------------------')
console.log(`* if, else if e else`)
console.log(se())
console.log('------------------')
console.log(`* operador ternário`)
console.log(ternario())
console.log('------------------')
console.log(`* Objeto Date`)
console.log(date())
console.log('------------------')
console.log(`* Switch/Case`)
console.log(calculadora(2,2,4))
console.log('------------------')
console.log(`* Atribuição via desestruturação (Arrays)`)
atribuicaoArrays()
console.log('------------------')
console.log(`* Atribuição via desestruturação (Objetos)`)
atribuicaoObjeto()
console.log('------------------')
console.log(`* for`)
lacofor(5)
console.log('------------------')
console.log(`* for in`)
forin()
console.log('------------------')
console.log(`* for of`)
forof()
console.log('------------------')
console.log(`* while`)
dowhile()
console.log('------------------')