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
                text: 'Europe and Central Asia have the highest average GDP per capita',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'According to Gapminder, Europe and Central Asia have thie highest average GDP per capita, while Sub-Saharan Africa has the lowest out of the six regions.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});
