

import "./Dashboard.css"
import { Data, Despesas, Orcament_Realizado } from "../graficos/mockdata.js"
import { useState } from "react"
import Graffic from "../graficos/Graffic.jsx"
import DespesaCategoria from "../graficos/DespesaCategoria.jsx"
import OrcamentRealiz from "../graficos/OrcamentRealiz.jsx"

const Dashboard = () => {
    const [chartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",  // ← CORRIGIDO
        "#50AF95",
        "#f3ba2f",
        "#2a71d0"
        ],
        borderColor: "green",
        borderWidth: 2
      },
    {
        label: "Users Lost",
        data: Data.map((data) => data.userLost),
        backgroundColor: "rgba(255,99,132,0.4)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 2,
        tension: 0.4
    }
    ]
  });
  
  const [despesa] = useState({
    labels: Despesas.map((data) => data.category),
    datasets: [
      {
        label: "Despesas por Categoria",
        data: Despesas.map((data) => data.porcent),
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

  const [realiz] = useState({
    labels: Orcament_Realizado.map((data) => data.category),
    datasets: [
      {
        label: "Despesas por Categoria",
        data: Orcament_Realizado.map((data) => data.orcament),
        backgroundColor: [
          "rgb(16, 124, 6)",
          "#196125",  
          "#26861d",
          "#5df32f",
        ],
        borderColor: "green",
        borderWidth: 2
      },
      {
        label: "Despesas por Categoria",
        data: Orcament_Realizado.map((data) => data.gasto),
        backgroundColor: [
          "rgb(216, 14, 0)",
          "rgb(70, 16, 16)",  
          "#971616",
          "#f04848",
        ],
        borderColor: "red",
        borderWidth: 2
      }
    ]
  })
  return (
    <div className='dashboard-main-container'>
        <div className='container-info'>
            <div>
                <h4>Saldo Atual</h4>
                <p className="p-num saldo">R$ 6700</p>
                <p className="p-info saldo-info">Saldo positivo</p>
            </div>
            <div>
                <h4>Receita</h4>
                <p className="p-num receita">R$ 13000</p>
                <p className="p-info">Total de entrada</p>

            </div>
            <div>
                <h4>Despesas</h4>
                <p className="p-num despesa">R$ 6300</p>
                <p className="p-info">Total de saida</p>
            </div>
            <div>
                <h4>Metas de Economia</h4>
                <p className="p-num economia">30%</p>
                <p className="p-info">R$ 4500 de R$ 15000</p>
            </div>
        </div>

        <div className="container-graficos">
            <div className="tendencia-mensal">
                <p>Tendencia Mensal</p>
                <p>Receitas vs Despesas nos último 6 meses</p>
                <div className="grafico-div">
                   <Graffic key="tendencia-mensal-chart"  chartData={chartData} />
                </div>
            </div>

            <div className="despesa-categoria">
                <p>Despesas por Categoria</p>
                <p>Distribuição dos gastos</p>
                <div className="grafico-div">
                    <DespesaCategoria key="despesas-por-categoria" despesa={despesa}/>
                </div>
            </div>
        </div>

        <div className="orçamentoXrealizado-container">
            <div>
              <h4>Orçamento X Realizado</h4>
              <p>Compare seus limites com os seus gastos reais</p>
            </div>
            {/* ve se funcionou */}
            <div className="grafico-container">
                <OrcamentRealiz chartData={realiz}/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard