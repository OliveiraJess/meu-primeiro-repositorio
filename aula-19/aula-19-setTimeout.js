function esperar (batata) {
    setTimeout (batata, 5000)
}

function ola () {
    console.log("Oi", new Date)
}

function tchau () {
    console.log("Tchau", new Date)
}
// ola()
esperar (ola)
esperar (tchau)