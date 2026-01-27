
import "./Dashboard.css"

import Graffic from "../graficos/Graffic.jsx"
import DespesaCategoria from "../graficos/DespesaCategoria.jsx"
import OrcamentRealiz from "../graficos/OrcamentRealiz.jsx"

import Dados from "../hooks/graficosDados.jsx"
const Dashboard = () => {
  const {grafficValores, despesasCategorias, totalDespesas, receitaTotal, saldoTotal, orcamentoXrealizado} = Dados()


  return (
    <div className='dashboard-main-container'>
        <div className='container-info'>
            <div>
                <h4>Saldo Total</h4>
                <p className="p-num">R$ {saldoTotal}</p>
                <p className={`p-info ${saldoTotal > 0 ? "saldo-positivo" : "saldo-negativo"}`}>{saldoTotal > 0 ? "Saldo positivo" : "Saldo negativo"}</p>
            </div>

            <div>
                <h4>Receita Total</h4>
                <p className="p-num saldo">R$ {receitaTotal}</p>
                <p className="p-info saldo-info">Total de receita registrada</p>
            </div>
           
            <div>
                <h4>Despesas</h4>
                <p className="p-num despesa">R$ {totalDespesas}</p>
                <p className="p-info">Total de despesas registrada</p>
            </div>
            <div>
                <h4>Metas de Economia</h4>
                <p className="p-num economia"> </p>
                <p className="p-info"> </p>
            </div>
        </div>

        <div className="container-graficos">
            <div className="tendencia-mensal">
                <h3>Tendencia Mensal</h3>
                <p>Receitas vs Despesas, últimas 6 registradas</p>
                <div className="grafico-div">
                    <Graffic key="tendencia-mensal-chart"  chartData={grafficValores} /> 
                </div>
            </div>

            <div className="despesa-categoria">
                <h3>Despesas por Categoria</h3>
                <p>Distribuição dos gastos</p>
                <div className="grafico-div">
                    <DespesaCategoria key="despesas-por-categoria" despesa={despesasCategorias}/>
                </div>
            </div>
        </div>

        <div className="orçamentoXrealizado">
            <div className="container">
                <div>
                <h2>Orçamento X Realizado</h2>
                <p>Compare seus limites com os seus gastos reais</p>
              </div>
              <div className="grafico-container">
                   <OrcamentRealiz chartData={orcamentoXrealizado}/> 
              </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard