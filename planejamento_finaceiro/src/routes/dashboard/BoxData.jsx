
// BoxData
import "./Dashboard.css"
const BoxData = ({title, valueP1, valueP2, P1ClassName, P2ClassName}) => {
  return (
    <div data-testid="BoxData">
        <h4>{title}</h4>
        <p className={P1ClassName}>R$ {valueP1}</p>
        <p className={P2ClassName}>{valueP2}</p>
    </div>
  )
}

export default BoxData