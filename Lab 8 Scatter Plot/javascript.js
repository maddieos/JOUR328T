var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "rgb(255, 222, 0)",
                backgroundColor: "rgb(255, 222, 0, 0.1)",
                borderWidth:2,

              }, {
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "rgb(255, 153, 51)",
                backgroundColor: "rgb(255, 153, 51, 0.1)",
                borderWidth:2,

              }, {
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "United States",
                borderColor: "rgb(10, 49, 97)",
                backgroundColor:"rgb(10, 49, 97, 0.1)",
                borderWidth:2,

              }, {
                data: [
                {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "rgb(255, 0, 0)",
                backgroundColor:"rgb(255, 0, 0, 0.1)",
                borderWidth:2,
              }, {
                data: [
                {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "rgb(0, 156, 59)",
                backgroundColor:"rgb(0, 156, 59, 0.1)",
                borderWidth:2,
              }, {
                data: [
                  {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "rgb(21, 244, 238)",
                backgroundColor: "rgb(21, 244, 238, 0.1)",
                borderWidth:2,
              }, {
                data: [
                  {x: 62.6, y: 3366},
                ],
                label: "Pakistan",
                borderColor: "rgb(50, 205, 50)",
                backgroundColor: "rgb(50, 205, 50, 0.1)",
                borderWidth:2,
              }, {
                data: [
                  {x: 65.8, y: 1632},
                ],
                label: "Bangladesh",
                borderColor: "rgb(165, 0, 255)",
                backgroundColor: "rgb(165, 0, 255, 0.1)",
                borderWidth:2,
              }, {
                data: [
                  {x: 81.1, y: 32193},
                ],
                label: "Japan",
                borderColor: "rgb(255, 183, 197)",
                backgroundColor: "rgb(255, 183, 197, 0.1)",
                borderWidth:2,
              }
            ]
          },
          options: {
            plugins: {
                title: {
                    display: true,
                    text: 'The United States and Japan rank highest in life expectancy and GDP per capita',
                    font: {
                        size: 18
                    }
                },
                subtitle: {
                    display: true,
                    text: 'According to Gapminder, Japan has the highest life expectancy, while the United States tanks first in GDP per capita out of all nine countries.'
                }
            },

            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP per Capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life Expectancy'
                  }
              }
            }
          }
        });
