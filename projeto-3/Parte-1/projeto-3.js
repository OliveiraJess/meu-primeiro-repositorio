// saldo inicial
var valor_conta = {
    "carteira-fisica": 0,
    "conta-salario": 0,
    "banco-inter": 0,
    "app-picpay": 0,
    "reserva-de-emergência": 0,
    "investimentos": 0
};

// saldo inicial total e ultima atualizacao
document.getElementById("saldo-total-contas").textContent = "Saldo total contas: 0";
// document.getElementById("ultima-atualizacao").textContent = currentdate.getDate() + " " + currentdate.getHours() + currentdate.getMinutes();


function UpdateTotal() {
    var total = 0
    for (const [chave, valor] of Object.entries(valor_conta)) {
        total = total + valor
    }

    document.getElementById("saldo-total-contas").textContent = "Saldo total contas: " + total.toString();
}

// grana entrando, saindo
function SubmitBloco13(tipo_operacao) {
    if (tipo_operacao == "depositar") {
        var sel_conta = document.getElementById("conta-1")
        var conta = sel_conta.value;
        var valor = parseFloat(document.getElementById("valor-1").value);
        var text_conta = sel_conta.options[sel_conta.selectedIndex].text
    }
    else {
        var sel_conta = document.getElementById("conta-4")
        var conta = sel_conta.value;
        var valor = parseFloat(document.getElementById("valor-3").value) * -1;
        var text_conta = sel_conta.options[sel_conta.selectedIndex].text
    }

    // caso o usuario aceite depositar/sacar
    if (window.confirm("Tem certeza que deseja " + tipo_operacao + " esse valor?")) {
        if (Math.abs(valor) > valor_conta[conta] && tipo_operacao == "sacar") {
            alert("O valor a ser sacado é maior que o saldo na conta selecionada")
            document.getElementById("bloco3").reset();
        }
        else {
            valor_conta[conta] = valor_conta[conta] + valor;
            document.getElementById(conta).textContent = valor_conta[conta]
            alert("Saldo da conta " + text_conta + " atualizado (Novo saldo: " + valor_conta[conta] + ")");
        }
    }
    // caso não aceite (reseta o formulário)
    else {
        document.getElementById("bloco1").reset();
        document.getElementById("bloco3").reset();
    }
    UpdateTotal()

};

// grana viajando
function SubmitBloco2() {
    // conta origem
    var sel_conta2 = document.getElementById("conta-2")
    var conta2 = sel_conta2.value;

    // conta destino
    var sel_conta3 = document.getElementById("conta-3")
    var conta3 = sel_conta3.value;
    var text_conta3 = sel_conta3.options[sel_conta3.selectedIndex].text

    var valor2 = parseFloat(document.getElementById("valor-2").value);


    // caso o usuario aceite depositar
    if (window.confirm("Tem certeza que deseja transferir esse valor?")) {
        if (valor2 > valor_conta[conta2]) {
            alert("O valor a ser transferido é maior que o saldo na conta origem")
            document.getElementById("bloco2").reset();
        }
        else {
            valor_conta[conta2] = valor_conta[conta2] - valor2; // subtrai conta origem
            document.getElementById(conta2).textContent = valor_conta[conta2].toString();
            valor_conta[conta3] = valor_conta[conta3] + valor2; // add na conta destino
            document.getElementById(conta3).textContent = valor_conta[conta3].toString();
            alert("Saldo da conta destino " + text_conta3 + " atualizado (Novo saldo: " + valor_conta[conta3] + ")");
        }
    }
    // caso não aceite (reseta o formulário)
    else {
        document.getElementById("bloco2").reset();
    }
    UpdateTotal()

}

