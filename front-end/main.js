import './style.css'
import {
  Chart, ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from "chart.js";
Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle);
import data from "./allData.json"

const ctx = document.getElementById('myChart').getContext('2d');


// fetch("http://localhost:3500").then(data => {
//   return data.json()
// }).then(result => {
//   drawCmd(result)
// })



const drawCmd = (result) => {
  console.log(result)
  const command_x = result.map((line) => {
    return line["linear x"];
  })
  const actual_x = result.map((line) => {
    return line["linear x_1"];
  })

  const labels = command_x.map((line, i) => {
    return i;
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'command x',
        backgroundColor: '#364f6b',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
        data: command_x,
      },
      {
        label: 'actual x',
        borderColor: '#3d5af1',
        borderWidth: 1,
        data: actual_x,
      }
      ,
    ]
  };
  const config = {
    type: 'line',
    data: data,
  };
  const myChart = new Chart(ctx, config);
  myChart.canvas.parentNode.style.height = '628px';
  myChart.canvas.parentNode.style.width = '628px';
}

let dataReady = JSON.stringify(data);
dataReady = JSON.parse(dataReady);
drawCmd(dataReady)