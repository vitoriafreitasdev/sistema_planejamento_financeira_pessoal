import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addOrcamento } from "../../../redux/slices/sistemaSlice"
import dadosOrcamento from "../../../hooks/orcamentos"

const useOrcamento = () => {
    const historico = useSelector((state) => state.sistema.historico)
    const orcamentosSalvos = useSelector((state) => state.sistema.orcamentos)
        
    const dispatch = useDispatch()

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

    const valores = dadosOrcamento(orcamentosSalvos, historico)

    return {valores, setCategoria, setOrcamentoNum, mensagem, adicionarOrcamento, orcamentosSalvos} 
}

export default useOrcamento