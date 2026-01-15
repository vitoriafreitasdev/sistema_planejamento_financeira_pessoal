import { useState } from "react"
import { useSelector } from "react-redux"
export default function Dados(){
    const historico = useSelector((state) => state.sistema.historico)

    const labels = []
    const receita = {}
    const despesa = {}

    for (let c in historico){
        labels.push(c)
        historico[c].forEach(element => {
            if(element.receita_desp === "receita") {
                if(!receita[c]){
                    receita[c] = 0
                }
                receita[c] += parseFloat(element.valor)
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

    const [grafficValores] = useState({
        labels: labelsSort,
        datasets: [
            {
                label: "Receita",
                data: receita,
                backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",  
                "#50AF95",
                "#f3ba2f",
                "#2a71d0"
                ],
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


