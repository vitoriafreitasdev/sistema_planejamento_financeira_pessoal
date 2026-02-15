

//Testing
import {Provider} from "react-redux"
import {renderHook,} from "@testing-library/react"
import {describe, expect, it} from "vitest"

//Functions
import Dados from "../../utils/graficosDados.jsx";
import dadosOrcamento from "../../utils/orcamentos.jsx"

//Dados mockados
import { preloadedState, wrapper, mockObjeto, resObj, grafficValores, DespCat } from "../mocked_data_for_test/data.jsx"

describe("Testing the functions within the Dashboard component", () => {

    // testando função Dados do arquivo graficosDados
    it("Should test if give the proper results", () => {
        
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
    it("Should test if give the correct return", () => {

        const result  = renderHook(() => dadosOrcamento(preloadedState.sistema.orcamentos, preloadedState.sistema.historico), { wrapper })

        expect(result.result.current).toStrictEqual(mockObjeto)

    })
})