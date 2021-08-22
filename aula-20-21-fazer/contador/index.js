let input = document.querySelector('#Valor');
const inc = document.querySelector('#Inc');
const dec = document.querySelector('#Dec');

inc.addEventListener('click', incrementar);
dec.addEventListener('click', decrementar);

function incrementar() {
    input.value++
}

function decrementar() {
    input.value--
}
