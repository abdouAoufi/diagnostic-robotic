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
const ctx2 = document.getElementById('myChart2').getContext('2d');
const ctx3 = document.getElementById('myChart3').getContext('2d');
const ctx4 = document.getElementById('myChart4').getContext('2d');

let dataReady = JSON.stringify(data);
dataReady = JSON.parse(dataReady);

const xGraph = {
  firstProp: "linear x",
  secondProp: "linear x_1",
  firstLabel: "commad x",
  secondLabel: "actual x",
  title : "Variation of x (Linear)"
}
const zGraph = {
  firstProp: "angular z",
  secondProp: "angular z_1",
  firstLabel: "commad z",
  secondLabel: "actual z",
  title : "Variation of z (Angular)"
}
const leftGraph = {
  firstProp: "linear x",
  secondProp: "Left current",
  firstLabel: "commad x",
  secondLabel: "left current",
  title : "Variation of left current"
}
const rightGraph = {
  firstProp: "linear x",
  secondProp: "Right current",
  firstLabel: "commad x",
  secondLabel: "left current",
  title : "Variation of left current"
}


function drawGraph(graph, configue) {
  const { firstProp, secondProp, firstLabel, secondLabel, title } = configue;
  const command_x = dataReady.map((line) => {
    return line[firstProp];
  })
  const actual_x = dataReady.map((line) => {
    return line[secondProp];
  })

  const labels = command_x.map((line, i) => {
    return i;
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: firstLabel,
        backgroundColor: '#364f6b',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
        data: command_x,
      },
      {
        label: secondLabel,
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
    options: {
      plugins: {
        title: {
          display: true,
          text: title
        }
      }
    }
  };


  const myChart = new Chart(graph, config);
  myChart.canvas.parentNode.style.height = '628px';
  myChart.canvas.parentNode.style.width = '628px';
}



drawGraph(ctx, xGraph);
drawGraph(ctx2, zGraph);
drawGraph(ctx3, leftGraph);
drawGraph(ctx4, rightGraph);