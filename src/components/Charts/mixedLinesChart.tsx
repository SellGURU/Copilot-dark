import  { useRef } from "react";
import { Line } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
  Legend,
  Title,
  Chart,
  ChartOptions,
} from "chart.js";
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
  Legend,
  Title,
  annotationPlugin,
);

export const MixedLinesChart = () => {
  const chartRef = useRef<ChartJS<"line">>(null);

  const data = {
    labels: ["2 am", "3 am", "4 am", "5 am", "6 am", "7 am", "8 am", "9 am", "10 am", "11 am"],
    datasets: [
      {
        label: "SPB",
        data: [140, 130, 135, 145, 138, 130, 135, 140, 130, 140],
        borderColor: "blue",
        borderWidth: 2,
        pointBackgroundColor: "blue",
        pointBorderColor: "blue",
        pointRadius: 5,
        pointHoverRadius: 7,
        pointHitRadius: 10,
        tension: 0.4,
        fill: true,
        pointStyle: 'rect',
      },
      {
        label: "DPB",
        data: [90, 85, 88, 92, 90, 85, 88, 90, 85, 88],
        borderColor: "red",
        borderWidth: 2,
        pointBackgroundColor: "red",
        pointBorderColor: "red",
        pointRadius: 5,
        pointHoverRadius: 7,
        pointHitRadius: 10,
        tension: 0.4,
        fill: true,
        pointStyle: 'rect',
     
      },
    ],
  };

  const options: ChartOptions<"line"> & { plugins: { annotation: { annotations: any } } } = {
    responsive : true,
    maintainAspectRatio : false,
    scales: {
      x: {
        ticks: {
          color: "#fff",
        },
        grid: {
          display: true,
          color: "#444",
         
        },
      },
      y: {
        ticks: {
          color: "#fff",
          callback: function (value) {
            return value ;
          },
        },
        grid: {
          display : true,
          color: "#444",
          
        },
        min: 80,
        max: 180,
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#fff",
        },
      },
      tooltip: {
        enabled: true,
      },
    
      annotation: {
        annotations: {}
      },
     
      
    },
  };
  const backgroundColorPlugin = {
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart: Chart) => {
      const ctx = chart.canvas.getContext('2d');
      if(ctx){
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = '#121212'; 
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
      }
    }
  };
  ChartJS.register(backgroundColorPlugin);
  return (
    <div className="relative">
      <Line ref={chartRef} data={data} options={options} />
      <h2 className="text-[#FFFFFF99] font-semibold absolute top-0 ml-2">mm Hg</h2>
    </div>
  );
};

