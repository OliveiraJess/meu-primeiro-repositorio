# Exercício aula-31

De andamento no projeto (`gerenciador-detarefas`) iniciado durante a semana para que o mesmo atenda aos seguintes requisitos:

1. Para a rota `/` deve ser exibido a página onde exibe todas as tarefas, incluíndo o componente de adicionar tarefa.
1. Levando em conta que uma tarefa possui 3 botões (E, X, V, editar, excluir e vizualizar, respectivamente) de ação, faça uma rota para edição e uma para o salvar.
1. A rota para edição deve ser `/id/editar` tendo em vista que cada tarefa possui um id, neste caso a rota deve ser dinâmica para cada id.
1. A rota para o vizualizar deve ser `/id` tendo em vista que cada tarefa possui um id, neste caso a rota deve ser dinâmica para cada id.
1. Sabendo que o usuário pode manipular esses id na barra de pesquisa, faça uma validação para garantir que o id inserido na mesma é um id válido. Sendo válido, exiba a página com o conteúdo da tarefa respectivo ao id da tarefa, caso contrário exiba uma tela de página não encontrada
1. Uma tela de página não encontrada deve ser exibida para qualquer rota diferente das mapeadas;

#OBS Ao alterar uma tarefa, garanta que a mesma foi alterada indo para a tela de vizualizar