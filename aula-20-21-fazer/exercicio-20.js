const nascimento = document.querySelector('#nascimento')
const inputIdade = document.querySelector('#idade')
const inputNome = document.querySelector('#nome')
const inputSobrenome = document.querySelector('#sobrenome')
const botaoCadastrar = document.querySelector('#cadastrar')
const botaoLimpar = document.querySelector('#limpar')
const corpoTabela = document.querySelector('#corpoTabela')
const ordenarNome = document.querySelector('#ordenarNome')
const ordenarIdade = document.querySelector('#ordenarIdade')

let listaPessoas = []

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
    inputSobrenome.value = ''
    inputIdade.value = ''
    nascimento.value = ''
}

// Botão Limpar

botaoLimpar.addEventListener('click', () => {
    corpoTabela.innerHTML = ''
})

// Ordenar nome

ordenarNome.addEventListener('click', nomeOrdenar)

function nomeOrdenar() {
    alert("cliquei aqui")
}


// Ordenar idade

ordenarIdade.addEventListener('click', idadeOrdenar)

function idadeOrdenar() {
    ordenar()
}



function ordenar() {
    listaPessoas = []
    setPessoasLista()
    // listaPessoas.sort(funcaoOrdenacao)
    Limpar()
    setarListaOrdenada()
}

function setPessoasLista() {
    let listaTr = corpoTabela.querySelectorAll('tr')

    console.log(listaTr)

    for (let tr = 0; tr < listaTr.length; tr++) {
        let listaTd = listaTr[tr].querySelectorAll('td');
        listaPessoas.push({
            nomeCompleto: listaTd[0].innerText, idade: listaTd[1].innerText
        })
    }
    console.log(listaPessoas)
}

// function nomeOrdenar() {

// }

// function idadeOrdenar(a, b) {
//     return a.idade - b.idade
// }

function setarListaOrdenada() {
    for (let i = 0; i < listaPessoas.length; i++) {
        let pessoa = listaPessoas[1];
        novoElementoNaTabela(pessoa.nomeCompleto, pessoa.idade)
    }
}

function novoElementoNaTabela(nomeCompleto, idade) {
    let novaLinha = document.createElement('tr')
    let novoNomeCompleto = document.createElement('td')
    let novaIdade = document.createElement('td')

    var conteudoNomeCompleto = document.createTextNode(nomeCompleto)
    var conteudoIdade = document.createTextNode(idade)

    novoNomeCompleto.appendChild(conteudoNomeCompleto)
    novaIdade.appendChild(conteudoIdade)

    novaLinha.appendChild(novoNomeCompleto);
    novaLinha.appendChild(novaIdade);

    corpoTabela.appendChild(novaLinha)

}



// Testar código abaixo

// const ordenarTabela = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

// const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
//     v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
//     )(ordenarTabela
//     (asc ? a : b, idx), ordenarTabela
// (asc ? b : a, idx));

// // do the work...
// document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
//     const table = th.closest('table');
//     Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
//         .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
//         .forEach(tr => table.appendChild(tr) );
// })));
