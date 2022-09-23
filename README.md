# Taskware - Gestão de Tarefas
Gestão de tarefas com níveis de críticidade 

## Premissa
Criação de um  programa de gestão de tarefas com as funções básicas de criar, editar, excluir e atualizar tarefas.

## Colaboradores
- @Asafe
- @Carlos
- @Emerson

# Processo de criação
Procedimentos realizados para criação do projeto.

## Decisões 
O projeto foi realizado totalmente em 'pair programming', optamos por utlizar um back-end simulado através do JSON Server.
Para estilização decidimos usar CSS puro e algumas classes da W3CSS.

## Técnicas / Execução
### Definição de funcionalidades do sistema:
  - Criar Tarefas
  - Ler Tarefas
  - Atualizar Tarefas
  - Excluir Tarefas

### Estrutura de diretórios
    src/app
        components/{componentes}
        models/
        services/

### Modelo de dados 
- Id: número identificação da tarefa
- Name: primeiro nome do responsável
- Last: sobrenome do responsável
- Task: descrição da tarefa
- Email: e-mail do responsável
- Phone: telefone do responsável
- Date_ini: data de início da tarefa
- Date_end: data de encerramento da tarefa
- Classification: classificação da tarefa (Crítica, Alta, Média, Baixa)
- Status: estado da tarefa (Aberta, Fechada)

### Back-end 
Criação da base de dados dados mockados no json-server
![alt json crack](/.doc/jsoncrack.com.png "Json gráfico").
Criação do provedor de serviço para conexão com a base de dados JSON pelo cliente http do Angular

### Rotas (app-routing.module.ts)
    /home
    /insert
    /list
    /edit:id

### Componentes
   - **home**: exibe um resumo com a quantidade de tarefas total, abertas e fechadas.
   - **list-tasks**: exibe todas as tarefas cadastradas na base de dados, permite a exclusão de tarefas e redireciona para edição de uma tarefa especifíca.
   - **insert-tasks**: insere um novo registro de tarefa na base de dados.
   - **edit-tasks**: permite a atualização do registro de uma tarefa na base de dados.
