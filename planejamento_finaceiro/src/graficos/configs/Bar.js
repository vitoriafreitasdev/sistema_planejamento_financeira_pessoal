import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement, // ← OBRIGATÓRIO
  Title,
  Tooltip,
  Legend
} from 'chart.js';

if (!ChartJS.registry.controllers.bar) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement, // ← OBRIGATÓRIO
    Title,
    Tooltip,
    Legend
  );
}

export default ChartJS