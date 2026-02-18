
import lix from "../images/lix.png"
import ContainerParaMetas from "./ContainerParaMetas"
import useContainer from "../hooks/useContainer"

// Esse componente é esta sendo utilizado tando para as metas tanto para os orçamento, caso seja orçamento, orcamento=true, se não false
const Container = ({nome, p, valor, meta, porcentagem, restante, orcamento=true, funct=false}) => {
  const {showComponente, setShowComponente, progressoValor, setProgressoValor, exclusao} = useContainer(orcamento)
  const propsParaCont = {setShowComponente, showComponente, setProgressoValor, funct, nome, progressoValor}

  return (
    <div className="orcamento-container">
                
            <div className="h4-img-div">
            <h4 >{p}</h4>
             <img className="lixeira-img" src={lix} alt="lixeira-icon" onClick={() => exclusao(nome)}/>
            </div>

            <div className="orcamento-div1">
            <div className="span-div">
                <span className="span-valor">R$ {valor}</span> 
                <span className="span-valor-orcamento" data-testid="span">de R${meta}</span>
            </div>
            <input
              className="input-range"
              type="range"
              value={valor}
              max={meta}
              readOnly
            />
            </div>

            <div className="orcamento-div2">
            <p className="p-porcentagem">{porcentagem}% {orcamento ? "utilizado" : "completo"}</p>
            <p className="p-valor">{orcamento ? "R$" : ""} {restante} {orcamento ? "disponível" : "dias restantes"}</p>
            </div>

            {/* Essa parte é para as metas */}
            {!orcamento && 
            <ContainerParaMetas props={propsParaCont}/>
            }
    </div>
  )
}

export default Container