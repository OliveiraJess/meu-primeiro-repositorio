# Exercício aula-25

Com base no modelo iniciado em aula, desenvolva um "Campo Minado"

## Definições:

1. O tabuleiro deve conter 16 linhas contendo 16 campos em cada linha, formando assim um tabuleiro de 16x16
1. Ao clicar em cada campo com o botão **esquerdo** do _mouse_, o campo clicado deve ser "aberto" mudandoseu estilo visual
1. Ao clicar em cada campo com o botão **direito** do _mouse_, o campo clicado deve ser marcado ou desmarcado mudandoseu estilo visual
1. Ao **abrir** um campo devemos ter os seguintes estados:
    - campo aberto
    - campo aberto perigo
    - campo aberto bomba explodido
    - campo aberto bomba
1. Ao executar  comando de **abrir**, o mesmo deve deve abrir o campo atual assim como os 8 possiveis campos a sua volta, que por sua vêz devezem abrir os 8 possiveis campos a sua volta também, porém estes possíveis campos vão ser aberto enquanto não ouver um `campo aberto perigo` ou `marcado`
1. Ao executar  comando de **marcar** , o mesmo não pode mais ser aberto
1. Ao abrir um campo que contenha bomba deve exibir uma mensagem dizendo que perdeu, todas as bombas deve ficar como aberta e deve impedir que os outros campos sejam clicados
1. O jogo termina exibindo uma mensagem de vitória quando todos os campos forem abertos e minas marcadas
1. O Jogo deve permitir marcar no máximo 128 campos, caso se queira marcar mais, deve exibir mensagem e não executar a ação
1. O jogo deve conter um botão reset que reseta todos os campos para o estado inicial gera aleatóriamente as bombas

    

