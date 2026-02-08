
import "./Orcamentos.css"

import Container from "../../componentes/Container"
import useOrcamento from "./orcamentos_hooks/useOrcamento"
import AddOrcamentoCont from "./AddOrcamentoCont"


const Orcamentos = () => {

  const {valores, setCategoria, setOrcamentoNum, mensagem, adicionarOrcamento} = useOrcamento()

  const props = {mensagem, setCategoria, setOrcamentoNum, adicionarOrcamento}

  return (
    <div className="orcamentos-container">
        <AddOrcamentoCont props={props} />
        <div className="ativos-div">
          <h3>Valor gasto no mês mais recente x Orçamento mensal</h3>
          {valores && Object.keys(valores).map((valor) => (
            <Container nome={valor} p={valor} valor={valores[valor] ?  valores[valor].valor : 0} meta={valores[valor].orcamento} porcentagem={valores[valor] ? valores[valor].porcentagem : 0} restante={valores[valor] ? valores[valor].restante : valores[valor].orcamento}/>
          ))}
        </div>
    </div>
  )
}

export default Orcamentos