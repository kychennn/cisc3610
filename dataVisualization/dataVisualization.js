// Chart1 Doughnut Chart
const ctx1 = document.getElementById('doughnutChart').getContext('2d');
const myChart1 = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ['Esther', 'Charlotte', 'Sarah', 'Emma', 'Olivia', 'Miriam'],
        datasets: [{
            label: 'Count',
            data: [202, 158, 168, 186, 200, 193],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ]
        }]
      },
      options: {
        title: {
          display: true,
          text: "Jiayi Chen Doughnut Chart - Popular White Non Hispanic Female Baby Names"
        }
      }
});

// Chart2 Horizontal Bar
const ctx2 = document.getElementById('horizontalBarChart').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'horizontalBar',
    data: {
        labels: ['Esther', 'Charlotte', 'Sarah', 'Emma', 'Olivia', 'Miriam'],
        datasets: [{
            label: 'Count',
            data: [202, 158, 168, 186, 200, 193],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "Jiayi Chen Horizontal Bar - Popular White Non Hispanic Female Baby Names"
      }
    }
});
