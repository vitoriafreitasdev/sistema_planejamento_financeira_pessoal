
import './configs/Pie';
import "./DespesaCategoria.css"

import { Pie } from 'react-chartjs-2';
function DespesaCategoria({ despesa }) {
  return (
    <div className="chart-container-pie">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Pie
        data={despesa}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Despesas por categoria"
            }
          }
        }}
      />
    </div>
  );
}
export default DespesaCategoria;