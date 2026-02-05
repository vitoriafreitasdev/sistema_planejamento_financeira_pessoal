
import "./Transacoes.css"

import { useState } from "react"
import { useDispatch} from "react-redux"
import {passarTransacao} from "../../redux/slices/sistemaSlice.js"

const Transacoes = () => {
  const [despOuReceit, setDespOuReceit] = useState("receita")
  const [categoria, setCategoria] = useState("")
  const [valor, setValor] = useState("")
  const [descricao, setDescricao] = useState("")
  const [data, setData] = useState("")
  const [messagem, setMensagem] = useState("")

  const dispatch = useDispatch()
  
  const adicionarTransacao = () => {

    if(categoria.length == 0) {
      setMensagem("Espaço categoria vazio")
      return
    }
    if(data.length == 0) {
      setMensagem("Espaço de data vazio")
      return
    }
    if(valor.length == 0) {
      setMensagem("Espaço de valor vazio")
      return
    }
    if(descricao.length == 0) {
      setMensagem("Espaço de descrição vazio")
      return
    }

    const transacao = {
      categoria: categoria,
      receita_desp: despOuReceit,
      valor: valor,
      descricao: descricao,
      data: data,
    }

    dispatch(passarTransacao(transacao))
    setMensagem("Transação adicionada com sucesso")

    setTimeout(() => {
      setMensagem("")
    }, 2000)

  }
  return (
    <div className="transacoes-container">
      <p>{messagem}</p>
      <h3>Nova Transação</h3>
      <p>Adicione receitas ou despesas</p>
      
      <div className="buttons-container">
        <button onClick={() => setDespOuReceit("receita")}>Receita</button>
        <button onClick={() => setDespOuReceit("despesa")}>Despesa</button>
        </div>
        <div className="infos-container">
          <h3>Categoria</h3>
          {
            despOuReceit === "despesa" ? 
            <select onChange={(e) => setCategoria(e.target.value)}>
              <option value="">Selecione uma opção</option>
              <option value="alimentacao">Alimentação</option>
              <option value="transporte">Transporte</option>
              <option value="moradia">Moradia</option>
              <option value="Lazer">Lazer</option>
              <option value="outro">Outro</option>
            </select> 
            : 
            <select onChange={(e) => setCategoria(e.target.value)}>
              <option value="">Selecione uma opção</option>
              <option value="salario">Salário</option>
              <option value="outro">Outro</option>
            </select>
          }
          <h3>Valor</h3>
          <input className="input-transacoes" type="number" onChange={(e) => setValor(e.target.value)}/>
          <h3>Descrição</h3>
          <input className="input-transacoes" type="text" onChange={(e) => setDescricao(e.target.value)}/>
          <h3>Data</h3>
          <input className="input-transacoes" type="date" onChange={(e) => setData(e.target.value)}/>
      </div>
    {despOuReceit === "despesa" ? <div className="buttons"><button onClick={adicionarTransacao}>+ Adicionar Despesa</button></div> : <div className="buttons"> <button  onClick={adicionarTransacao}>+ Adicionar Receita</button> </div>}
    </div>
   
  )
}

export default Transacoes