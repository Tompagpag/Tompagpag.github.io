const ctxCervicale = document.getElementById('chart-cervicale');

const progressBar = {
  id:'progressBar',
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const { ctx, data, chartArea: {top, bottom, left, right, width, height}, scales: {x, y} } = chart;
    ctx.save();

    const barHeight = height / y.ticks.length * data.datasets[0].barPercentage * data.datasets[0].categoryPercentage;

    data.datasets[0].data.forEach((datapoint, index) => {

      // ctx.beginPath();
      // ctx.strokeStyle = data.datasets[0].borderColor[0];
      // ctx.fillStyle = data.datasets[0].borderColor[0];
      // ctx.lineWidth = barHeight * 0.8;
      // ctx.lineJoin = 'round';
      // ctx.strokeRect(left + 2.5, datapoint.y, width - 5, 1);

      // Label Mauvaise left

      const fontSizeLabel = 12;
      ctx.font = `${fontSizeLabel}px 'Montserrat',sans-serif`;
      ctx.fillStyle = '#316A67';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText('Mauvaise', left, y.getPixelForValue(index) - fontSizeLabel - 10);
      // Label Moyenne middle

      ctx.font = `${fontSizeLabel}px 'Montserrat',sans-serif`;
      ctx.fillStyle = '#316A67';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText('Moyenne', right / 2, y.getPixelForValue(index) - fontSizeLabel - 10);
      // Label Moyenne right

      // ctx.font = `${fontSizeLabel}px 'Montserrat',sans-serif`;
      // ctx.fillStyle = '#316A67';
      // ctx.textAlign = 'left';
      // ctx.textBaseline = 'middle';
      // ctx.fillText('Bonne', left, y.getPixelForValue(index) - fontSizeLabel - 10);

      //value text

      const fontSizeDatapoint = 16;
      ctx.font = `bolder ${fontSizeDatapoint}px sans-serif`;
      ctx.fillStyle = 'rgba(102, 102, 102, 1)';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillText(datapoint + " %", right, y.getPixelForValue(index) - fontSizeDatapoint - 10);

      //bg color progress bar
      ctx.beginPath();
      ctx.fillStyle = data.datasets[0].borderColor[index];
      ctx.fillRect(left, y.getPixelForValue(index) - (barHeight / 2), width, barHeight)
    })

  }
}

new Chart(ctxCervicale, {
  type: 'bar',
  data: {
    labels: ['Cervicales', 'Dorsales', 'Lombaires'],
    datasets: [{
      label: 'Calcul de la posture',
      data: [46, 79, 63],
      backgroundColor: ['#F7B438','#F7B438','#F7B438'],
      borderColor: ['#316A67','#316A67','#316A67'],
      borderWidth: 0,
      borderSkipped: false, // border qui est esquivée dans l'autre sens
      borderRadius: 10,
      barPercentage: 0.08, // taille des barres``
      categoryPercentage: 0.8,
    }]
  },
  options: {
    animation: {
      duration: 5000,
    },
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        display: false,
        beginAtZero: true,
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        },
      },
      x: {
        display: false,
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        },
        suggestedMax: 100
      },
    }
  },
  plugins: [progressBar]
});
