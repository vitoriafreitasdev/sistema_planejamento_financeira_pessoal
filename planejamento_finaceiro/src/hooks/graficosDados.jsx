import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { dadosDespCategoria, dadosReceitaDesp } from "../redux/slices/sistemaSlice"
import dadosOrcamento from "./orcamentos"
export default function  Dados(){
    const dispatch = useDispatch()
    // Para receita x despesa
    dispatch(dadosReceitaDesp())
    const labels = useSelector((state) => state.sistema.labels)
    const receita = useSelector((state) => state.sistema.receita)
    const despesa = useSelector((state) => state.sistema.despesa)
    // Para Despesa por categoria
    dispatch(dadosDespCategoria())
    const totalDespesas = useSelector((state) => state.sistema.totalDeDespesas)
    const receitaTotal = useSelector((state) => state.sistema.receitaTotal)
    const categorias = useSelector((state) => state.sistema.categoriaDeDespesas)

    const saldoTotal = Math.floor(parseFloat(receitaTotal) - parseFloat(totalDespesas))

    // Para orcamento X realizado 

    const historico = useSelector((state) => state.sistema.historico)
    const orcamentosSalvos = useSelector((state) => state.sistema.orcamentos)

  
    const [grafficValores] = useState({
        labels: labels,
        datasets: [
            {
                label: "Receita",
                data: receita,
                backgroundColor: "#5ac9ab",
                borderColor: "green",
                borderWidth: 2
            },
            {
                label: "Despesa",
                data: despesa,
                backgroundColor: "rgba(255,99,132,0.4)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 2,
                tension: 0.4
            }
        ]
    })

  
    const [despesasCategorias] = useState({
        labels: Object.keys(categorias),
        datasets: [
            {
                label: "despesa por categoria",
                data: Object.values(categorias).map((value) => value.porcentagem),
                backgroundColor: [
                "rgba(230, 8, 193, 0.65)",  
                "rgba(34, 54, 238, 0.77)",
                "rgba(38, 148, 192, 0.56)",
                "rgba(189, 21, 21, 0.78)"
                ],
                borderColor: "white",
                borderWidth: 2
            }
        ]
    })

    const objeto = dadosOrcamento(orcamentosSalvos, historico)
    const [orcamentoXrealizado] = useState({
        labels: Object.keys(objeto),
        datasets: [
            {
                label: "Orçamento salvo",
                data: Object.values(objeto).map((value) => value.orcamento),
                backgroundColor: "rgba(73, 89, 231, 0.78)",
                borderColor: "rgb(20, 42, 88)",
                borderWidth: 2,
                tension: 0.4
            }, 
            {
                label: "Valor gasto",
                data: Object.values(objeto).map((value) => value.valor),
                backgroundColor: "#63b9ff",
                borderColor: "blue",
                borderWidth: 2
            }
        ]
    })
    return {grafficValores, despesasCategorias, totalDespesas, receitaTotal, saldoTotal, orcamentoXrealizado}
    
}


