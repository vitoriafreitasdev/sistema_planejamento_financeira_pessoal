import "./Orcamentos.css"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addOrcamento, dadosDespCategoria } from "../redux/slices/sistemaSlice"
const Orcamentos = () => {
  const dispatch = useDispatch()

  const orcamentosSalvos = useSelector((state) => state.sistema.orcamentos)
  const categoriaSalvas = useSelector((state) => state.sistema.categoriaDeDespesas)
  const orcamentosQuantidade = Object.keys(orcamentosSalvos).length

  const arrOrcamentos = [orcamentosSalvos]
  const arrCategorias  = [categoriaSalvas]
  console.log(arrOrcamentos, arrCategorias)

  useEffect(() => {
    dispatch(dadosDespCategoria())
  }, [])

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
              <option value="outro">Outro</option>
            </select> 
            <p className="p-info-orcamento">Limite mensal (R$)</p>
            <input className="orcamento-input" type="number" placeholder="0,00" onChange={(e) =>setOrcamentoNum(e.target.value)}/>
            <button className="orcamento-button" onClick={adicionarOrcamento}>+ Adicionar Orçamento</button>
        </div>
        {/* Para dados aqui fazer um array que vai subtrair o valor de cada categoria do orcamento com o que ta na categoria de despesas*/}
        <div className="orcamentos-ativos-div">
          <h3>Orçamentos Ativos</h3>
          <p>{orcamentosQuantidade} categorias com orçamento definido</p>
          {arrOrcamentos.map((d) => (
            <div>
              {d.alimentacao && <p>Alimentação: {d.alimentacao}</p>}
              {d.moradia && <p>Moradia: {d.moradia}</p>}
              {d.Lazer && <p>Lazer: {d.Lazer}</p>}
              {d.transporte && <p>Transporte: {d.transporte}</p>}
              {d.outro && <p>Outro: {d.outro}</p>}

            </div>
          ))}
          
        </div>
    </div>
  )
}

export default Orcamentos