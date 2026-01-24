/* eslint-disable no-unused-vars */
import "./Orcamentos.css"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addOrcamento, dadosDespCategoria } from "../redux/slices/sistemaSlice"
import dadosOrcamento from "../hooks/orcamentos"

import lixeiraicon from "../images/lixeiraicon.png"
import lix from "../images/lix.png"

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
          <h3>Valor gasto no mês mais recente x Orçamento mensal</h3>
          
          {orcamentosSalvos.moradia && 
          <div className="orcamento-container">
            
            <div className="h4-img-div">
              <h4>Moradia</h4>
              <img className="lixeira-img" src={lix} alt="lixeira-icon" />
            </div>

            <div className="orcamento-div1">
              <div className="span-div">
                <span className="span-valor">R$ {valores.moradia ? valores.moradia.valor : 0}</span> 
                <span className="span-valor-orcamento">de R${orcamentosSalvos.moradia}</span>
              </div>
              <input className="input-range" type="range" value={valores.moradia ? valores.moradia.valor : 0 } max={orcamentosSalvos.moradia}/>
            </div>

            <div className="orcamento-div2">
              <p className="p-porcentagem">{valores.moradia ? valores.moradia.porcentagem : 0}% utilizado</p>
              <p className="p-valor">R$ {valores.moradia ? valores.moradia.restante : orcamentosSalvos.moradia} disponível</p>
            </div>
          </div>
          }
          
          {orcamentosSalvos.transporte && 
          <div className="orcamento-container">

            <div className="h4-img-div">
              <h4>Transporte</h4>
              <img className="lixeira-img" src={lix} alt="lixeira-icon" />
            </div>

            <div className="orcamento-div1">
              
              <div className="span-div">
                <span className="span-valor">R$ {valores.transporte ? orcamentosSalvos.valor : 0}</span> 
                <span className="span-valor-orcamento">de R${orcamentosSalvos.transporte}</span>
              </div>

              <input className="input-range" type="range" value={valores.transporte ? orcamentosSalvos.valor : 0} max={orcamentosSalvos.transporte}/>
              
            </div>

            <div className="orcamento-div2">
              <p className="p-porcentagem">{valores.transporte ? orcamentosSalvos.porcentagem : 0}% utilizado</p>
              <p className="p-valor">R$ {valores.transporte ? orcamentosSalvos.restante : orcamentosSalvos.transporte} disponível</p>
            </div>
          </div>
          }
        
          {orcamentosSalvos.alimentacao && 
          <div className="orcamento-container">
            
            <div className="h4-img-div">
              <h4>Alimentacao</h4>
              <img className="lixeira-img" src={lix} alt="lixeira-icon" />
            </div>

            <div className="orcamento-div1">
              <div className="span-div">
                <span className="span-valor">R$ {valores.alimentacao ? valores.alimentacao.valor : 0}</span> 
                <span className="span-valor-orcamento">de R${orcamentosSalvos.alimentacao}</span>
              </div>
              <input className="input-range" type="range" value={valores.alimentacao ? valores.alimentacao.valor : 0} max={orcamentosSalvos.alimentacao}/>   
            </div>

            <div className="orcamento-div2">
              <p className="p-porcentagem">{valores.alimentacao ? valores.alimentacao.porcentagem : 0}% utilizado</p>
              <p className="p-valor">R$ {valores.alimentacao ? valores.alimentacao.restante : orcamentosSalvos.alimentacao} disponível</p>
            </div>
          </div>}
      
          {orcamentosSalvos.Lazer && 
          <div className="orcamento-container">
            
            <div className="h4-img-div">
              <h4>Lazer</h4>
              <img className="lixeira-img" src={lix} alt="lixeira-icon" />
            </div>

            <div className="orcamento-div1">
              <div className="span-div">
                <span className="span-valor">R$ {valores.Lazer ? valores.Lazer.valor : 0}</span> 
                <span className="span-valor-orcamento">de R${orcamentosSalvos.Lazer}</span>
              </div>
              <input className="input-range" type="range" value={valores.Lazer ? valores.Lazer.valor : 0} max={orcamentosSalvos.Lazer}/>
            </div>

            <div className="orcamento-div2">
              <p className="p-porcentagem">{valores.Lazer ? valores.Lazer.porcentagem : 0}% utilizado</p>
              <p className="p-valor">R$ {valores.Lazer ? valores.Lazer.restante : orcamentosSalvos.Lazer} disponível</p>
            </div>
          </div>}
    
            
        </div>
    </div>
  )
}

export default Orcamentos