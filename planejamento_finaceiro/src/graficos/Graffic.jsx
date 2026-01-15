
import "./Graffics.css"
import "./configs/Bar"
import {  Bar } from 'react-chartjs-2';

export default function Graffic({ chartData }) {
  return (
    <div className="chart-container">
      
    <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Receita X Despesa"
            },
            legend: {
              display: true
            }
          }
        }}
      />
    </div>
  );
}