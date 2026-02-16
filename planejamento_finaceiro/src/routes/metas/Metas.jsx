
import "./Metas.css"
import Container from "../../componentes/Container"
import useMetas from "./metas_hooks/useMetas"
import MetasContainer from "./MetasContainer"
const Metas = () => {

  const {setMeta, setValor,  setData, mensagem, metas, adicionarMeta, handleAdd} = useMetas()
  
  return (
    <div className="metas-container-principal">
      <MetasContainer setData={setData} setMeta={setMeta} setValor={setValor} adicionarMeta={adicionarMeta}/>
      <div className="ativos-div">
          <p data-testid="p-message">{mensagem}</p>
          {metas && Object.keys(metas).map((key) => (
            <Container key={key} nome={key} p={key} meta={metas[key].valor} valor={metas[key].progresso} porcentagem={metas[key].porcentagem} restante={metas[key].restante} orcamento={false} funct={handleAdd}/>
          ))}
      </div>
    </div>
  )
}

export default Metas