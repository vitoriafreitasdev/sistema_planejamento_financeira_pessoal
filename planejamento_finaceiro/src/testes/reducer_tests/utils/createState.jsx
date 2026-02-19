
function createState() {
    const estadoInicial = {
        historico: {}, 
        dados: [], 
        receita: {},
        despesa: {},
        labels: [],
        totalDeDespesas: 0,
        receitaTotal: 0,
        categoriaDeDespesas: {},
        orcamentos: {},
        metas: {},
        saldoAtual: 0
    }

    return estadoInicial
}

export default createState