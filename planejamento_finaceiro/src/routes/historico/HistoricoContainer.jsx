import Dados from "./Dados"

const HistoricoContainer = ({total, excluir, dados}) => {
  return (
    <div className='historico-container' data-testid="HistoricoContainer">
        <h3 className="h3-transacoes">Histórico de Transações</h3>
            <p className="p-total"> {total} transações registradas</p>
            {
                dados && dados.map((d) => (
                    d.map((dd) => (
                        <Dados dd={dd} excluir={excluir}/>
                    ))
                ))
            }
    </div>
  )
}

export default HistoricoContainer