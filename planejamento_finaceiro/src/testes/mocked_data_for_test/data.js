
export const preloadedState = {
    sistema: {
        historico:  {
        "2025/01": [{categoria: "salario", receita_desp: "receita", valor: "5000", descricao: "sal", data: "2025-01-01"}, {categoria: "transporte", receita_desp: "despesa", valor: "500", descricao: "gal", data: "2025-01-02"}]
        },
        dados: [{categoria: "salario", receita_desp: "receita", valor: "5000", descricao: "sal", data: "2025-01-01"}, {categoria: "transporte", receita_desp: "despesa", valor: "500", descricao: "gal", data: "2025-01-02"}], 
        receita: {"2025/01": 5000},
        despesa: {"2025/01": 500},
        labels: ["2025/01"],
        totalDeDespesas: 500,
        receitaTotal: 5000,
        categoriaDeDespesas: {"transporte": {valor: 500, porcentagem: 100}},
        orcamentos: {"Lazer": 500, "transporte": 1000, "moradia": 1200, "alimentação": 1000},
        metas:  {"Carro": {valor: 80000, progresso: 10000, data: "2028-02-09", restante: 730, porcentagem: Math.floor(12.5)}},
        saldoAtual: 4500
    }
}

export const mockObjeto = {"transporte": {valor: "500", data: "2025-01-02", porcentagem: 50, restante: 500, orcamento: 1000 }}