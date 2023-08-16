const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Sat', 'Sun'],
    datasets: [{
        label: 'My Dataset',
        data: [50, 100, 75, 120, 150, 110, 180],
        fill: false,
        borderColor: '#4d8cf4',
        tension: 0.4,
    }]
};

// Configuration object
const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: false,
                text: 'Chart.js Line Chart - Cubic interpolation mode'
            },
        },
        animation: {
            easing: 'linear',
            duration: 2000
        },
        interaction: {
            intersect: false,
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: false
                }
            },
            y: {
                display: true,
                title: {
                    display: false,
                    text: 'Value'
                },
                suggestedMin: 0,
                suggestedMax: 200,
                ticks: {
                    precision: 0,
                    stepSize: 10,
                },

            }
        }
    },
};
// Create the chart
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, config);

//Wave effect for chart
function updateChart() {
    const data = myChart.data.datasets[0].data;
    data.forEach((value, index) => {
        data[index] = (value + 20) % 100;
    });
    myChart.update();
    setTimeout(updateChart, 2000);
}
updateChart();
