
// para o teste "Tests if 'historico' will be reduce when reache the max length"
export const histForMaxLength1 = {
        "2025/01": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2025-01-01"}],
        "2025/02": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2025-02-01"}],
        "2025/03": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2025-03-01"}],
        "2025/04": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2025-04-01"}],
        "2025/05": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2025-05-01"}],
        "2025/06": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2025-06-01"}],
        "2025/07": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2025-07-01"}],
        "2025/08": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2025-08-01"}],
        "2025/09": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2025-09-01"}],
        "2025/10": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2025-10-01"}],
        "2025/11": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2025-11-01"}],
        "2025/12": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2025-12-01"}],
}

// para "Tests if 'historico' will be reduce when reache the max length, second test"
export const histForMaxLength2 = {
            "2025/07": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2025-07-01"}],
            "2025/08": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2025-08-01"}],
            "2025/09": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2025-09-01"}],
            "2025/10": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2025-10-01"}],
            "2025/11": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2025-11-01"}],
            "2025/12": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2025-12-01"}],
            "2026/01": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2026-01-01"}],
            "2026/02": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2026-02-01"}],
            "2026/03": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2026-03-01"}],
            "2026/04": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2026-04-01"}],
            "2026/05": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2026-05-01"}],
            "2026/06": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2026-06-01"}],
}

// para "Tests if the data it is being uploaded correctly in dadosReceitaDesp / dadosDespCategoria"
export const histReceitaDesp = {
        "2026/01": 
        [
            {categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2026-01-01"},
            {categoria: "transporte", receita_desp: "despesa", valor: 500, descricao: "nova despesa registrada", data: "2026-01-03"},
            {categoria: "alimentacao", receita_desp: "despesa", valor: 1000, descricao: "nova despesa registrada", data: "2026-01-09"},
            {categoria: "Lazer", receita_desp: "despesa", valor: 200, descricao: "nova despesa registrada", data: "2026-01-25"},
            {categoria: "moradia", receita_desp: "despesa", valor: 1200, descricao: "nova despesa registrada", data: "2026-01-05"}
        ],
        "2026/02": [
            {categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2026-02-01"},
            {categoria: "transporte", receita_desp: "despesa", valor: 600, descricao: "nova despesa registrada", data: "2026-02-03"},
            {categoria: "alimentacao", receita_desp: "despesa", valor: 1200, descricao: "nova despesa registrada", data: "2026-02-09"},
            {categoria: "Lazer", receita_desp: "despesa", valor: 100, descricao: "nova despesa registrada", data: "2026-02-25"},
            {categoria: "moradia", receita_desp: "despesa", valor: 1200, descricao: "nova despesa registrada", data: "2026-02-05"}
        ],
        "2026/03": [
            {categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2026-03-01"},
            {categoria: "transporte", receita_desp: "despesa", valor: 400, descricao: "nova despesa registrada", data: "2026-03-03"},
            {categoria: "alimentacao", receita_desp: "despesa", valor: 1000, descricao: "nova despesa registrada", data: "2026-03-09"},
            {categoria: "Lazer", receita_desp: "despesa", valor: 250, descricao: "nova despesa registrada", data: "2026-03-25"},
            {categoria: "moradia", receita_desp: "despesa", valor: 1200, descricao: "nova despesa registrada", data: "2026-03-05"}
        ],
        "2026/04": [
            {categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2026-04-01"},
            {categoria: "transporte", receita_desp: "despesa", valor: 540, descricao: "nova despesa registrada", data: "2026-04-03"},
            {categoria: "alimentacao", receita_desp: "despesa", valor: 1100, descricao: "nova despesa registrada", data: "2026-04-09"},
            {categoria: "Lazer", receita_desp: "despesa", valor: 210, descricao: "nova despesa registrada", data: "2026-04-25"},
            {categoria: "moradia", receita_desp: "despesa", valor: 1200, descricao: "nova despesa registrada", data: "2026-04-05"}
        ],
        "2026/05": [
            {categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2026-05-01"},
            {categoria: "transporte", receita_desp: "despesa", valor: 350, descricao: "nova despesa registrada", data: "2026-05-03"},
            {categoria: "alimentacao", receita_desp: "despesa", valor: 1150, descricao: "nova despesa registrada", data: "2026-05-09"},
            {categoria: "Lazer", receita_desp: "despesa", valor: 225, descricao: "nova despesa registrada", data: "2026-05-25"},
            {categoria: "moradia", receita_desp: "despesa", valor: 1200, descricao: "nova despesa registrada", data: "2026-05-05"}
        ]
}

// para "Testing if is deleting correctly the data in 'excluirDados' function"
export const histDados = {
        "2026/01": 
        [
            {categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2026-01-01"},
            {categoria: "moradia", receita_desp: "despesa", valor: 1200, descricao: "nova despesa registrada", data: "2026-01-05"}
        ],
        "2026/02": [
            {categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2026-02-01"},
            {categoria: "transporte", receita_desp: "despesa", valor: 600, descricao: "nova despesa registrada", data: "2026-02-03"},
            {categoria: "alimentacao", receita_desp: "despesa", valor: 1200, descricao: "nova despesa registrada", data: "2026-02-09"}
        ]
}