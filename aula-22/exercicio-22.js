const inputValorInicial = document.querySelector('#valorInicial')
const inputAporteMensal = document.querySelector('#aporteMensal')
const inputMeses = document.querySelector('#meses')
const botaoCalcular = document.querySelector('#calcular')

botaoCalcular.addEventListener('click', calcular)


function validaTaxa(taxa, fonteCredito) {
    console.log(taxa)
    console.log(fonteCredito)

    let taxasPadrao = {
        "picPay": 1.28 * 0.005,
        "nubank": 1.0 * 0.005,
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
    let valorInicial = parseFloat(inputValorInicial.value.replace(",", "."))
    let aporteMensal = parseFloat(inputAporteMensal.value.replace(",", "."))
    let meses = parseInt(inputMeses.value)
    let fonteCredito = document.querySelector('input[name="opcao"]:checked').value
    let inputTaxa = parseFloat(document.querySelector('#' + fonteCredito).value)
    let campoRende = document.querySelector("#rende")
    console.log(inputTaxa)
    let taxa = validaTaxa(inputTaxa, fonteCredito)


    let rende = (valorInicial * ((1 + taxa) ** meses)) + ((aporteMensal * ((((1 + taxa) ** meses) - 1))) / taxa)
    // Valor inicial ~ meses = a 
    // Aporte mensal ~ -1 = b
    // a + b/ taxa

    let montante = (valorInicial + (meses * aporteMensal) + rende).toString().replace(".", ",")


    campoRende.innerHTML = montante

}

