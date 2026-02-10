
//ContainerGraffic
import "./Dashboard.css"

import OrcamentRealiz from "../../graficos/OrcamentRealiz.jsx"

const ContainerGraffic = ({orcamentoXrealizado}) => {
  return (
    
    <div className="orçamentoXrealizado" data-testid="ContainerGraffic">
        <div data-testid="divelement" className="container">
            <div data-testid="divelement">
              <h2>Orçamento X Realizado</h2>
              <p>Compare seus limites com os seus gastos reais</p>
            </div>
            <div data-testid="divelement" className="grafico-container">
                <OrcamentRealiz chartData={orcamentoXrealizado}/> 
            </div>
        </div>
    </div>
  )
}

export default ContainerGraffic