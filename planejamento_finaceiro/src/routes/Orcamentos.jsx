/* eslint-disable no-unused-vars */
import "./Orcamentos.css"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addOrcamento, dadosDespCategoria } from "../redux/slices/sistemaSlice"
import dadosOrcamento from "../hooks/orcamentos"

const Orcamentos = () => {

  const historico = useSelector((state) => state.sistema.historico)
  const orcamentosSalvos = useSelector((state) => state.sistema.orcamentos)
    
  const dispatch = useDispatch()

  const orcamentosQuantidade = Object.keys(orcamentosSalvos).length

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
          <h3>Valor gasto no mes mais recente x Orçamento mensal</h3>
          
          {valores.moradia && 
          <div className="orcamento-container">
            <h4>Moradia</h4>
            <div className="orcamento-div1">
              <div className="span-div">
                <span>R$ {valores.moradia.valor}</span> 
                <span>de R${orcamentosSalvos.moradia}</span>
              </div>
              <input className="input-range" type="range" value={valores.moradia.valor} max={orcamentosSalvos.moradia}/>
            </div>

            <div className="orcamento-div2">
              <p>{valores.moradia.porcentagem}% utilizado</p>
              <p>R${valores.moradia.restante} disponível</p>
            </div>
          </div>
          }
          
          {valores.transporte && 
          <div className="orcamento-container">
            <h4>Transporte</h4>
            <div className="orcamento-div1">
              
              <div className="span-div">
                <span>R${valores.transporte.valor}</span> 
                <span>de R${orcamentosSalvos.transporte}</span>
              </div>

              <input className="input-range" type="range" value={valores.transporte.valor} max={orcamentosSalvos.transporte}/>
              
            </div>

            <div className="orcamento-div2">
              <p>{valores.transporte.porcentagem}% utilizado</p>
              <p>R${valores.transporte.restante} disponível</p>
            </div>
          </div>
          }
        
          {valores.alimentacao && 
          <div className="orcamento-container">
            <h4>Alimentacao</h4>
            <div className="orcamento-div1">
              <div className="span-div">
                <span>R${valores.alimentacao.valor}</span> 
                <span>de R${orcamentosSalvos.alimentacao}</span>
              </div>
              <input className="input-range" type="range" value={valores.alimentacao.valor} max={orcamentosSalvos.alimentacao}/>
              
            </div>

            <div className="orcamento-div2">
              <p>{valores.alimentacao.porcentagem}% utilizado</p>
              <p>R${valores.alimentacao.restante} disponível</p>
            </div>
          </div>}
      
          {valores.Lazer && 
          <div className="orcamento-container">
            <h4>Lazer</h4>
            <div className="orcamento-div1">
              <div className="span-div">
                <span>R${valores.Lazer.valor}</span> 
                <span>de R${orcamentosSalvos.Lazer}</span>
              </div>
              <input className="input-range" type="range" value={valores.Lazer.valor} max={orcamentosSalvos.Lazer}/>
            </div>

            <div className="orcamento-div2">
              <p>{valores.Lazer.porcentagem}% utilizado</p>
              <p>R${valores.Lazer.restante} disponível</p>
            </div>
          </div>}
    
            
        </div>
    </div>
  )
}

export default Orcamentos