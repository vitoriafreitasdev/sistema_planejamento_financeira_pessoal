
import "./Metas.css"
import OrcamentosContainer from "../../componentes/OrcamentosContainer"
import useMetas from "./metas_hooks/useMetas"
import MetasContainer from "./MetasContainer"
const Metas = () => {

  const {setMeta, setValor,  setData,  mensagem, metas, adicionarMeta, handleAdd} = useMetas()
  
  return (
    <div className="metas-container-principal">
      <MetasContainer setData={setData} setMeta={setMeta} setValor={setValor} adicionarMeta={adicionarMeta}/>
      <div className="ativos-div">
          <p>{mensagem}</p>
          {Object.keys(metas).map((key) => (
            <OrcamentosContainer key={key} nome={key} p={key} meta={metas[key].valor} valor={metas[key].progresso} porcentagem={metas[key].porcentagem} restante={metas[key].restante} orcamento={false} funct={handleAdd}/>
          ))}
      </div>
    </div>
  )
}

export default Metas