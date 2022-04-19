var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['California', 'New Jersey', 'New York', 'Michigan', 'Massachusetts'],
        datasets: [{
            label: '# of hate crimes',
            data: [26103, 13283, 12139, 9419, 8087],
            backgroundColor: [
                '#CD5C5C'
            ]
        },

    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'California has reported the most hate crimes in the US since 2000',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'According to FBI UCR hate crime date, California has reported 26,103 hate crimes since 2000. New Jersey, New York, Michigan, and Massachusetts follow California as the five states with the most reported hate crimes in the country.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});
