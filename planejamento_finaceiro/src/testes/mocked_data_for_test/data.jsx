
// Dados Mockados
// data.jsx
import { configureStore } from "@reduxjs/toolkit"
import sistemaSlice from "../../redux/slices/sistemaSlice.js"
import { Provider } from "react-redux"

// Estado Inicial para reducer mockado 

export const preloadedState = {
    sistema: {
        historico:  {
        "2025/01": [{categoria: "salario", receita_desp: "receita", valor: "5000", descricao: "sal", data: "2025-01-01"}, {categoria: "transporte", receita_desp: "despesa", valor: "500", descricao: "gal", data: "2025-01-02"}]
        },
        dados: [[{categoria: "salario", receita_desp: "receita", valor: "5000", descricao: "sal", data: "2025-01-01"}, {categoria: "transporte", receita_desp: "despesa", valor: "500", descricao: "gal", data: "2025-01-02"}]], 
        receita: {"2025/01": 5000},
        despesa: {"2025/01": 500},
        labels: ["2025/01"],
        totalDeDespesas: 500,
        receitaTotal: 5000,
        categoriaDeDespesas: {"transporte": {valor: 500, porcentagem: 100}},
        orcamentos: {"Lazer": 500, "transporte": 1000, "moradia": 1200, "alimentação": 1000},
        metas:  {"Carro": {valor: "80000", progresso: 0, data: "2028-02-09", restante: 723, porcentagem: 0}},
        saldoAtual: 4500
    }
}

// Redux store mockada

// export const mockedStore = configureStore({
//     reducer: {sistema: sistemaSlice},
//     preloadedState
// })

// //Encapsular Provider
// export const wrapper = ({ children }) => (
//     <Provider store={mockedStore}>
//         {children}
//     </Provider>
// )

// assim para evitar vazamento de dados

export const createMockStore = () =>
  configureStore({
    reducer: { sistema: sistemaSlice },
    preloadedState
})

export const wrapper = ({ children }) => (
  <Provider store={createMockStore()}>
    {children}
  </Provider>
)

export const mockObjeto = {"transporte": {valor: "500", data: "2025-01-02", porcentagem: 50, restante: 500, orcamento: 1000 }}

export const grafficValores = {
            labels: preloadedState.sistema.labels,
            datasets: [
                {
                    label: "Receita",
                    data: preloadedState.sistema.receita,
                    backgroundColor: "rgba(53, 209, 170, 0.45)",
                    borderColor: "green",
                    borderWidth: 2
                },
                {
                    label: "Despesa",
                    data: preloadedState.sistema.despesa,
                    backgroundColor: "rgba(243, 54, 95, 0.4)",
                    borderColor: "rgb(197, 2, 2)",
                    borderWidth: 2,
                    tension: 0.4
                }
            ]
        }


export const resObj = {
            labels: Object.keys(mockObjeto),
            datasets: [
                {
                    label: "Orçamento salvo",
                    data: Object.values(mockObjeto).map((value) => value.orcamento),
                    backgroundColor: "rgba(73, 89, 231, 0.78)",
                    borderColor: "rgb(20, 42, 88)",
                    borderWidth: 2,
                    tension: 0.4
                }, 
                {
                    label: "Valor gasto",
                    data: Object.values(mockObjeto).map((value) => value.valor),
                    backgroundColor: "#63b9ff",
                    borderColor: "blue",
                    borderWidth: 2
                }
            ]
        }


export const DespCat = {
            labels: Object.keys(preloadedState.sistema.categoriaDeDespesas),
            datasets: [
                {
                    label: "despesa por categoria",
                    data: Object.values(preloadedState.sistema.categoriaDeDespesas).map((value) => value.porcentagem),
                    backgroundColor: [
                    "rgba(19, 3, 161, 0.65)",  
                    "rgba(34, 54, 238, 0.77)",
                    "rgba(38, 148, 192, 0.56)",
                    "rgba(31, 200, 223, 0.78)"
                    ],
                    borderColor: "white",
                    borderWidth: 2
                }
            ]
        }