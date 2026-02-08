
//ContainerGraffic
import "./Dashboard.css"

import OrcamentRealiz from "../../graficos/OrcamentRealiz.jsx"

const ContainerGraffic = ({orcamentoXrealizado}) => {
  return (
    
    <div className="orçamentoXrealizado" data-testid="ContainerGraffic">
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
  )
}

export default ContainerGraffic