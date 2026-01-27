
import { useDispatch } from "react-redux"
import lix from "../images/lix.png"
import { excluirOrcamento } from "../redux/slices/sistemaSlice"

const OrcamentosContainer = ({nome, p, valor, valorSalvo, porcentagem, restante}) => {

  const dispatch = useDispatch()

  const exclusao = (item) => {
    dispatch(excluirOrcamento(item))
  }

  return (
    <div className="orcamento-container">
                
            <div className="h4-img-div">
            <h4>{p}</h4>
             <img className="lixeira-img" src={lix} alt="lixeira-icon" onClick={() => exclusao(nome)}/>
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