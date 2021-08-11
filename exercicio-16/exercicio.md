# Exercício da aula-16

Com base nos conhecimentos adquiridos no módulo de JS desenvolva:

Desenvolva um código que tenha como base um jogo de tabuleiro que ocorre em turnos:

* Este tabuleiro deve ter um número aleatório de casas, onde deve ser definido no inicio da partida e não pode ser menor
  que 10 casas.
* Nesse tabuleiro 40% das casas devem possuir uma ação
    * avançar 2 casas
    * recuar 2 casas
    * permanecer 2 rodadas parado
    * rolar o dado novamente
* Cada turno do jogo, um "dado" de 6 lados (1~6) deve ser "lançado" e fazendo com que o jogador avance o número de casas
  descritas no "dado".
* A ação de rolar os dados deve demorar 1s para acontecer
* O jogo só se encerra quando o jogador chegar à ultima casa do tabuleiro
* Se o jogador lançar o dado e o valor descrito no dado superar o número de casas do tabuleiro, o mesmo só poderá
  avançar até a ultima casa do tabuleiro
* Toda vez que o dado for lançado deve ser exibido em tela "o dado foi lançado e caiu X"
* Todo movimento do usuário deve ser descrito em tela como "usuário move-se da 1ª casa para a 2ª casa"
* Ao chegar no final deve se exibir uma mensagem "o usuário chegou ao fim"
