
import CSV from "../utils/CSV"

const ButtonCSV = ({data, filename}) => {
  return (
    <button data-testid="btn-csv" onClick={() => CSV(data, filename)}>Baixar csv</button>
  )
}

export default ButtonCSV