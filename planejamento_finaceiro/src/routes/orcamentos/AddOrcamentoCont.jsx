import React from 'react'

const AddOrcamentoCont = ({props}) => {
  return (
    <div className="adicionar-orcamento-div"> 
          
            {props.mensagem && <p className="mensagem-orcamento">{props.mensagem}</p>}
            <h3>Adicionar Orçamento</h3>
            <p className="subtitulo">Definina limites gastos por categoria</p>
            <p className="p-info-orcamento">Categoria</p>
            <select className="orcamentos-select" onChange={(e) => props.setCategoria(e.target.value)}>
              <option value="">Selecione uma categoria</option>
              <option value="alimentacao">Alimentação</option>
              <option value="transporte">Transporte</option>
              <option value="moradia">Moradia</option>
              <option value="Lazer">Lazer</option>
            </select> 
            <p className="p-info-orcamento">Limite Mensal (R$)</p>
            <input className="orcamento-input" type="number" placeholder="0,00" onChange={(e) =>props.setOrcamentoNum(e.target.value)}/>
            <button className="orcamento-button" onClick={props.adicionarOrcamento}>+ Adicionar Orçamento</button>
    </div>
  )
}

export default AddOrcamentoCont