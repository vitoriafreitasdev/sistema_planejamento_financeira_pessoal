
import { createSlice } from "@reduxjs/toolkit";

const localSave = localStorage.getItem("historico")
const dadosSave = localStorage.getItem("dados")
const orcamentoSave = localStorage.getItem("orcamentos")
const metasSalvas = localStorage.getItem("metas")
const saldoSalvo = localStorage.getItem("saldo")


const estadoInicial = { 
    historico: localSave ? JSON.parse(localSave) : {}, // var para os graficos
    dados: dadosSave ? JSON.parse(dadosSave) : [], // var para o historico de transacao
    receita: {},
    despesa: {},
    labels: [],
    totalDeDespesas: 0,
    receitaTotal: 0,
    categoriaDeDespesas: {},
    orcamentos: orcamentoSave ? JSON.parse(orcamentoSave) : {},
    metas: metasSalvas ? JSON.parse(metasSalvas) : {},
    saldoAtual: saldoSalvo ? parseFloat(saldoSalvo) : 0
}

const sistemaSlice = createSlice(
    {
        name: "sistemaSlice",
        initialState: estadoInicial,
        reducers: {
            passarTransacao: (state, action) => {
                const historicoSalvo = JSON.parse(localSave)
                
                if(historicoSalvo){
                    const historicoTam = Object.keys(JSON.parse(localSave)).length

                    if(historicoTam >= 12){
                        const newKeys = Object.keys(historicoSalvo).slice(5, 12)
                        const filteredObject = Object.fromEntries(
                        Object.entries(historicoSalvo).filter(([key]) => {
                            return newKeys.includes(key);
                        })
                        );
                        state.historico = filteredObject
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

                // atualização do saldo
                if(transacao.receita_desp === "receita"){
                    state.saldoAtual += parseFloat(transacao.valor)
                    localStorage.setItem("saldo", state.saldoAtual)
                }

                const dadosParaStorage = JSON.stringify(state.dados)
                const objeto = JSON.stringify(state.historico)

                localStorage.removeItem("historico")
                // para os dados do grafico do dashboard e outros reducers
                localStorage.setItem("historico", objeto)
                // para os dados utilizados para o componente Historico
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
            },
            addOrcamento: (state, action) => {
                const cat = action.payload.categoria
                const orc = action.payload.orcamento
                if(!state.orcamentos[cat]){
                    state.orcamentos[cat] = 0
                }
                state.orcamentos[cat] = orc
                
                const objLocalStorage = JSON.stringify(state.orcamentos)
                localStorage.setItem("orcamentos", objLocalStorage)
            },
            excluirOrcamento: (state, action) => {
                const entries = Object.entries(state.orcamentos)
                // fromEntries pega uma lista de chave e valores e transforma em um objeto
                const filter = Object.fromEntries(entries.filter((chave) => !chave.includes(action.payload)))

                state.orcamentos = filter 
                localStorage.setItem("orcamentos", JSON.stringify(filter))

            },
            addMetas: (state, action) => {
                const objeto = action.payload
                // calculo de dias restantes
                const dataAtual = new Date()
                const data = new Date(objeto.data)
                const diffMs = data.getTime() - dataAtual.getTime()
                const diasRest = Math.floor(diffMs / (1000 * 60 * 60 * 24))
                // porcentagem
                const porcentagem =  (objeto.progresso/objeto.valor) * 100

                
                state.metas[objeto.meta] = {valor: objeto.valor, progresso: parseFloat(objeto.progresso), data: objeto.data, restante: diasRest, porcentagem: Math.floor(porcentagem)}

                localStorage.setItem("metas", JSON.stringify(state.metas))
            },
            atualizarSaldo: (state, action) => {
                state.saldoAtual = action.payload
                localStorage.setItem("saldo", state.saldoAtual)
            },
            adicionarProgressoAsMetas: (state, action) => {
                const key = action.payload.key 
                const quant = parseFloat(action.payload.quantidade)

                // atualizar o saldo do usuário 
                if(state.saldoAtual >= quant){
                    state.saldoAtual -= quant
                    localStorage.setItem("saldo", state.saldoAtual)
                }
                else{
                    throw new Error("Saldo insuficiente")
                }

                state.metas[key].progresso += quant
                const porcentagem =  (state.metas[key].progresso/state.metas[key].valor) * 100
                state.metas[key].porcentagem = Math.floor(porcentagem)
                localStorage.setItem("metas", JSON.stringify(state.metas)) 
            }
        }
    }
)

export const {passarTransacao, dadosReceitaDesp, dadosDespCategoria, excluirDados, addOrcamento, excluirOrcamento, addMetas, atualizarSaldo, adicionarProgressoAsMetas} = sistemaSlice.actions
export default sistemaSlice.reducer