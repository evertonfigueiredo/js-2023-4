class Pedido {
    constructor() {
        this.itens = []
        this.total = 0
    }

    addItem(codigo, qtd = 0, descricao = "", valorUnit = 0) {
        let item = {
            codigo,
            descricao,
            qtd,
            valorUnit,
            valorTotal: qtd * valorUnit
        }
        this.itens.push(item)
        this.calcularTotalNota()
    }

    calcularTotalNota() {
        this.total = 0
        this.itens.map(item => {
            this.total += item.valorTotal
        })
    }

    removerItem(codigo){
        if (codigo != '') {

            let resultado = this.itens.findIndex(item => item.codigo === codigo)

            if (resultado == -1) {
                console.log("Item não encontrado na Nota");
                return
            }

            this.itens.splice(resultado, 1)
            console.log(`Item de codigo: ${codigo} removido da nota!`);
            this.calcularTotalNota()
        } else {
            console.log("Passe um codigo valido!!");
        }
    }

}

let novoPedido = new Pedido()