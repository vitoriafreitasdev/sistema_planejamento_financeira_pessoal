/* eslint-disable no-unused-vars */
import { useState } from "react"
import "./Metas.css"
import {useDispatch, useSelector} from "react-redux"
import { addMetas, adicionarProgressoAsMetas } from "../../redux/slices/sistemaSlice"
import OrcamentosContainer from "../../componentes/OrcamentosContainer"
const Metas = () => {
  const [meta, setMeta] = useState("")
  const [valor, setValor] = useState(0)
  const [data, setData] = useState("")
  const [progresso, setProgresso] = useState(0)
  const [mensagem, setMensagem] = useState(null)


  const dispatch = useDispatch()
  const metas = useSelector((state) => state.sistema.metas)

  const adicionarMeta = () => {
    const objetoMeta = {
      "meta": meta,
      "valor": valor,
      "progresso": 0,
      "data": data
    }

    dispatch(addMetas(objetoMeta))

    
  }


  const handleAdd = (key, quantidade) => {
    try {
      dispatch(adicionarProgressoAsMetas({key: key, quantidade: quantidade}))
    } catch (error) {
      setMensagem(error.message)
      setTimeout(() => {
        setMensagem(null)
      }, 2000)
    }
  }

  // trabalhar na mensagem de erro
  
  return (
    <div className="metas-container-principal">
      <div className="criacao-metas-container">
          
          <h3>Nova meta de economia</h3>
          <p>Defina objetivos financeiros, reserve um dinheiro para eles e acompanhe o seu progresso.</p>
          <h4>Nome da meta</h4>
          <input type="text" placeholder="Ex: Viagem, Emergência, Carro" onChange={(e) => setMeta(e.target.value)}/>
          <h4>Valor alvo (R$)</h4>
          <input type="number" placeholder="0,00" onChange={(e) => setValor(e.target.value)}/>
          <h4>Prazo</h4>
          <input type="date" onChange={(e) => setData(e.target.value)}/>
          <button onClick={adicionarMeta}>+ Adicionar Meta</button>
      </div>

      <div className="ativos-div">
          <p>{mensagem}</p>
          {Object.keys(metas).map((key) => (
            <OrcamentosContainer key={key} nome={key} p={key} meta={metas[key].valor} valor={metas[key].progresso} porcentagem={metas[key].porcentagem} restante={metas[key].restante} orcamento={false} funct={handleAdd}/>
          ))}
      </div>
    </div>
  )
}

export default Metas