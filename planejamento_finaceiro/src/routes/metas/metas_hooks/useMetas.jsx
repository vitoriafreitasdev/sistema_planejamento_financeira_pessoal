
// Hook useMetas => usado no teste
import { useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import { addMetas, adicionarProgressoAsMetas } from "../../../redux/slices/sistemaSlice"

const useMetas = () => {
    const [meta, setMeta] = useState("")
    const [valor, setValor] = useState(0)
    const [data, setData] = useState("")
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

    return {setMeta, setValor,  setData,  mensagem, metas, adicionarMeta, handleAdd}
}

export default useMetas