/* eslint-disable no-unused-vars */
import { useState } from "react"
import "./Metas.css"
import {useDispatch, useSelector} from "react-redux"
import { addMetas } from "../redux/slices/sistemaSlice"
import useMetas from "../hooks/metas"
const Metas = () => {
  const [meta, setMeta] = useState("")
  const [valor, setValor] = useState(0)
  const [data, setData] = useState("")
  const [progresso, setProgresso] = useState(0)

  const dispatch = useDispatch()
  const metas = useSelector((state) => state.sistema.metas)
  const saldoAtual = useSelector((state) => state.sistema.saldoAtual)


  const adicionarMeta = () => {
    const objetoMeta = {
      "meta": meta,
      "valor": valor,
      "data": data
    }

    dispatch(addMetas(objetoMeta))

    
  }


  useMetas(metas, progresso)

  
  return (
    <div className="metas-container-principal">
      <div className="criacao-metas-container">
          <h3>Nova meta de economia</h3>
          <p>Defina objetivos financeiros e acompanhe seu progresso</p>
          <h4>Nome da meta</h4>
          <input type="text" placeholder="Ex: Viagem, Emergência, Carro" onChange={(e) => setMeta(e.target.value)}/>
          <h4>Valor alvo (R$)</h4>
          <input type="number" placeholder="0,00" onChange={(e) => setValor(e.target.value)}/>
          <h4>Prazo</h4>
          <input type="date" onChange={(e) => setData(e.target.value)}/>
          <button onClick={adicionarMeta}>+ Adicionar Meta</button>
      </div>

      <div className="metas-ativas-conatiner">

      </div>
    </div>
  )
}

export default Metas