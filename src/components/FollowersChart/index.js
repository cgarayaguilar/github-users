import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import PropTypes from 'prop-types'

const FollowersChart = ({ users }) => {
  const [chartData, setChartData] = useState({})

  const chart = (dimentions, metrics) => {
    setChartData({
      labels: dimentions,
      datasets: [
        {
          label: 'Usuarios con mas seguidores ',
          data: metrics,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderWidth: 1,
        },
      ],
    })
  }
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
    responsive: true,
    maintainAspectRatio: false,
  }

  useEffect(() => {
    //Recorremos el array de usuarios para obtener todos sus nombres
    const dimentions = users.map(user => user.login)
    //Recorremos el array de usuarios para obtener todos sus followers
    const metrics = users.map(user => user.followers)

    chart(dimentions, metrics)
  }, [users])

  return (
    <section className="chart__container">
      <Bar data={chartData} options={options} />
    </section>
  )
}

FollowersChart.propTypes = {
  //Recibimos un arrays de objetos con todos los usuarios
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default FollowersChart
