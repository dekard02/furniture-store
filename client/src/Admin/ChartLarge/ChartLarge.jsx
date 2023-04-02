import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Chart.js Bar Chart",
        },
    },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const test = [
    {
        id: 1,
        value: 100,
    },
    {
        id: 2,
        value: 200,
    },
    {
        id: 3,
        value: 300,
    },
    {
        id: 4,
        value: 400,
    },
    {
        id: 5,
        value: 500,
    },
    {
        id: 6,
        value: 600,
    },
    {
        id: 7,
        value: 700,
    },
];
export const data = {
    labels,
    datasets: [
        {
            label: "Dataset 1",
            data: test.map((val) => val.id),
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
            label: "Dataset 2",
            data: test.map((val) => val.value),
            backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
    ],
};

export default function ChartLarge() {
    return <Bar options={options} data={data} />;
}
