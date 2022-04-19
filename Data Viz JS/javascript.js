var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: '# of hate crimes',
            data: [8219, 9730, 14970, 22635, 30740, 37055, 46290, 53375, 64312, 59517, 66330, 69289, 79128, 78572, 78386, 88065, 100416, 124457, 129078, 149948, 195900],
            fill: true,
            borderColor: 'rgba(0, 156, 59)',
            backgroundColor: 'rgba(0, 156, 59, 0.1)',
            tension: 0.1},
          },


    options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'The United States has had the highest life expectancy since 1800',
                        font: {
                            size: 18
                        }
                    },
                    subtitle: {
                        display: true,
                        text: 'According to Gapminder, the United States has had the highest life expectancy of the largest countries in the world, while India has had the lowest since 1800.'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                    }
                },
            },
        });
