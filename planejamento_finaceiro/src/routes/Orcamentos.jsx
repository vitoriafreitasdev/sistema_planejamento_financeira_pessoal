/* eslint-disable no-unused-vars */
import "./Orcamentos.css"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addOrcamento, dadosDespCategoria } from "../redux/slices/sistemaSlice"
import dadosOrcamento from "../hooks/orcamentos"
import OrcamentosContainer from "../componentes/OrcamentosContainer"

// fazer a logica de exclusao 
const Orcamentos = () => {

  const historico = useSelector((state) => state.sistema.historico)
  const orcamentosSalvos = useSelector((state) => state.sistema.orcamentos)
    
  const dispatch = useDispatch()

  const [categoria, setCategoria] = useState("")
  const [orcamentoNum, setOrcamentoNum] = useState("")
  const [mensagem, setMensagem] = useState(null)

  const adicionarOrcamento = () => {
    if(categoria.length == 0 || orcamentoNum.length == 0){
      setMensagem("Preencha tudo.")
      return
    }
    dispatch(addOrcamento({categoria: categoria, orcamento: orcamentoNum}))
    setMensagem("Adicionado com sucesso.")

    setTimeout(() => {
      setMensagem("")
    }, 2000)
  }

  const valores = dadosOrcamento(orcamentosSalvos, historico)

  // fazer mais testes e depois fazer a logica de exclusão

  return (
    <div className="orcamentos-container">
        
        <div className="adicionar-orcamento-div"> 
          
            {mensagem && <p className="mensagem-orcamento">{mensagem}</p>}
            <h3>Adicionar Orçamento</h3>
            <p className="subtitulo">Definina limites gastos por categoria</p>
            <p className="p-info-orcamento">Categoria</p>
            <select className="orcamentos-select" onChange={(e) => setCategoria(e.target.value)}>
              <option value="">Selecione uma categoria</option>
              <option value="alimentacao">Alimentação</option>
              <option value="transporte">Transporte</option>
              <option value="moradia">Moradia</option>
              <option value="Lazer">Lazer</option>
            </select> 
            <p className="p-info-orcamento">Limite Mensal (R$)</p>
            <input className="orcamento-input" type="number" placeholder="0,00" onChange={(e) =>setOrcamentoNum(e.target.value)}/>
            <button className="orcamento-button" onClick={adicionarOrcamento}>+ Adicionar Orçamento</button>
        </div>
        
            
        <div className="orcamentos-ativos-div">
          <h3>Valor gasto no mês mais recente x Orçamento mensal</h3>
          
          {orcamentosSalvos.moradia && 
            <OrcamentosContainer nome={"Moradia"} valor={valores.moradia ?  valores.moradia.valor : 0} valorSalvo={orcamentosSalvos.moradia} porcentagem={valores.moradia ? valores.moradia.porcentagem : 0} restante={valores.moradia ? valores.moradia.restante : orcamentosSalvos.moradia}/>
          }
          
          {orcamentosSalvos.transporte && 
            <OrcamentosContainer nome={"Transporte"} valor={valores.transporte ?  valores.transporte.valor : 0} valorSalvo={orcamentosSalvos.transporte} porcentagem={valores.transporte ? valores.transporte.porcentagem : 0} restante={valores.transporte ? valores.transporte.restante : orcamentosSalvos.transporte}/>
          }

          {orcamentosSalvos.alimentacao && 
            <OrcamentosContainer nome={"Alimentação"} valor={valores.alimentacao ?  valores.alimentacao.valor : 0} valorSalvo={orcamentosSalvos.alimentacao} porcentagem={valores.alimentacao ? valores.alimentacao.porcentagem : 0} restante={valores.alimentacao ? valores.alimentacao.restante : orcamentosSalvos.alimentacao}/>
          }

          {orcamentosSalvos.Lazer && 
            <OrcamentosContainer nome={"Lazer"} valor={valores.Lazer ?  valores.Lazer.valor : 0} valorSalvo={orcamentosSalvos.Lazer} porcentagem={valores.Lazer ? valores.Lazer.porcentagem : 0} restante={valores.Lazer ? valores.Lazer.restante : orcamentosSalvos.Lazer}/>
          }
            
        </div>
    </div>
  )
}

export default Orcamentos