
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
import { preloadedState, mockObjeto, resObj, grafficValores, DespCat } from "../mocked_data_for_test/data.js"

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

    
        // Verificações específicas baseadas nos dados mockados
        expect(result.current.receitaTotal).toBe(5000)
        expect(result.current.totalDespesas).toBe(500)
        expect(result.current.saldoAtual).toBe(4500) // 1000 - 500
        expect(result.current.grafficValores).toStrictEqual(grafficValores)
        expect(result.current.despesasCategorias).toStrictEqual(DespCat)
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