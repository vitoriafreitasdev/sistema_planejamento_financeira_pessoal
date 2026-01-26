
import lix from "../images/lix.png"

const OrcamentosContainer = ({nome ,valor, valorSalvo, porcentagem, restante}) => {
  return (
    <div className="orcamento-container">
                
            <div className="h4-img-div">
            <h4>{nome}</h4>
            <img className="lixeira-img" src={lix} alt="lixeira-icon" />
            </div>

            <div className="orcamento-div1">
            <div className="span-div">
                <span className="span-valor">R$ {valor}</span> 
                <span className="span-valor-orcamento">de R${valorSalvo}</span>
            </div>
            <input className="input-range" type="range" value={valor } max={valorSalvo}/>
            </div>

            <div className="orcamento-div2">
            <p className="p-porcentagem">{porcentagem}% utilizado</p>
            <p className="p-valor">R$ {restante} disponível</p>
            </div>
    </div>
  )
}

export default OrcamentosContainer