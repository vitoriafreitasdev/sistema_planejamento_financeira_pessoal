
import { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"

import { excluirDados } from "../../../redux/slices/sistemaSlice"

export default function useHistorico(){
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

    return {total, excluir, dados}

}