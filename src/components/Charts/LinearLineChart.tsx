import React, { useRef, useEffect, useMemo } from "react";
import { Line } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";
import { AnnotationOptions } from "chartjs-plugin-annotation";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,

  ChartOptions,
} from "chart.js";
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  
  Tooltip,
  Filler,
  annotationPlugin
);

const LinearLineChart: React.FC = () => {
  const linearChartRef = useRef<ChartJS<"line">>(null);

  const data = useMemo(() => [5, 5.8, 3, 5, 3, 3.3], []);
  const xData = useMemo(() => ["01am", "02am", "03am", "04am", "05am", "06am"], []);

  const LinechartData = useMemo(
    () => ({
      labels: xData,
      datasets: [
        {
          label: "",
          data: data,
          borderColor: "#00FFFF",
          backgroundColor: "rgba(0, 255, 255, 0.2)",
          borderWidth: 2,
          pointBackgroundColor: "#00FFFF",
          pointBorderColor: "#00FFFF",
          pointRadius: data.map((item, i) => (xData[i] === "04am" ? 5 : 0)),
          pointHoverRadius: 7,
          pointHitRadius: 10,
          tension: 0.4,
          fill: true,
        },
      ],
    }),
    [data, xData]
  );

  useEffect(() => {
    // create linearGradient for area chart
    const chart = linearChartRef.current;
    if (chart) {
      const ctx = chart.ctx;
      if (ctx) {
        const gradient = ctx.createLinearGradient(0, 0, 0, chart.chartArea.bottom);
        gradient.addColorStop(0, "rgba(0, 255, 255, 0.8)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        chart.data.datasets[0].backgroundColor = gradient;
        chart.update();
      }
    }
  }, [LinechartData]);

  const linearOptions: ChartOptions<"line"> & { plugins: { annotation: { annotations: Record<string, AnnotationOptions<"line">> } } } = {
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
      tooltip: {},
      annotation: {
        annotations: {
          line1: {
            type: "line",
            xMin: "04am",
            xMax: "04am",
            yMin: 3.5,
            yMax: 6.5,
            borderColor: "rgba(0, 255, 255, 0.8)",
            borderWidth: 1,
            label: {
              content: "Separation Line",
            
              position: "center",
            },
          },
        },
      },
    },
  };

  return (
    <div >
      <Line ref={linearChartRef} data={LinechartData} options={linearOptions} />
    </div>
  );
};

export default LinearLineChart;