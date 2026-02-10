
// BoxData
import "./Dashboard.css"
const BoxData = ({title, valueP1, valueP2, P1ClassName, P2ClassName}) => {
  return (
    <div data-testid="BoxData">
        <h4>{title}</h4>
        <p data-testid="p1" className={P1ClassName}>R$ {valueP1}</p>
        <p data-testid="p2" className={P2ClassName}>{valueP2}</p>
    </div>
  )
}

export default BoxData