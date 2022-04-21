var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: '# of hate crimes',
            data: [8219, 9730, 14970, 22635, 30740, 37055, 46290, 53375, 64312, 59517, 66330, 69289, 79128, 78572, 78386, 88065, 100416, 124457, 129078, 149948, 195900],
            fill: true,
            borderColor: 'rgba(153, 0, 0)',
            backgroundColor: 'rgba(153, 0, 0, 0.1)',
            tension: 0.1},
          ]},


    options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Hate crimes in the US spiked by 30.6% from 2019 to 2020',
                        font: {
                            size: 18
                        }
                    },
                    subtitle: {
                        display: true,
                        text: 'According to FBI UCR hate crime data, this is the largest yearly increase in hate crimes since 2000. The US has experienced a relatively steady increase in hate crime incidients over the past 20 years. '
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                    }
                },
            },
        });
