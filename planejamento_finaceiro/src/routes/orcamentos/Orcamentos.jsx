
import "./Orcamentos.css"

import OrcamentosContainer from "../../componentes/OrcamentosContainer"
import useOrcamento from "./orcamentos_hooks/useOrcamento"
import AddOrcamentoCont from "./AddOrcamentoCont"


const Orcamentos = () => {

  const {valores, setCategoria, setOrcamentoNum, mensagem, adicionarOrcamento, orcamentosSalvos} = useOrcamento()

  const props = {mensagem, setCategoria, setOrcamentoNum, adicionarOrcamento}
  return (
    <div className="orcamentos-container">
        
        <AddOrcamentoCont props={props} />
        
          {/* refatorar isso aqui fazer um map para rodar os orcametoscontainer */}
        <div className="ativos-div">
          <h3>Valor gasto no mês mais recente x Orçamento mensal</h3>
          
          {orcamentosSalvos.moradia && 
            <OrcamentosContainer nome={"moradia"} p={"Moradia"} valor={valores.moradia ?  valores.moradia.valor : 0} meta={orcamentosSalvos.moradia} porcentagem={valores.moradia ? valores.moradia.porcentagem : 0} restante={valores.moradia ? valores.moradia.restante : valores.orcamento}/>
          }
          
          {orcamentosSalvos.transporte && 
            <OrcamentosContainer nome={"transporte"} p={"Transporte"} valor={valores.transporte ?  valores.transporte.valor : 0} meta={orcamentosSalvos.transporte} porcentagem={valores.transporte ? valores.transporte.porcentagem : 0} restante={valores.transporte ? valores.transporte.restante : valores.orcamento}/>
          }

          {orcamentosSalvos.alimentacao && 
            <OrcamentosContainer nome={"alimentacao"} p={"Alimentação"} valor={valores.alimentacao ?  valores.alimentacao.valor : 0} meta={orcamentosSalvos.alimentacao} porcentagem={valores.alimentacao ? valores.alimentacao.porcentagem : 0} restante={valores.alimentacao ? valores.alimentacao.restante : valores.orcamento}/>
          }

          {orcamentosSalvos.Lazer && 
            <OrcamentosContainer nome={"Lazer"} p={"Lazer"} valor={valores.Lazer ?  valores.Lazer.valor : 0} meta={orcamentosSalvos.Lazer} porcentagem={valores.Lazer ? valores.Lazer.porcentagem : 0} restante={valores.Lazer ? valores.Lazer.restante : valores.orcamento}/>
          }
            
        </div>
    </div>
  )
}

export default Orcamentos