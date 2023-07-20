let videoCont = document.querySelector(".videoSec .cont");
let videoHeight = document.querySelector(".video")

videoCont.style.height = videoHeight.scrollHeight + "px";
document.querySelector(".chart").style.height = document.querySelector(".chart").offsetWidth / 2 + 'px';

window.addEventListener('resize', function(){
  videoCont.style.height = videoHeight.scrollHeight + "px";
  document.querySelector(".chart").style.height = document.querySelector(".chart").offsetWidth / 2 + 'px';
})

let qcyChart = document.getElementById('myChart')
let options = {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      animation: {
        duration: 1500, 

    },
    };
let chartStop = true;
let elemTop = document.querySelector('#myChart').offsetTop;

window.addEventListener('scroll', function() {
  if (window.pageYOffset > elemTop - 800) {
    if(chartStop == true){
      new Chart(qcyChart, {
        type: 'bar',
        data: {
          datasets: [
            {
              type: 'line',
              label: 'Marketshare Dataset',
              fill: false,
              borderColor: '#1b1b1b',
              pointBackgroundColor:'#ffffff',
              pointBorderColor:"#1b1b1b",
              tension: 0,
              data: [5.6, 41.4, 10.3, 7.0, 13.7],
              order: 1
            },
            {
              label: 'Growth Dataset',
              data: [172, 60, 30, 0, 86],
              backgroundColor: '#ffad00',
              order: 2
            }
          ],
          labels: ['Qcy', 'Apple', 'SanmSung', 'RedMi', 'Others']
        },
        options: options
      });
      chartStop = false
    }
  }
});

