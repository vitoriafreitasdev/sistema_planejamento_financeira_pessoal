



import "./Historico.css"
import useHistorico from "./historico_hooks/useHistorico"
import HistoricoContainer from "./HistoricoContainer"
const Historico = () => {
    const {total, excluir, dados} = useHistorico()
  return (
    <div className='container-maior'>
        <HistoricoContainer total={total} excluir={excluir} dados={dados}/>
    </div>
  )
}

export default Historico