
import "@testing-library/jest-dom"

//Testing
import {Provider} from "react-redux"
import {renderHook,} from "@testing-library/react"
import {describe, expect, it} from "vitest"

//Redux
import { configureStore } from '@reduxjs/toolkit'
import sistemaSlice from "../../redux/slices/sistemaSlice.js"

//Functions
import Dados from "../../utils/graficosDados.jsx";
import dadosOrcamento from "../../utils/orcamentos.jsx"

//Dados mockados
import { preloadedState, mockObjeto } from "../mocked_data_for_test/data.js"

describe("Testing the functions within the Dashboard component", () => {

    
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
        
        // orcamentoXrealizado

        const resObj = {
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

        // Verificações específicas baseadas nos dados mockados
        expect(result.current.receitaTotal).toBe(5000)
        expect(result.current.totalDespesas).toBe(500)
        expect(result.current.saldoAtual).toBe(4500) // 1000 - 500
        expect(result.current.grafficValores).toStrictEqual(resGrafficValores)
        expect(result.current.despesasCategorias).toStrictEqual(resDespesasCategorias)
        expect(result.current.orcamentoXrealizado).toStrictEqual(resObj)
        expect(result.current.total).toBe(80000)
        expect(result.current.progresso).toBe(10000)
        expect(result.current.porcentagemMetas).toBe(12)

    })

    //teste da função dadosOrcamento
    it("Should give the correct return", () => {

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
        
        const result  = renderHook(() => dadosOrcamento(preloadedState.sistema.orcamentos, preloadedState.sistema.historico), { wrapper })

        expect(result.result.current).toStrictEqual(mockObjeto)

    })
})