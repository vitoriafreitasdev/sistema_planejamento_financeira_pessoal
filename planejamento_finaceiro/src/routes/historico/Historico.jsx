import { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import icone from "../../images/icone.png"
import setaverde from "../../images/setaverde2.avif"
import setavermelha from "../../images/seta2.avif"
import { excluirDados } from "../../redux/slices/sistemaSlice"

import "./Historico.css"
const Historico = () => {
    const historico = useSelector((state) => state.sistema.historico)
    const dados = useSelector((state) => state.sistema.dados)
    const dispatch = useDispatch()
    const [total, setTotal] = useState(0)

    
    useEffect(() => {
        let valores = 0

        dados.forEach((d) => {
            valores += d.length
            setTotal(valores)
        })
    
    }, [historico, dados])

    
    const excluir = (descricao, categoria, data) => {
    
        dispatch(excluirDados({descricao: descricao, categoria: categoria, data: data}))
    }

  return (
    <div className='container-maior'>
        <div className='historico-container'>
            <h3 className="h3-transacoes">Histórico de Transações</h3>
            <p className="p-total"> {total} transações registradas</p>
            {
                dados && dados.map((d) => (
                    d.map((dd) => (
                        <div key={dd.categoria + dd.descricao + dd.data} className={`transicoes ${dd.receita_desp}s`}>

                            <div className="itens">
                                <div className="itens-div1">
                                    <img className="img-seta" src={dd.receita_desp == "receita" ? `${setaverde}` : `${setavermelha}`} alt="" />
                                    <div >
                                    <span className="descricao-span">{dd.descricao} </span>
                                    <span  className="categoria-span"> {dd.categoria}</span>
                                    <p className="data">{dd.data}</p>
                                    </div>
                                    
                                </div>
             
                                <div className="itens-div">
                                    <p className={`${dd.receita_desp}-p`}>{dd.receita_desp == "receita" ? "+" : "-"}R$ {dd.valor} </p>  
                                    <img className="img-icone" src={icone} alt="icone" onClick={() => excluir(dd.descricao, dd.categoria, dd.data)}/>
                                </div>
                            </div>
                        </div>
                        
                    ))
                ))
            }
        </div>
    </div>
  )
}

export default Historico