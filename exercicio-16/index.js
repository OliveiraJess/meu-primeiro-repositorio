const time = 5000

function buscarNoBancoDeDados (){
setTimeout(function exibirTempo () {
    console.log(`Esperei ${time/1000}s para ancontecer`)
}, time);
}

console.log('iniciando')
// console.log("resultado do meu banco de daodo:" + buscarNoBancoDeDados())
buscarNoBancoDeDados()
console.log('fim')
