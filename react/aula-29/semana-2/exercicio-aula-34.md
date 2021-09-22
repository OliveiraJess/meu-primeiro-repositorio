# Exercicio aula-34

Com base em nosso projeto `gerenciador-de-tarefas` desenvolva um código para que atenda as seguintes definições:

1. O projeto deve conter uma página de cadastro de usuário contendo nome e senha;
1. O projeto deve conter uma tela de login com o campo nome e senha
1. Na tela de login deve conter um link para a tela de cadastro
1. Na tela de login deve ser validada as informações digitadas para os campos ou seja, primeiro devemos validar se temos essa informação de usuário, caso não exista exibir um alert com `usuário não encontrado` (essa informação nao pode ficar salva em LS ou SS)
1. Na tela de login deve ser validada as informações digitadas para os campo ou seja, também devemos validar se a senha é igual a senha registrada pelo usuário no ato do cadastro, caso não seja, devemos exibir um alertcom `senha inválida` (essa informação 
nao pode ficar salva em LS ou SS)
1. Cada cadastro de usuário deve possuir um id único e para cada id deve ser exibido uma lista diferente
1. A lista de cada usuário pode ser armazenada no LS se achar necessário.
1. A aplicação deve ter no mínimo 2 usuários default [{id:1 nome: admin, senha: admin}, {id:2 nome: user, senha: sa}] 
1. Os usuários citados anteriormente devem possuir inicialmente as seguinte listas respectivamente: 
> [{id:1, titulo: gerenciar logins, concluida: false, conteudo: "data de entrega 20/09/21" },
> {id:2, titulo: gerenciar tarefas, concluida: false, conteudo: "data de entrega 20/09/21" }]

> [{id:1, titulo: estudar HTML, concluida: false, conteudo: "data de entrega 20/09/21" },
> {id:2, titulo: estudar CSS, concluida: false, conteudo: "data de entrega 20/09/21" },
> {id:3, titulo: estudar JS, concluida: false, conteudo: "data de entrega 20/09/21" },
> {id:4, titulo: estudar REACT, concluida: false, conteudo: "data de entrega 20/09/21" }]
