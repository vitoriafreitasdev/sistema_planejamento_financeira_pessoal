/* eslint-disable no-unused-vars */

import {describe, it, expect} from "vitest"

import {passarTransacao, dadosReceitaDesp, dadosDespCategoria, excluirDados, addOrcamento, excluirOrcamento, addMetas, atualizarSaldo, adicionarProgressoAsMetas, excluirMetas} from "../../redux/slices/sistemaSlice.js"
import reducer from "../../redux/slices/sistemaSlice.js"

import createState from "./utils/createState.jsx"

import {histForMaxLength1, histForMaxLength2, histReceitaDesp, histDados} from "./utils/statedata.jsx"


describe("Testing the reducer slice", () => {

    it("Should return the proper result from 'passarTransação'", () => {
        const estadoInicial = createState()

        const transacao = {
            categoria: "salario",
            receita_desp: "receita",
            valor: 5000,
            descricao: "nova receita registrada",
            data: "2025-01-01",
        }


        const state = reducer(estadoInicial, passarTransacao(transacao))

        const hist = {"2025/01": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2025-01-01"}]}

        expect(state.historico).toStrictEqual(hist)
    })

    it("Tests if 'historico' will be reduce when reache the max length", () => {
        const estadoInicial = createState()

        estadoInicial.historico = histForMaxLength1

        const transacao = {
            categoria: "salario",
            receita_desp: "receita",
            valor: 5000,
            descricao: "nova receita registrada",
            data: "2026-01-01",
        }

        const res = reducer(estadoInicial, passarTransacao(transacao))

        const historico = {
                "2025/07": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2025-07-01"}],
                "2025/08": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2025-08-01"}],
                "2025/09": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2025-09-01"}],
                "2025/10": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2025-10-01"}],
                "2025/11": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2025-11-01"}],
                "2025/12": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2025-12-01"}],
                "2026/01": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2026-01-01"}],
        }

        expect(res.historico).toStrictEqual(historico)
    })

    it("Tests if 'historico' will be reduce when reache the max length, second test", () => {
        const estadoInicial = createState()

        estadoInicial.historico = histForMaxLength2

        const transacao = {
            categoria: "salario",
            receita_desp: "receita",
            valor: 5000,
            descricao: "nova receita registrada",
            data: "2026-07-01",
        }

        const res = reducer(estadoInicial, passarTransacao(transacao))

        const historico = {
                "2026/01": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2026-01-01"}],
                "2026/02": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2026-02-01"}],
                "2026/03": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2026-03-01"}],
                "2026/04": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2026-04-01"}],
                "2026/05": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2026-05-01"}],
                "2026/06": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2026-06-01"}],
                "2026/07": [{categoria: "salario", receita_desp: "receita", valor: 5000, descricao: "nova receita registrada", data: "2026-07-01"}],
        }

        expect(res.historico).toStrictEqual(historico)

    })

    it("Tests if the data it is being uploaded correctly in dadosReceitaDesp", () => {

        const estadoInicial = createState()

        estadoInicial.historico = histReceitaDesp

        const res = reducer(estadoInicial, dadosReceitaDesp())

        const despesaEsperada = {
            "2026/01": 2900,
            "2026/02": 3100,
            "2026/03": 2850,
            "2026/04": 3050,
            "2026/05": 2925
        }

        const receitaEsperada = {
            "2026/01": 5000,
            "2026/02": 5000,
            "2026/03": 5000,
            "2026/04": 5000,
            "2026/05": 5000
        }

        const labelsEsperada = ["2026/01", "2026/02", "2026/03", "2026/04", "2026/05"]

        const receitaTotalEsperada = 25000

        expect(res.despesa).toStrictEqual(despesaEsperada)
        expect(res.receita).toStrictEqual(receitaEsperada)
        expect(res.labels).toStrictEqual(labelsEsperada)
        expect(res.receitaTotal).toStrictEqual(receitaTotalEsperada)

    })

    it("Tests if the data it is being uploaded correctly in dadosDespCategoria", () => {

        const estadoInicial = createState()

        estadoInicial.historico = histReceitaDesp

        const res = reducer(estadoInicial, dadosDespCategoria())

        const categoriasEsperada = {
            "transporte": {valor: 2390, porcentagem: 16},
            "alimentacao": {valor: 5450, porcentagem: 37},
            "Lazer": {valor: 985, porcentagem: 7},
            "moradia": {valor: 6000, porcentagem: 40},
        }

        const totalDespesa = 14825

        expect(res.categoriaDeDespesas).toStrictEqual(categoriasEsperada)
        expect(res.totalDeDespesas).toEqual(totalDespesa)
    })

    it("Testing if is deleting correctly the data in 'excluirDados' function", () => {
        // continuar esse
        const estadoInicial = createState()
        const dados = Object.values(histDados)

        estadoInicial.historico = histDados
        estadoInicial.dados = dados

        const res = reducer(estadoInicial, excluirDados("nova receita registrada", "despesa", "2026-01-03"))

        console.log(res.dados)
        
    })
})