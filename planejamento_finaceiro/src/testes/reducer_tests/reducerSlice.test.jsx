/* eslint-disable no-unused-vars */

import {describe, it, expect} from "vitest"

import {passarTransacao, dadosReceitaDesp, dadosDespCategoria, excluirDados, addOrcamento, excluirOrcamento, addMetas, atualizarSaldo, adicionarProgressoAsMetas, excluirMetas} from "../../redux/slices/sistemaSlice.js"
import reducer from "../../redux/slices/sistemaSlice.js"

const inicialState = {
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

describe("Testing the reducer slice", () => {

    it("Should return the proper result from 'passarTransação'", () => {
        const transacao = {
            categoria: "salario",
            receita_desp: "receita",
            valor: 5000,
            descricao: "nova receita registrada",
            data: "2025-01-01",
        }

        const state = reducer(inicialState, passarTransacao(transacao))

        const hist = {"2025/01": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2025-01-01"}]}

        expect(state.historico).toStrictEqual(hist)
    })

    
})