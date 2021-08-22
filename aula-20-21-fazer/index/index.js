const inputAnoNascimento = document.querySelector('#AnoNascimento');
const inputIdade = document.querySelector('#Idade');
const inputNome = document.querySelector('#Nome');
const inputSobrenome = document.querySelector('#Sobrenome');
const buttomCadastrar = document.querySelector('#Cadastrar');
const buttomlimpar = document.querySelector('#Limpar');
const tbody = document.querySelector('#MinhaLista');

inputAnoNascimento.addEventListener('change', () => {
    inputIdade.value = calcularIdade()
})

buttomCadastrar.addEventListener('click', cadastrar)

buttomlimpar.addEventListener('click', limpar)

function fezAniversarioNesseAno(hoje, nascimento) {
    return hoje.getFullYear() - nascimento.getFullYear();
}

function naoFezAniversarioNesseAno(hoje, nascimento) {
    return (hoje.getFullYear() - nascimento.getFullYear()) - 1;
}

function calcularIdade() {
    let nascimento = new Date(inputAnoNascimento.value);
    let hoje = new Date();
    let idadeCalculada;

    console.log(nascimento.getUTCDate()) // retorna o dia (1~31) sem levar em conta o fuso horário
    console.log(nascimento.getUTCMonth()) // retorna o mês (0~11) sem levar em conta o fuso horário
    console.log(nascimento.getFullYear()) // retorna os 4 dígitos do ano

    console.log(nascimento.getDay()) // retorna o dia da semna (1~7) utilizando nosso fuso horário
    console.log(nascimento.getMonth()) // retorna o mês (0~11) utilizando nosso fuso horário
    console.log(nascimento.getFullYear()) // retorna os 4 dígitos do ano

    if (nascimento.getUTCMonth() >= hoje.getUTCMonth()) {
        if (nascimento.getUTCDate() <= hoje.getUTCDate()) {
            idadeCalculada = fezAniversarioNesseAno(hoje, nascimento);
        } else {
            idadeCalculada = naoFezAniversarioNesseAno(hoje, nascimento);
        }
    } else {
        idadeCalculada = naoFezAniversarioNesseAno(hoje, nascimento);
    }

    return idadeCalculada;
}

function cadastrar() {

        let novaLinha = document.createElement("tr");
        let novoNomeCompleto = document.createElement("td");
        let novaIdade = document.createElement("td");

        var conteudoNomeCompleto = document.createTextNode(`${inputNome.value} ${inputSobrenome.value}`);
        var conteudoIdade = document.createTextNode(`${inputIdade.value}`);

        novoNomeCompleto.appendChild(conteudoNomeCompleto);
        novaIdade.appendChild(conteudoIdade);

        novaLinha.appendChild(novoNomeCompleto)
        novaLinha.appendChild(novaIdade)

        tbody.appendChild(novaLinha)

        resetForm();
}

function resetForm(){
    inputNome.value = "";
    inputSobrenome.value = "";
    inputAnoNascimento.value = "";
    inputIdade.value = "";
}

function limpar(){
    tbody.innerHTML = '';

}


