import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { dadosDespCategoria, dadosReceitaDesp } from "../redux/slices/sistemaSlice"
export default function  Dados(){
    const dispatch = useDispatch()
    dispatch(dadosReceitaDesp())
    dispatch(dadosDespCategoria())
    const labels = useSelector((state) => state.sistema.labels)
    const receita = useSelector((state) => state.sistema.receita)
    const despesa = useSelector((state) => state.sistema.despesa)


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

    return {grafficValores}
    
}


