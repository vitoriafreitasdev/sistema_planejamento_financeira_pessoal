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
    <div className="main-orcamentos-container">
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
          <div>
            {valores.moradia && 
            <label>
              <span>{valores.moradia.valor}</span>
              <input type="range" value={valores.moradia.valor} max={orcamentosSalvos.moradia}/>
              <span>{orcamentosSalvos.moradia}</span>
            </label>
            }
          </div>

          <div>
            {valores.transporte && 
            <label>
              <span>{valores.transporte.valor}</span>
              <input type="range" value={valores.transporte.valor} max={orcamentosSalvos.transporte}/>
              <span>{orcamentosSalvos.transporte}</span>
            </label>
            }

          </div>

          <div>
            {valores.alimentacao && 
            <label>
              <span>{valores.alimentacao.valor}</span>
              <input type="range" value={valores.alimentacao.valor} max={orcamentosSalvos.alimentacao}/>
              <span>{orcamentosSalvos.alimentacao}</span>
            </label>}
          </div>
          
          <div>
            {valores.Lazer && 
            <label>
              <span>{valores.Lazer.valor}</span>
              <input type="range" value={valores.Lazer.valor} max={orcamentosSalvos.Lazer}/>
              <span>{orcamentosSalvos.Lazer}</span>
            </label>}
          </div>
            
        </div>
    </div>
  )
}

export default Orcamentos