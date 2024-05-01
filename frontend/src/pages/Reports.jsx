import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

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
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

export default function Reports() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/reports');
        const result = await response.json();
        setData(result);
      } catch (error) {
        alert('Error fetching data');
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='container'>
      <h1>Reports</h1>
      <Bar options={options} data={
        {
          labels: Object.keys(data),
          datasets: [
            {
              label: 'Longitud de las tarjetas de crédito',
              data: Object.values(data),
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
          ]
        }
      } />
    </div>
  )
}
