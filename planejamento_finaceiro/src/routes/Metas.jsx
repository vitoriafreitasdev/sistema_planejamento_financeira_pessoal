import React from 'react'

const Metas = () => {
  return (
    <div className="metas-container-principal">
      <div className="criacao-metas-container">
          <h3>Nova meta de economia</h3>
          <p>Defina objetivos financeiros e acompanhe seu progresso</p>
          <h4>Nome da meta</h4>
          <input type="text" name="" id="" />
          <h4>Valor alvo (R$)</h4>
          <input type="number" name="" id="" />
          <h4>Prazo</h4>
          <input type="date" name="" id="" />
          <button>Adicionar Meta</button>
      </div>

      <div className="metas-ativas-conatiner">

      </div>
    </div>
  )
}

export default Metas