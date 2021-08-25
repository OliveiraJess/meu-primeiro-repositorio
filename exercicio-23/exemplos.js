// Exemplos de como usar forEach, itera
// Se você der push com mais elementos para o exemplo iterado ( pedidos ), 
//esse valor será ignorado nesse mesmo forEach.


let frutas = [
    "Banana",
    "Uva",
    "Maracuja",
    "Morango"
];

// for (i = 0; i < frutas.length; i++) {
// console.log(frutas[i]);
// }

frutas.forEach(fruta => console.log(fruta));

//Lista de Pedidos
let pedidos = [
    { 'id': 420, 'nome': 'Dener', 'alimento': 'Sandubão de Bacon', 'bebida': 'Suco Limão' },
    { 'id': 152, 'nome': 'Naiady', 'alimento': 'Sandubão Vegano', 'bebida': 'Suco de Laranja' },
    { 'id': 29, 'nome': 'Marcio', 'alimento': 'Coxinha', 'bebida': 'Suco de Uva' },
    { 'id': 33, 'nome': 'Isabel', 'alimento': 'Sandubão de Picanha', 'bebida': 'Refrigerante' },
    { 'id': 55, 'nome': 'José', 'alimento': 'Pizza', 'bebida': 'Refrigerante' }
];

//Iterador forEach
pedidos.forEach((pedido, index) => {
    let { nome, alimento, bebida } = pedido;
    console.log(`${index} - O Cliente: ${nome} fez o pedido do alimento: ${alimento} e a bebida: ${bebida}.`);
})

// Exemplos de Map, itera e altera
// O método Map além de iterar todo o Array ele é muito bom para editar o iterado ( resumindo o Array ).

//Iterador Map
pedidos.map((pedido) => {

    if (pedido.alimento == 'Coxinha') {
        return pedido.alimento = 'Não temos no momento';
    }

});

console.log(pedidos)

// Exemplo Filter, filtra pela categoria
//Esse método deve ser utilizado quando temos a necessidade de filtrar nossa lista.

let filter = pedidos.filter((pedido) => {

    return pedido.bebida == 'Refrigerante'

});

console.log(filter)

//Exemplo Find, 
// Procura e te retorna 1º o primeiro valor encontrado da array
// O Find eu utilizo muito quando temos a propriedade id em nosso Array.

let find = pedidos.find((pedido) => {

    return pedido.id == 420

});

console.log(find)

// Exemplo Push
// Adicione elementos na lista

var esportes = ['futebol', 'beisebol'];
var total = esportes.push('handebol', 'natacao');

console.log(esportes); // ['futebol, 'beisebol', 'handebol', 'natacao']
console.log(total);  // 4

// Exemplo Pop
// Remove o último elemento de um array e retorna aquele elemento.

var meuPeixe = ['acara-bandeira', 'palhaco', 'mandarim', 'esturjao'];
console.log(meuPeixe); // ['acara-bandeira', 'palhaco', 'mandarim', 'esturjao']

var meuPeixePop = meuPeixe.pop();
console.log(meuPeixe); // ['acara-bandeira', 'palhaco', 'mandarim' ]
console.log(meuPeixePop); // 'esturjao'