import React, { useRef, useEffect, useMemo } from "react";
import { Line } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";
import ArrowDown from '../../../public/Themes/Aurora/icons/chevron-down-green.svg'
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
import "chartjs-adapter-date-fns";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
  annotationPlugin
);
interface LineChartProps {
  model: string;
  title: string;
}
export const LineChart: React.FC<LineChartProps> = ({ model, title }) => {
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
          pointBackgroundColor: model === "linear" ? "#00FFFF" : "#1e1e1e",
          pointBorderColor: "#00FFFF",
          pointRadius:
            model === "area"
              ? 0
              : model === "linear"
              ? data.map((_, i) => (xData[i] === "04am" ? 5 : 0))
              : 3,
          pointHitRadius: 10,
          pointHoverRadius: 5,
          tension: model === "line" ? 0.1 : 0.3,
          fill: model === "line" ? false : true,
        },
      ],
    }),
    [data, xData, model]
  );

  useEffect(() => {
    if (model === "linear" || model === "area") {
      const chart = chartRef.current;
      if (chart) {
        const ctx = chart.ctx;
        if (ctx) {
          const gradient = ctx.createLinearGradient(
            0,
            0,
            0,
            chart.chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(0, 255, 255, 0.8)");
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
          chart.data.datasets[0].backgroundColor = gradient;
          chart.update();
        }
      }
    }
  }, [chartData, model]);

  const lineChartOptions: ChartOptions<"line"> = useMemo(() => {
    const plugins: ChartOptions<"line">["plugins"] = {
      legend: {
        display: false,
      },
    };

    if (model === "linear") {
      plugins.annotation = {
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
      };
    }

    return {
      responsive: true,
      maintainAspectRatio: true,
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
      plugins,
    };
  }, [model]);

  return (
    <div className="rounded-xl w-[300px] p-1   border border-main-border bg-black-secondary relative">
      <div className="flex  w-full justify-between ">
        <h2 className="text-primary-text font-semibold ">{title}</h2>
        <div className="flex items-center gap-1">
          <h2 className="text-brand-primary-color font-medium text-[10px]">
            24 May, 2024
          </h2>
          <img  className="object-contain" src={ArrowDown} alt="" />
        </div>
      </div>
      <Line ref={chartRef} data={chartData} options={lineChartOptions} />
    </div>
  );
};
