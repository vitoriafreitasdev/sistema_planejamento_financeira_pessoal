import { useEffect, useState } from "react"
import {useSelector} from "react-redux"

import "./Historico.css"
const Historico = () => {
    const historico = useSelector((state) => state.sistema.historico)
    const [dados] = useState(Object.values(historico))
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let valores = 0

        dados.forEach((d) => {
            console.log(d)
            valores += d.length
            setTotal(valores)
        })
    
    }, [historico, dados])

    // terminar o css, colocar o icone da seta para baixo pra despesas e para cima para receitas
  return (
    <div className='container-maior'>
        <div className='historico-container'>
            <h3>Histórico de Transações</h3>
            <p> {total} transações registradas</p>
            {
                dados && dados.map((d) => (
                    d.map((dd) => (
                        <div className={`transicoes ${dd.receita_desp}s`}>
                            <h3>{dd.descricao} <span className="categoria-span">{dd.categoria}</span></h3>
                            <p>{dd.data}</p>
                            <h3>{dd.valor}</h3>
                        </div>
                    ))
                ))
            }
        </div>
    </div>
  )
}

export default Historico