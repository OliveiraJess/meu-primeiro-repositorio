//campos selecao
// const inputSelect = document.querySelector('input[name="opcao"]:checked')
// const valorTaxa = document.querySelector('#'+inputSelect)




const inputValorInicial = document.querySelector('#valorInicial')
const inputAporteMensal = document.querySelector('#aporteMensal')
const inputMeses = document.querySelector('#meses')
const botaoCalcular = document.querySelector('#calcular')
// Conta 

// rende = valor inicial * (1+taxa)^meses + (aporte * ((1+taxa)^meses -1)/taxa)`

botaoCalcular.addEventListener('click', calcular)


function validaTaxa(taxa, fonteCredito) {
    let taxasPadrao = {
        "picPay": 120.0 * 0.005,
        "nubank": 100.0 * 0.005,
        "poupanca": 2.4,
    }


    if (taxa === '') {
        return taxasPadrao[fonteCredito]
    }

    if (fonteCredito === "personalizado") {
        return parseFloat(taxa)
    }
    return parseFloat(taxa) * 0.005


}

function calcular() {
    let valorInicial = parseFloat(inputValorInicial.value)
    let aporteMensal = parseFloat(inputAporteMensal.value)
    let meses = parseInt(inputMeses.value)
    let fonteCredito = document.querySelector('input[name="opcao"]:checked').value
    let inputTaxa = document.querySelector('#' + fonteCredito).value

    let taxa = validaTaxa(inputTaxa, fonteCredito)


    let rende = valorInicial * (1 + taxa) ^ meses + (aporteMensal * ((1 + taxa) ^ meses - 1) / taxa)

    console.log(rende)
}
