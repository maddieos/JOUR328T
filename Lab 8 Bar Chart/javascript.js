var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['America', 'East Asia & Pacific', 'Europe & Central Asia', 'Middle East & North Africa', 'South Asia', 'Sub-Saharan Africa'],
        datasets: [{
            label: 'Average of GDP per Capita',
            data: [18791.13, 14480.30, 20818.45, 13856.00, 2505.17, 2569.00],
            backgroundColor: [
                '#1AA260'
            ]
        },

    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Average GDP per Capita by Region',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Europe and Central Asia had the highest average GDP per capita out of the six regions.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});
