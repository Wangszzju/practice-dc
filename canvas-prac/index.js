window.onload = function () {
  let startBtn = document.getElementById('J_startBtn');
  let restoreBtn = document.getElementById('J_restoreBtn');
  let gradientBtn = document.getElementById('J_gradientBtn')
  startBtn.onclick = draw;
  restoreBtn.onclick = muticolor;
  gradientBtn.onclick = drawGradient;

  function drawGradient(){
    let canvas = document.getElementById('J_testCanvas');
    let ctx = canvas.getContext('2d');

    // // 直线渐变
    // let gradient = ctx.createLinearGradient(30,30,70,70);
    // gradient.addColorStop(0,'#ffffff');
    // gradient.addColorStop(1,'#00ffff');

    // ctx.fillStyle = '#ff0000';
    // ctx.fillRect(70,70,50,50);

    // ctx.fillStyle = gradient;
    // ctx.fillRect(10,10,50,50);

    // 放射渐变
    let RadialGra = ctx.createRadialGradient(55,55,10,55,55,30);
    RadialGra.addColorStop(0,'#fff');
    RadialGra.addColorStop(0.5,'#0ff');
    RadialGra.addColorStop(1,'#000');
    ctx.fillStyle = RadialGra;
    ctx.fillRect(10,10,90,90);

  };

  function muticolor(){
    let canvas = document.getElementById('J_testCanvas');
    let ctx = canvas.getContext('2d');
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 4;
    ctx.shadowColor = 'rgba(0,0,0,0.2)';
    ctx.translate(0,0);
    ctx.globalAlpha = 0.1;
    ctx.save()

    ctx.translate(50,50);
    ctx.fillStyle = '#ff0000';
    ctx.globalAlpha = 0.3;
    ctx.save();

    ctx.fillStyle = '#00ff00';
    ctx.globalAlpha = 0.6;
    ctx.save();
    
    ctx.fillStyle = '#0000ff';
    ctx.globalAlpha = 0.9;
    ctx.fillRect(0,0,50,50);

    ctx.restore();
    ctx.fillRect(20,20,50,50);

    ctx.restore();
    ctx.fillRect(40,40,50,50);

    ctx.restore();
    ctx.fillRect(0,0,30,100);
    
    

  };

  function draw() {
    let canvas = document.getElementById('J_testCanvas');
    let ctx = canvas.getContext('2d');
    // ctx.fillStyle = 'rgba(0,0,200,0.5)';
    // // 注意canvas尺寸，默认尺寸2:！
    // ctx.fillRect(10, 10, 100, 100);
    ctx.beginPath();
    // 绘制外圆
    ctx.arc(50,50,49,0,2*Math.PI,false);
    // 内圆
    ctx.moveTo(97,50);
    ctx.arc(50,50,47,0,2*Math.PI,false);

    // 变换原点
    ctx.translate(50,50);
    ctx.rotate(4);

    ctx.moveTo(0,0);
    ctx.lineTo(0,-35);

    ctx.moveTo(0,0);
    ctx.lineTo(-20,0);

    ctx.stroke();
    ctx.closePath();
    // // 设置时间字体
    // ctx.font = 'bold 10px Arial';
    // ctx.textAlign = 'center';
    // ctx.textBaseline = 'middle';
    // ctx.fillText('12',0,-40);


  };

};