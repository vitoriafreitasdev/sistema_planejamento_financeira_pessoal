
import { useState } from "react"
import { useDispatch} from "react-redux"
import {passarTransacao} from "../../../redux/slices/sistemaSlice.js"

export default function useTransacoes(){
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

    return {despOuReceit, setDespOuReceit, setCategoria, setValor, setDescricao, setData, messagem, adicionarTransacao}

}