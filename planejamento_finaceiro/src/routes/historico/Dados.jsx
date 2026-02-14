
import icone from "../../images/icone.png"
import setaverde from "../../images/setaverde2.avif"
import setavermelha from "../../images/seta2.avif"

const Dados = ({dd, excluir}) => {
  return (
    <div data-testid="Dados" key={dd.categoria + dd.descricao + dd.data} className={`transicoes ${dd.receita_desp}s`}>

        <div className="itens" data-testid="items">
            <div className="itens-div1" data-testid="itemsdiv-1">
                <img className="img-seta" src={dd.receita_desp == "receita" ? `${setaverde}` : `${setavermelha}`} alt="" />
                <div data-testid="span-div">
                  <span role="span" className="descricao-span">{dd.descricao} </span>
                  <span role="span" className="categoria-span"> {dd.categoria}</span>
                  <p className="data">{dd.data}</p>
                </div>
                
            </div>
 
            <div className="itens-div" data-testid="itemsdiv-2" >
                <p className={`${dd.receita_desp}-p`}>{dd.receita_desp == "receita" ? "+" : "-"}R$ {dd.valor} </p>  
                <img data-testid="excluir-btn"  className="img-icone" src={icone} alt="icone" onClick={() => excluir(dd.descricao, dd.categoria, dd.data)}/>
            </div>
        </div>

    </div>
  )
}

export default Dados