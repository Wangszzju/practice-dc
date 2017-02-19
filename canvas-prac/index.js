window.onload = function () {
  let startBtn = document.getElementById('J_startBtn');
  startBtn.onclick = draw;

  function draw() {
    let canvas = document.getElementById('J_testCanvas');
    let context = canvas.getContext('2d');
    context.fillStyle = 'rgba(0,0,200,0.5)';
    context.fillRect(50, 50, 50, 50);
    // 注意canvas尺寸，默认尺寸2:1
    context.strokeRect(0, 0, 50, 50);

    context.beginPath();
    
    context.arc(100, 100, 5, Math.PI / 180 * 30, Math.PI / 180 * 120, true);
    context.endPath();

  }

};