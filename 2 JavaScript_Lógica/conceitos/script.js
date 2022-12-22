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

//Break e Continue
function breakContinue(){
    const numeros = [1,2,3,4,5]

    for ( let numero of numeros){
        if (numero === 2){
            console.log('Pulei o 2')
            continue
        }

        console.log(numero)

        if(numero === 4){
            console.log('4 encontrado, saindo...')
            break
        }
    }
}

//exercicio de lógica 1 
const ePaisagem = (largura, altura) => largura > altura 

//exercicio de lógica 2
function exercicio2(num1 = 0){
    if(num1 > 100 || num1 < 0){
        return 'O numero é maior que 100 ou menor que 0'
    }else if (num1 % 3 === 0 && num1 % 5 === 0){
        return 'FizzBuzz'
    }else if(num1 % 3 !== 0 && num1 % 5 !== 0){
        return num1
    }else if(num1 % 3 === 0){
        return 'Fizz'
    }else if(num1 % 5 === 0){
        return 'Buzz'
    }else if (typeof num1 !== 'number'){
        return NaN
    }else {
        return 'Insira um valor'
    }
}

//Tratando e lançando erros (try, catch, throw)
function soma(num1, num2){
    if( typeof num1 !== 'number' || typeof num2 !== 'number'){
        throw ('num1 ou num2 não são números')
    }
    return num1+num2
}

//setInterval e setTimeout
function setIntervalSetTimeout(){
    function falaOi(){
        return 'oi'
    }

    const mensagem = setInterval(function(){
        console.log(falaOi())
    }, 1000)

    setTimeout(function(){
        clearInterval(mensagem)
    }, 3000)

    setTimeout(function(){
        console.log('chega de ola')
    },5000)
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
console.log(`* Break e Continue`)
breakContinue()
console.log('------------------')
console.log(`* exercicio de lógica 1`)
console.log(ePaisagem(10,50))
console.log('------------------')
console.log(`* exercicio de lógica 2`)
console.log(exercicio2(1000))
console.log('------------------')
console.log(`* Tratando e lançando erros (try, catch, throw)`)
try{
    console.log(soma(1,2))
    console.log(soma('1',2))
}catch(error){
    console.log(error)
}finally{
    console.log('**fim do tratamento de erros**')
}
console.log('------------------')
console.log(`* setInterval e setTimeout`)
console.log(setIntervalSetTimeout())
console.log('------------------')