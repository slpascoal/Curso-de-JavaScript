function meuEscopo (){ //protegendo meu script
    //variáveis de atribuição dos elementos do html
    const form = document.querySelector('.form') //atribuindo o formulário a constante form, atraves da classe form
    const resultado = document.querySelector('.resultado') //atribuindo a div à constante resultado, atraves da classe resultado

    //variáveis para o código
    const pessoas = []

    form.addEventListener('submit', recebeEventoForm) //ao enviar o formulário (clique no botão), executar a função recebeEventoForm

    function recebeEventoForm(evento){ 
        evento.preventDefault() //evita o regarregamento da página, pois, ao regarregar a página, perdemos as informações no console, além do nosso script ser regarregado
        
        const nome = form.querySelector('.nome') //atribuindo os valores do campo nome do formulário
        const sobrenome = form.querySelector('.sobrenome') //atribuindo os valores do campo sobrenome do formulário
        const peso = form.querySelector('.peso') //atribuindo os valores do campo peso do formulário
        const altura = form.querySelector('.altura') //atribuindo os valores do campo altura do formulário

        pessoas.push({ //armazenando cada dado no array pessoas
            nome: nome.value,
            sobrenome : sobrenome.value,
            peso : peso.value,
            altura : altura.value,
        })

        console.log(pessoas)

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}, Peso: ${peso.value}, Altura: ${altura.value}</p>` //.innerHTML é uma função que adciona uma linha de código html. Portanto, estamos adicionando na div resultado, cada pessoa armazenada previamente no array pessoas
    }
}

meuEscopo() //execução do nosso script