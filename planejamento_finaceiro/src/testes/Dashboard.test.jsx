
import "@testing-library/jest-dom"

import {Provider} from "react-redux"
import {store} from '../redux/store.js'
import { configureStore } from '@reduxjs/toolkit'

// Supondo que você tenha os reducers em algum lugar
import sistemaSlice from "../redux/slices/sistemaSlice.js"

import { render, renderHook, screen} from "@testing-library/react"
import {describe, expect, it} from "vitest"
import Dados from "../utils/graficosDados.jsx";
import Dashboard from "../routes/dashboard/Dashboard.jsx";

const preloadedState = {
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

describe("Test the functions and components within the Dashboard component", () => {

    it("Should Component BoxData and GrafficBox", async () => {
        render(
            <Provider store={store}>
                <Dashboard/>
            </Provider>
        )
        
        const BoxDataComp = await screen.findAllByTestId('BoxData')
        const GrafficBoxComp = await screen.findAllByTestId('GrafficBox')
        const ContainerGrafficComp = await screen.findByTestId('ContainerGraffic')
        
        expect(BoxDataComp).toHaveLength(4) // São 4 BoxData no Dashboard
        expect(GrafficBoxComp).toHaveLength(2) // São 2 GrafficBox
        expect(ContainerGrafficComp).toBeInTheDocument()
    })

    // testando função Dados do arquivo graficosDados

    it("Should give the proper results", () => {
        // Crie uma store com dados mockados
        const mockStore = configureStore({
            reducer:  {sistema: sistemaSlice},
            preloadedState
        })
        
        //Encapsular Provider
        const wrapper = ({ children }) => (
            <Provider store={mockStore}>
                {children}
            </Provider>
        )
        
        const { result } = renderHook(() => Dados(), { wrapper })

        //Resultados esperados
        const resGrafficValores = {
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

        const resDespesasCategorias = {
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
        
        // Verificações específicas baseadas nos dados mockados
        expect(result.current.receitaTotal).toBe(5000)
        expect(result.current.totalDespesas).toBe(500)
        expect(result.current.saldoAtual).toBe(4500) // 1000 - 500
        expect(result.current.grafficValores).toStrictEqual(resGrafficValores)
        expect(result.current.despesasCategorias).toStrictEqual(resDespesasCategorias)
    })
})