// Escreva um código que exiba os números divisiveis por "D" de 0 à "X"
//    > [valor x=10 | valor d=3 | 0,3,6,9]\
//    > [valor x=20 | valor d=5 | 0,5,10,15,20]

// console.log("números divisiveis por 3")
// d = 3
// x = 10
// for(var i = 0; i <= x; i++){
//    if (i % d == 0)
//     console.log(i);
// }

// console.log("números divisiveis por 5")
// d = 5
// x = 20
// for(var i = 0; i <= x; i++){
//    if (i % d == 0)
//     console.log(i);
// }

// Escreva a contagem crescente ou decrescente de um número
//    > [valor a=3 | valor b= -1 | 3,2,1,0,-1]\
//    > [valor a=-1 | valor b= 3 | -1,0,1,2,3]

// console.log("contagem decrescente")
// a = 3
// b = -1
// for (var i = a; i>=b; i--) {
//     console.log(i)
// }

// console.log("contagem crescente")
// a = -1
// b = 3
// for (var i = a; i<=b; i++) {
//     console.log(i)
// }

// Escreva a taboada de um número
//    > [t3 = 1x3=3, 2x3=6 3x3=9]

// console.log("tabuada")
// t = 3
// for (var i = 0; i <=10; i++) {
//     r = (i * t)
//     console.log(r)
// }

// Escreva o fatorial de um número entre (1 e 21) e exiba seu fatorial
//    > [f1 = 1x1 = 1]\
//    > [f2 = 2x1 = 2]\
//    > [f3 = 3x2x1 = 6]

// console.log("fatorial")
// ft = 1
// for (var i = ft-1; i>=1; i--) {
//     ft =  ft * i
// }
// console.log(ft)
// console.log("fatorial")

// ft = 2
// for (var i = ft-1; i>=1; i--) {
//     ft =  ft * i
// }
// console.log(ft)

// console.log("fatorial")
// ft = 3
// for (var i = ft-1; i>=1; i--) {
//     ft =  ft * i
// }
// console.log(ft)

// Supondo que um estacionamento tenha 20 vagas disponibilizadas em 4 fileiras com 5 colunas, onde são nomeadas de A1~
// D5. Escreva um código que deve fazer uma contagem de quantas vagas estão livres, quantas vagas estão ocupadas e quais
// as vagas que estão ocupadas. Sendo que as vagas devem ser uma entrada de dados que digitará`A3`por exemplo e o
// código deve marcar essa vaga como ocupada, caso ja esteja ocupada, informar que a vaga esta ocupada e informar quais
// estao disponíveis. Neste contexto, se preocupe somente com a chegada de carro, não é necessário implementar a remoção
// dos carros.

const prompt = require('prompt-sync')();


// monta o estacionamento
estacionamento = {}
letras_numero = {
    1: "A",
    2: "B",
    3: "C",
    4: "D"
}

for (var linha = 1; linha <= 4; linha++) {
    var letra_vaga = letras_numero[linha]
    for (var coluna = 1; coluna <= 5; coluna++) {
        var numero_vaga = coluna.toString()
        var vaga = letra_vaga + numero_vaga
        estacionamento[vaga] = false
    }
}


// interface com o usuário
option = 0
while (option < 2) {
    var option = prompt('Digite a opção desejada (1 - Escolher vaga, 2 - Sair do programa)?: ');
    if (option == 1) {
        var vaga = prompt('Qual vaga deseja ocupar?: ');
        if (estacionamento[vaga]) {
            vagas_disponiveis = []
            console.log("A vaga " + vaga + " já esta ocupada, escolha uma outra vaga (seguintes oções)")
            for (var chave in estacionamento) {
                console.log(estacionamento[chave] )
                if (estacionamento[chave] == false) {
                    vagas_disponiveis.push(chave)
                }
            }
            console.log(vagas_disponiveis)
        }
        else {
            estacionamento[vaga] = true
        }
    }
}

console.log(estacionamento)