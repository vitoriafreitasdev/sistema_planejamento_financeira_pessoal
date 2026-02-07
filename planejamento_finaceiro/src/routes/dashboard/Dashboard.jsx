
import "./Dashboard.css"

import Graffic from "../../graficos/Graffic.jsx"
import DespesaCategoria from "../../graficos/DespesaCategoria.jsx"
import Dados from "../../utils/graficosDados.jsx"
import BoxData from "./BoxData.jsx"
import GrafficBox from "./GrafficBox.jsx"
import ContainerGraffic from "./ContainerGraffic.jsx"

const Dashboard = () => {
  const {grafficValores, despesasCategorias, totalDespesas, receitaTotal, saldoAtual, orcamentoXrealizado, total, progresso, porcentagemMetas} = Dados()

  return (
    <div className='dashboard-main-container'>
        <div className='container-info'>
            
            <BoxData title={"Saldo Total"} valueP1={saldoAtual} valueP2={saldoAtual > 0 ? "Saldo positivo" : "Saldo negativo"} P1ClassName={"p-num"} P2ClassName={`p-info ${saldoAtual > 0 ? "saldo-positivo" : "saldo-negativo"}`}/>

            <BoxData title={"Receita Total"} valueP1={receitaTotal} valueP2={"Total de receita registrada"} P1ClassName={"p-num saldo"} P2ClassName={"p-info saldo-info"}/>
        
            <BoxData title={"Despesas"} valueP1={totalDespesas} valueP2={"Total de despesas registrada"} P1ClassName={"p-num despesa"} P2ClassName={"p-info"}/>
           
            <BoxData title={"Metas de Economia"} valueP1={!Number.isNaN(Number(porcentagemMetas)) ? porcentagemMetas : "0"} valueP2={`R$ ${progresso} de R$ ${total}`} P1ClassName={"p-num despesa"} P2ClassName={"p-info"}/>

        </div>

        <div className="container-graficos">

            <GrafficBox classN={"tendencia-mensal"} title={"Tendencia Mensal"} pContent={"Receitas vs Despesas, últimas 6 registradas"} classN2={"grafico-div"} component={<Graffic key="tendencia-mensal-chart"  chartData={grafficValores} />}/>

            <GrafficBox classN={"despesa-categoria"} title={"Despesas por Categoria"} pContent={"Distribuição dos gastos"} classN2={"grafico-div"} component={<DespesaCategoria key="despesas-por-categoria" despesa={despesasCategorias}/>}/>
            
        </div>

        <ContainerGraffic orcamentoXrealizado={orcamentoXrealizado}/>

    </div>
  )
}

export default Dashboard