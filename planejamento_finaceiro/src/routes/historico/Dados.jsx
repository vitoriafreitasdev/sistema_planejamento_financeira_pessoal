import icone from "../../images/icone.png"
import setaverde from "../../images/setaverde2.avif"
import setavermelha from "../../images/seta2.avif"


const Dados = ({dd, excluir}) => {
  return (
    <div key={dd.categoria + dd.descricao + dd.data} className={`transicoes ${dd.receita_desp}s`}>

            <div className="itens">
                <div className="itens-div1">
                    <img className="img-seta" src={dd.receita_desp == "receita" ? `${setaverde}` : `${setavermelha}`} alt="" />
                    <div >
                    <span className="descricao-span">{dd.descricao} </span>
                    <span  className="categoria-span"> {dd.categoria}</span>
                    <p className="data">{dd.data}</p>
                    </div>
                    
                </div>

                <div className="itens-div">
                    <p className={`${dd.receita_desp}-p`}>{dd.receita_desp == "receita" ? "+" : "-"}R$ {dd.valor} </p>  
                    <img className="img-icone" src={icone} alt="icone" onClick={() => excluir(dd.descricao, dd.categoria, dd.data)}/>
                </div>
            </div>
    </div>
  )
}

export default Dados