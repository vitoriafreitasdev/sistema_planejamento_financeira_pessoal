

import { useDispatch } from "react-redux"
import lix from "../images/lix.png"
import { excluirMetas, excluirOrcamento } from "../redux/slices/sistemaSlice"
import { useState } from "react"

// Esse componente é esta sendo utilizado tando para as metas tanto para os orçamento, caso seja orçamento, orcamento=true, se não false
const OrcamentosContainer = ({nome, p, valor, meta, porcentagem, restante, orcamento=true, funct=false}) => {
  const [showComponente, setShowComponente] = useState(false)
  const [progressoValor, setProgressoValor] = useState(0)

  const dispatch = useDispatch()

  const exclusao = (item) => {
    if(orcamento){
      dispatch(excluirOrcamento(item))
    }

    if(!orcamento){
      dispatch(excluirMetas(item))
      window.location.reload()
    }

  }
   
  // melhorar esse componente, ver se da usar outro forma que nao seja o window.location.reload

  return (
    <div className="orcamento-container">
                
            <div className="h4-img-div">
            <h4>{p}</h4>
             <img className="lixeira-img" src={lix} alt="lixeira-icon" onClick={() => exclusao(nome)}/>
            </div>

            <div className="orcamento-div1">
            <div className="span-div">
                <span className="span-valor">R$ {valor}</span> 
                <span className="span-valor-orcamento">de R${meta}</span>
            </div>
            <input className="input-range" type="range" value={valor } max={meta}/>
            </div>

            <div className="orcamento-div2">
            <p className="p-porcentagem">{porcentagem}% {orcamento ? "utilizado" : "completo"}</p>
            <p className="p-valor">{orcamento ? "R$" : ""} {restante} {orcamento ? "disponível" : "dias restantes"}</p>
            </div>

            {/* Essa parte é para as metas */}
            {!orcamento && <button className="progresso-btn" onClick={() => setShowComponente(!showComponente)}>Adicionar Progresso</button>}

            {showComponente && 
            <div className="progresso-div">
              <input type="number" onChange={(e) => setProgressoValor(e.target.value)}  placeholder="progresso valor"/>
              <button onClick={() => funct(nome, progressoValor)}>Adicionar</button>
            </div>}
    </div>
  )
}

export default OrcamentosContainer