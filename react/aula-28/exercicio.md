# Exercício aula-28

Com  base no projeto iniciado com o create-react-app durante as aulas 27 e 28, desenvolva uma aplicação que tenha como padão o [pokedex](https://www.pokemon.com/br/pokedex/). Dito isso, de andamento com a contrção do código para que atenda os seguintes requisitos:

1. O `index.js` deve apenas importar o `App.jsx` e no máximo um css se necessário.
1. O `App.jsx` deve ter apenas o componente `Card.jsx` 
1. O `App.jsx` deve ser capaz de interpretar uma lista de [objetoCard](#obejtoCard) e converte cada item da lista em um `li` para que no app seja exibido uma lista de cards dinâmicamente
1. O `Card.jsx` tem que ser capaz de receber as propriedades `nome`, `numero` e `atributo`
1. Tendo em vista que a propriedaded `número` deve ser capaz de representar o númer do card assim como atribuir a imagem ao card
1. Tendo em vista que a propriedaded `atributo` deve ser capaz de interpretar um lista de _strings_ e com isso exibir uma lista do componente `Atributo.jsx`
1. O `Card.jsx` deve possuir uma lógica que valide se a propriedade `atributo` possui elementos, caso não exista deve ser exibido apenas um atributo `normal`, caso tenha mais de dois, deve exibir apenas os dois primeiros 
1. O `App.jsx` deve possuir uma lista de cards de no mínimo 10 elementos
1. O prazo de entrega da atividade é dia 06/9/2021 às 19:20 


<label for=obejtoCard> obejtoCard:  </label>
<code id="obejtoCard">{
    nome: "Bulbasaur",
    numero: "Nº001",
    atributo: [
        "planta", "veneno"
    ]
}</code>
