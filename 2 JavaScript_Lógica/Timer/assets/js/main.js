function escopo(){
    function criarHora(segundo){
        const data = new Date(segundo * 1000)
        return data.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'GMT'
        })
    }

    const container = document.querySelector('.container')
    const timer = document.querySelector('#timer')
    const iniciar = document.querySelector('.iniciar')
    const pausar = document.querySelector('.pausar')
    const zerar = document.querySelector('.zerar')
    let segundos = 0
    let cronometro = 0

    function iniciarTimer(){
        cronometro = setInterval(function(){
            segundos++
            timer.innerHTML = criarHora(segundos)
        },1000)
    }

    iniciar.addEventListener('click', function(e){
        timer.classList.remove('pause')
        clearInterval(cronometro)
        iniciarTimer()
    })

    pausar.addEventListener('click', function(e){
        timer.classList.add('pause')
        clearInterval(cronometro)
    })

    zerar.addEventListener('click', function(e){
        timer.classList.remove('pause')
        clearInterval(cronometro)
        segundos = 0
        timer.innerHTML = criarHora(0)
    })    
}

escopo()