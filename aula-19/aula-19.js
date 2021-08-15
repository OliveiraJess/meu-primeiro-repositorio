// function converterDolar(valorReais) {
//     return valorReais*5.25
// }
// console.log(converterDolar)

// var valor = 100 + 37*2 - 90
// var valorDolar = converterDolar(valor)

// console.log(valorDolar)

function consultarCotacaoDolar(algoQueVaiAcontecerNoFuturo) {
    console.log("consultarCotacaoDolar: Iniciando consulta de cotação")
    setTimeout(function () {
        console.log("consultarCotacaoDolar: Consulta finalizada")
        algoQueVaiAcontecerNoFuturo(5.25)
        return 5.25
    }, 5000)
}

function converterDolar(valorReais, algoQueVaiAcontecerNoFuturo) {
    consultarCotacaoDolar(function (cotacao) {
        console.log("converterDolar: Fui avisado que a consulta foi feita", cotacao)
        var valorDolar = valorReais * cotacao
        algoQueVaiAcontecerNoFuturo()
    })
}

var valor = 100 + 37 * 2 - 90
converterDolar(valor, function (resultado) {
    console.log("principal: Fui avisado que o calculo de cotação está pronto", resultado)
})

