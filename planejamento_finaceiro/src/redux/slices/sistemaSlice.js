
import { createSlice } from "@reduxjs/toolkit";

const localSave = localStorage.getItem("historico")

const estadoInicial = { 
    historico: localSave ? JSON.parse(localSave) : {},
    receita: {},
    despesa: {},
    labels: [],
    totalDeDespesas: 0,
    receitaTotal: 0,
    categoriaDeDespesas: []
}

const sistemaSlice = createSlice(
    {
        name: "sistemaSlice",
        initialState: estadoInicial,
        reducers: {
            passarTransacao: (state, action) => {
                const transacao = action.payload
                const data =  transacao.data
                if (!state.historico[data]){
                    state.historico[data] = []
                }
                
                state.historico[data].push(transacao);
                
                const objeto = JSON.stringify(state.historico)
                localStorage.setItem("historico", objeto)
            },
            dadosReceitaDesp: (state) => {

                //Aqui para receita x despesa
                
                let receitaValorTotal = 0
                const labels = []
                const receita = {}
                const despesa = {}
            
                for (let c in state.historico){
                    labels.push(c)
                    state.historico[c].forEach(element => {
                        if(element.receita_desp === "receita") {
                            if(!receita[c]){
                                receita[c] = 0
                            }
                            receita[c] += parseFloat(element.valor)
                            receitaValorTotal += parseFloat(element.valor)
                        }
                        if(element.receita_desp === "despesa") {
                            if(!despesa[c]){
                                despesa[c] = 0
                            }
                            despesa[c] += parseFloat(element.valor)
                            
                        }
                    })
                }
                const labelsSort = labels.sort((a, b) => a.localeCompare(b))

                state.despesa = despesa
                state.receita = receita
                state.labels = labelsSort
                state.receitaTotal = receitaValorTotal
                
            },
            dadosDespCategoria: (state) => {
                const categorias = {}
                let total = 0

                for (let c in state.historico){
                    state.historico[c].forEach(element => {
                        if(element.receita_desp === "despesa") {
                            const categ = element.categoria
                            if(!categorias[categ]){
                                categorias[categ] = 0
                            }
                            categorias[categ] += parseFloat(element.valor)
                            total += parseFloat(element.valor)
                        }
                    })
                }

                /* 
                calculo de porcentagem
                parte/total x 100
                */

                for (let obj in categorias){
                    const porcentagem = Math.round((categorias[obj] / total) * 100)
                    categorias[obj] = {valor: categorias[obj], porcentagem: porcentagem}
                }

                state.categoriaDeDespesas = categorias
                state.totalDeDespesas = total
                
            }
        }
    }
)

export const {passarTransacao, dadosReceitaDesp, dadosDespCategoria} = sistemaSlice.actions
export default sistemaSlice.reducer