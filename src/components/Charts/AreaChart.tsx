import { useRef, useEffect, useMemo } from "react";
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
  Filler,
);
export  const AreaChart = () => {
const areaChartRef = useRef<ChartJS<'line'>>(null);
const data = useMemo(() => [5, 5.8, 3, 5, 3, 3.3], []);
const xData = useMemo(() => ["01am", "02am", "03am", "04am", "05am", "06am"], []);
  const areaChartData = useMemo(
    //set 
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
          pointHoverRadius: 5,
          fill: true,
          tension: 0.4,
        },
      ],
    }),
    [data, xData]
  );
  useEffect(() => {
    // create linearGradient for area chart
    const chart = areaChartRef.current;
    if (chart) {
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, chart.chartArea.bottom);
      gradient.addColorStop(0, "rgba(0, 255, 255, 0.8)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      chart.data.datasets[0].backgroundColor = gradient;
      chart.update();
    }
  }, [areaChartData]);
  const areaOptions = {
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
        display: true,
        grid: {
          color: "#444",
        },
        ticks: {
          color: "#fff",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };
  return (
    <div>
      <Line ref={areaChartRef} data={areaChartData} options={areaOptions} />
      </div>
  );
};