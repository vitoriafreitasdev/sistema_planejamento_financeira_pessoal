import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { dadosDespCategoria, dadosReceitaDesp } from "../redux/slices/sistemaSlice"
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
                "rgba(75,192,192,1)",
                "#ecf0f1",  
                "#50AF95",
                "#f3ba2f",
                "#2a71d0"
                ],
                borderColor: "green",
                borderWidth: 2
            }
        ]
    })

    return {grafficValores, despesasCategorias, totalDespesas, receitaTotal, saldoTotal}
    
}


