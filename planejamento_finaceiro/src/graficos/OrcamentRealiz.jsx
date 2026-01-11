import "./configs/Bar.js"
import "./OrcamentRealiz.css"
import { Bar } from "react-chartjs-2";
const OrcamentRealiz = ({ chartData }) => {
  return (
    <div className="chart-container-bar">
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Orçamento X Realizado"
            },
            legend: {
              display: true
            }
          }
        }}
      />
    </div>
  );
};

export default OrcamentRealiz