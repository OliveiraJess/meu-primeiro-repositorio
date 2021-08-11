// let foo = 'jackson'


// function nomeada (fooOpcional) {
//     console.log('funcão nomeada')
// }

// var minhaFuncao = nomeada

// var minhaFuncaoReduzida1 = function (fooOptional){
//     console.log('função anônima')
// }

// var minhaFuncaoReduzida2 = (fooOptional1, fooOptional2) => {
//     console.log('função por arraw function') 
//     console.log('função por arraw function') 
// }

// var minhaFuncaoReduzida3 = (fooOptional1, fooOptional2) => console.log('função por arraw function sem chaves para conteúdo de uma linha com multiplos parâmetros')


// var minhaFuncaoReduzida4 = foo => console.log('função por arraw function sem chaves para conteúdo de uma linha com único parametro')

// var minhaFuncaoReduzida5 = foo =>{
//     console.log('foo')
//     console.log('função por arraw function com chaves para conteúdo de multiplas linhas e com único parametro')  
// } 

// var minhaFuncaoReduzida6 = () => console.log('função por arraw function sem chaves para conteúdo de uma linhaa e sem parãmetros parametro')  
// var time =5000;
// var funcao1 = () => console.log("iniciou minha 1ª função")
// var funcao2 = () => console.log("iniciou minha 2ª função")
// var funcao3 = (callback) =>{
//     console.log('Buscando minhas informações do banco:')
//     callback()
// }



// var buscarInformacoesNoBanco = (callback) => {
//     setTimeout(() =>{
//          callback(funcao2)
//          console.log(`Esperei ${time/1000}s para ancontecer`)

//         }, time);
// }

// funcao1()
// buscarInformacoesNoBanco(funcao3)

// var time = 2000;
// var funcao1 = () => 10
// var funcao2 = (resp) => console.log(`A informacao obtida do banco é:${resp}`)

// var funcaoFoo = (callback) => {
//     let resp
//     setTimeout(() => resp = callback(3), time);
//     return  resp;
// }

// var setFoo
// var setFoo2

// var buscarInformacoesNoBanco = async (callback, callback2) => {
//     setfoo =callback()
//     let resp = await callback2(funcao2)
//     console.log(await resp)
//     setFoo2= 32

//     console.log(setfoo)
//     console.log(setFoo2)
// }

// buscarInformacoesNoBanco(funcao1, funcaoFoo)
var contador = 0
// while(true){
//     console.log(contador)
//     contador++
// }

// do{
//     console.log(contador)
//         contador++
// }while(contador < 10)

// for(let i = 0; i < 10; i++){

// }

function UserException(message) {
    this.message = message;
    this.name = "UserException";
 }

var carro = {
    'portas': 4,
    'potencia': '80cv'
}

function pegarGasolina(){
    if(carro.gasolina == undefined){
        throw new UserException('não tem gasolina')
    }else{
        return 3;
    }
}

try {
    pegarGasolina()
} catch (error) {
    console.log(error.message)
}

