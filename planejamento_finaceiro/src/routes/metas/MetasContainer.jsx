
//MetasContainer
const MetasContainer = ({setData, setMeta, setValor, adicionarMeta}) => {
  return (
    <div className="criacao-metas-container">
          <h3>Nova meta de economia</h3>
          <p>Defina objetivos financeiros, reserve um dinheiro para eles e acompanhe o seu progresso.</p>
          <h4>Nome da meta</h4>
          <input data-testid="input-setmeta" type="text" placeholder="Ex: Viagem, Emergência, Carro" onChange={(e) => setMeta(e.target.value)}/>
          <h4>Valor alvo (R$)</h4>
          <input data-testid="input-setvalor" type="number" placeholder="0,00" onChange={(e) => setValor(e.target.value)}/>
          <h4>Prazo</h4>
          <input type="date" data-testid="input-setdata" onChange={(e) => setData(e.target.value)}/>
          <button data-testid="btn-addmetas" onClick={adicionarMeta}>+ Adicionar Meta</button>
    </div>
  )
}

export default MetasContainer