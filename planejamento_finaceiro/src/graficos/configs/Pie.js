import {
  Chart as ChartJS,
  ArcElement, // ← APENAS ESTE é obrigatório para Pie
  Title,
  Tooltip,
  Legend
} from 'chart.js';

if (!ChartJS.registry.controllers.pie) {
  ChartJS.register(
    ArcElement, // ← ÚNICO elemento obrigatório
    Title,
    Tooltip,
    Legend
    // Não precisa de CategoryScale, LinearScale, etc para Pie
  );
}

export default ChartJS