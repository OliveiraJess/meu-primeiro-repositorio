const pessoas = [
    {
        nome: "Tânia Hadassa Carolina Monteiro",
        idade: 39,
        data_nasc: "13-05-1982",
        sexo: "Feminino",
        estado: "RS",
        telefone_fixo: "(54) 2827-1357",
        celular: "(54) 98393-6669"
    },
    {
        nome: "Antonio Gael Rodrigo Pires",
        idade: 43,
        data_nasc: "27-06-1978",
        sexo: "Masculino",
        estado: "SE",
        telefone_fixo: "(79) 3872-4267",
        celular: "(79) 99752-1168"
    },
    {
        nome: "Mário Murilo Bernardes",
        idade: 41,
        data_nasc: "02-01-1980",
        sexo: "Masculino",
        estado: "PB",
        telefone_fixo: "(83) 3648-3860",
        celular: "(83) 99438-4140"
    },
    {
        nome: "Jéssica Maya Carolina Castro",
        idade: 37,
        data_nasc: "23-11-1984",
        sexo: "Feminino",
        estado: "RS",
        telefone_fixo: "(51) 3520-6213",
        celular: "(51) 99905-2574"
    },
    {
        nome: "Levi Martin da Cunha",
        idade: 51,
        data_nasc: "08-11-1970",
        sexo: "Masculino",
        estado: "PA",
        telefone_fixo: "(93) 2881-8795",
        celular: "(93) 99387-8246"
    },
    {
        nome: "Renato Mateus da Rocha",
        idade: 28,
        data_nasc: "05-04-1993",
        sexo: "Masculino",
        estado: "AP",
        telefone_fixo: "(96) 2973-1018",
        celular: "(96) 99580-6925"
    },
    {
        nome: "Esther Elaine Nunes",
        idade: 64,
        data_nasc: "15-05-1957",
        sexo: "Feminino",
        estado: "AP",
        telefone_fixo: "(96) 3718-0280",
        celular: "(96) 98622-3617"
    },
    {
        nome: "Sueli Julia Sara Ferreira",
        idade: 54,
        data_nasc: "25-01-1967",
        sexo: "Feminino",
        estado: "SC",
        telefone_fixo: "(48) 2918-2581",
        celular: "(48) 98719-3195"
    },
    {
        nome: "André Cauã Theo da Cruz",
        idade: 77,
        data_nasc: "10-09-1944",
        sexo: "Masculino",
        estado: "PR",
        telefone_fixo: "(42) 3838-7280",
        celular: "(42) 98775-6271"
    },
    {
        nome: "Danilo Thales Giovanni Baptista",
        idade: 45,
        data_nasc: "09-12-1976",
        sexo: "Masculino",
        estado: "SC",
        telefone_fixo: "(47) 2670-4176",
        celular: "(47) 99849-2199"
    }
]

const pessoa = {
    nome: "Alana Vera Assis",
    idade: 68,
    data_nasc: "01-05-1953",
    sexo: "Feminino",
    estado: "PB",
    telefone_fixo: "(83) 2837-2032",
    celular: "(83) 99413-4852"
}

// Um código que obtenha uma lista telefonica, contendo: `nome`, `telefone_fixo` e `celular`

//pessoas.forEach(individuo=>console.log(`Nome: ` + individuo.nome + ` Telefone: ` + individuo.telefone_fixo + ` Celular: ` + individuo.celular))

const listaTelefonica = listaDePessoas.map (pessoa => {
    return {
        nome: pessoa.nome,
        celular: pessoa.celular,
        telefone: pessoa.telefone_fixo
    }
})
console.log(listaTelefonica)

// Um código que obtenha uma lista de pessoas cujo sexo seja `Feminino`

// sexoFeminino = pessoas.filter(mulher => mulher.sexo === "Feminino")
// console.log(sexoFeminino)

// Um código que obtenha uma lista de pessoas cujo sexo seja `Masculino`

// sexoMasculino = pessoas.filter(homem => homem.sexo === "Masculino")
// console.log(sexoMasculino)

// Um código que para cada elemento seja impresso em tela nome da pessoa

// pessoas.forEach(nomePessoa => console.log (`Nome: ` + nomePessoa.nome))

// Um código que obtenha a primeira pessoa do `estado` "RS"

// listaEstados = pessoas.find(estados => estados.estado === "RS")
// console.log(listaEstados)

// Um código que remova o último elemento da lista

// let removerUltimaPessoa = pessoas.pop()
// console.log(removerUltimaPessoa)

// Um código que insira elemento na lista

//  let novaLista = pessoas.push(pessoa)
//  console.log(pessoa)

// Um código que obtenha uma lista de lista de pessoas separadas por estado, 
// ou seja, para cada estado criar uma lista de pessoas

estados = []

pessoas.forEach(pessoaLista => {
    if (!(pessoaLista.estado in estados)) {
        estados.push(pessoaLista.estado)
    }
})

pessoasPorEstado = {}

estados.forEach(estado => {
    pessoasPorEstado[estado] = pessoas.filter(pessoaPorEstado => pessoaPorEstado.estado === estado)
})

console.log(pessoasPorEstado)


