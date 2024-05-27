import { useRef,  useMemo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from "chart.js";
import "chartjs-adapter-date-fns";
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);
export const LineChart = () => {
  const chartRef = useRef<ChartJS<"line">>(null);
  const data = useMemo(() => [5, 5.8, 3, 5, 3, 3.3], []);
  const xData = useMemo(
    () => ["01am", "02am", "03am", "04am", "05am", "06am"],
    []
  );
  const chartData = useMemo(
    () => ({
      labels: xData,
      datasets: [
        {
          label: "bpm",
          data: data,
          borderColor: "#00FFFF",
          borderWidth: 2,
          pointBackgroundColor: "#1e1e1e",
          pointBorderColor: "#00FFFF",
          pointRadius: 3,
          pointHitRadius: 10,
          pointHoverRadius: 5,
          tension: 0.2, 
        },
      ],
    }),
    [data, xData]
  );
  const lineChartoptions = {
    //line chart options
    responsive : true,
    maintainAspectRatio : false,
    scales: {
      x: {
        ticks: {
          color: "#fff",
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: "#fff",
        },
        grid: {
          color: "#444",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="p-5 relative">
      <Line ref={chartRef} data={chartData} options={lineChartoptions} />
      <h2 className="text-[#FFFFFF99] font-semibold absolute -top-1 left-4 ">bpm</h2>
    </div>
  );
};
