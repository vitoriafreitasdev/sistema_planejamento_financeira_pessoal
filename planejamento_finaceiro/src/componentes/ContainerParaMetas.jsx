
const ContainerParaMetas = ({props}) => {
  return (
    <>
    <button className="progresso-btn" onClick={() => props.setShowComponente(!props.showComponente)}>Adicionar Progresso</button>
    {props.showComponente && 
        <div className="progresso-div">
        <input type="number" onChange={(e) => props.setProgressoValor(e.target.value)}  placeholder="progresso valor"/>
        <button onClick={() => props.funct(props.nome, props.progressoValor)}>Adicionar</button>
    </div>}
    </>
  )
}

export default ContainerParaMetas