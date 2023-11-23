import DespesaModel from '../model/DespesaModel.js';

class DespesaController {
    constructor() {
        this.despesas = [];
    }

    adicionarDespesa(descricao, valor, dataVencimento) {
        const despesa = new DespesaModel(descricao, valor, dataVencimento);
        this.despesas.push(despesa);
    }

    obterDespesas() {
        return this.despesas;
    }
}

export default DespesaController;
