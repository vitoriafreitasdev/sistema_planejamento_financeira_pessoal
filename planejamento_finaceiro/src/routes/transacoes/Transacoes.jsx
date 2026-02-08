
import "./Transacoes.css"
import useTransacoes from "./transacoes_hooks/useTransacoes"


const Transacoes = () => {

  const {despOuReceit, setDespOuReceit, setCategoria, setValor, setDescricao, setData, messagem, adicionarTransacao} = useTransacoes()
  
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