window.onload = function () {
  let startBtn = document.getElementById('J_startBtn');
  startBtn.onclick = draw;

  function draw() {
    let canvas = document.getElementById('J_testCanvas');
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(0,0,200,0.5)';
    // 注意canvas尺寸，默认尺寸2:！
    ctx.fillRect(10, 10, 100, 100);

  }

};