
import { useDispatch } from "react-redux"
import { excluirMetas, excluirOrcamento } from "../redux/slices/sistemaSlice"
import { useState } from "react"

export default function useContainer(orcamento){
    const [showComponente, setShowComponente] = useState(false)
    const [progressoValor, setProgressoValor] = useState(0)

    const dispatch = useDispatch()

    const exclusao = (item) => {
        if(orcamento){
        dispatch(excluirOrcamento(item))
        }

        if(!orcamento){
        dispatch(excluirMetas(item))
        }

    }


    return {showComponente, setShowComponente, progressoValor, setProgressoValor, exclusao}
}