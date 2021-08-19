const nascimento = document.querySelector('#nascimento')
const inputIdade = document.querySelector('#idade')
const inputNome = document.querySelector('#nome')
const inputSobrenome = document.querySelector('#sobrenome')
const botaoCadastrar = document.querySelector('#cadastrar')
const botaoLimpar = document.querySelector('#limpar')
const corpoTabela = document.querySelector('#corpoTabela')


// Calcular idade

nascimento.addEventListener('change', () => {
    let dataNascimento = new Date(nascimento.value)
    let hoje = new Date()
    let idade;

    if (dataNascimento.getMonth() >= hoje.getMonth()) {
        if (dataNascimento.getDay() >= hoje.getDay()) {
            idade = hoje.getFullYear() - dataNascimento.getFullYear()
        } else {
            idade = hoje.getFullYear() - (dataNascimento.getFullYear() + 1)
        }
    }
    else { idade = hoje.getFullYear() - dataNascimento.getFullYear() }

    inputIdade.value = idade;
})

// Botão cadastrar

botaoCadastrar.addEventListener('click', cadastrar)

function cadastrar() {
    let novaLinha = document.createElement('tr');
    let novoNomeCompleto = document.createElement('td');
    let novaIdade = document.createElement('td');

    let conteudoNomeCompleto = document.createTextNode(inputNome.value + inputSobrenome.value);
    let conteudoIdade = document.createTextNode(inputIdade.value);

    novoNomeCompleto.appendChild(conteudoNomeCompleto)
    novaIdade.appendChild(conteudoIdade)

    novaLinha.appendChild(novoNomeCompleto)
    novaLinha.appendChild(novaIdade)

    corpoTabela.appendChild(novaLinha)

    inputIdade.value = ''
    inputSobrenome.value =''
    inputIdade.value = ''
    nascimento = ''
}

// Botão Limpar

botaoLimpar.addEventListener('click', () => {
    corpoTabela.innerHTML = ''
})

// Botão Ordenar, se clicar no nome ou idade
