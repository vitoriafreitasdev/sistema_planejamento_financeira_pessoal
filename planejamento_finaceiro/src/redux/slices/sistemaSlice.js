
import { createSlice } from "@reduxjs/toolkit";

const localSave = localStorage.getItem("historico")
const dadosSave = localStorage.getItem("dados")

const estadoInicial = { 
    historico: localSave ? JSON.parse(localSave) : {}, // var para os graficos
    dados: dadosSave ? JSON.parse(dadosSave) : [], // var para o historico de transacao
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
                const historicoSalvo = JSON.parse(localSave)
                // fazer mais testes para ve se tudo  esta funcional 
                if(historicoSalvo){
                    const historicoTam = Object.keys(JSON.parse(localSave)).length
                    console.log("Tamanho do historico: ", historicoTam)

                    if(historicoTam >= 12){
                        const newKeys = Object.keys(historicoSalvo).slice(5, 12)
                        const filteredObject = Object.fromEntries(
                        Object.entries(historicoSalvo).filter(([key]) => {
                            return newKeys.includes(key);
                        })
                        );
                        state.historico = filteredObject
                        console.log("Objeto filtrado: ")
                        console.log(filteredObject)
                        localStorage.removeItem("historico")
                        localStorage.setItem("historico", filteredObject)
                    }
                }

                const transacao = action.payload
                const ano = transacao.data.split("-")[0]
                const mes = transacao.data.split("-")[1]
                const data =  ano + "/" + mes
                
                if (!state.historico[data]){
                    state.historico[data] = []
                }
                
                state.historico[data].push(transacao);
                state.dados = Object.values(state.historico)

                const dadosParaStorage = JSON.stringify(state.dados)
                const objeto = JSON.stringify(state.historico)

                localStorage.removeItem("historico")
                localStorage.setItem("historico", objeto)
                localStorage.setItem("dados", dadosParaStorage)
            },
            dadosReceitaDesp: (state) => {

                //Aqui para receita x despesa
                
                let receitaValorTotal = 0
                const labels = []
                const receita = {}
                const despesa = {}
            
                for (let c in state.historico){
                    const data = c
                    
                    if (!labels.includes(data)) labels.push(data)

                    state.historico[c].forEach(element => {
                        if(element.receita_desp === "receita") {
                            if(!receita[data]){
                                receita[data] = 0
                            }
                            receita[data] += parseFloat(element.valor)
                            receitaValorTotal += parseFloat(element.valor)
                        }
                        if(element.receita_desp === "despesa") {
                            if(!despesa[data]){
                                despesa[data] = 0
                            }
                            despesa[data] += parseFloat(element.valor)
                            
                        }
                    })

                    

                }
                const labelsSort = labels.sort((a, b) => a.localeCompare(b))
                // const receitaObj = Object.values(receita)
                // const despesaObj = Object.values(despesa)
            
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
                
            },
            excluirDados: (state, action) => {
                const descricao = action.payload.descricao 
                const categoria = action.payload.categoria 
                const data = action.payload.data 

                const novosDados = []
                state.dados.forEach((d) => {
                    const novoArr = d.filter((d) => d.descricao != descricao || d.categoria != categoria || d.data != data)
                    if(novoArr.length > 0) novosDados.push(novoArr)
                })

                state.dados = novosDados
                localStorage.removeItem("dados")
                const dadosParaStorage = JSON.stringify(novosDados)
                localStorage.setItem("dados", dadosParaStorage)

                
            }
        }
    }
)

export const {passarTransacao, dadosReceitaDesp, dadosDespCategoria, excluirDados} = sistemaSlice.actions
export default sistemaSlice.reducer