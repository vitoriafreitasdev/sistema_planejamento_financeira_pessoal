import "./configs/Line"
import "./Graffics.css"
import { Line } from 'react-chartjs-2';

export default function Graffic({ chartData }) {
  return (
    <div className="chart-container">
      <Line
        
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Ganhos X Despesas"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}