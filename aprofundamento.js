// let idade = 10
// let nome = `Everton`
// let preco = 10

// if (preco !== 100) {
//     console.log("Preço muito caro");
// } else {
//     console.log("O preço esta bom");   
// }

// switch (preco) {
//     case 10:
//         console.log("Preço é igual a dez");
//         break;

//     case 10:
//         console.log("Preço é igual a onze");
//         break;

//     default:
//         console.log("Preço não informado corretamente");
//         break;
// }

let tarefas = [
    {
        titulo: "Lavar computador",
        prioridade: "Urgente"
    },
    {
        titulo: "Beber agua",
        prioridade: "Não urgente"
    },
    {
        titulo: "Passear com o cachorro",
        prioridade: "Emergência"
    },
]

function addTarefa(novaTarefa) {
    tarefas.push(novaTarefa)
}

function exibirTarefas() {
    tarefas.map(tarefa => {
        console.log(`A tarefa é: ${tarefa.titulo}, e de prioridade: ${tarefa.prioridade}`);
    })
}