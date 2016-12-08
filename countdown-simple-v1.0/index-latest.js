


const changeBtn = document.querySelector('#J_start-pause');
let countId;

// 如果要使用addEventListener，最好不要涉及到this
changeBtn.onclick = function(){
  this.className = (this.className === 'start-btn' ? 'pause-btn' : 'start-btn');
  this.innerHTML = (this.className === '开始' ? '取消' : '继续');

  if (this.className === 'pause-btn') {
    countId = setInterval(countNumber, 1000);
    countNumber();
  }
  else {
    clearInterval(countId);
  }
};


function countNumber() {
  const aTime = document.querySelectorAll('span.time-box');
  let totalSec = (aTime[0].innerHTML * 3600) + (aTime[1].innerHTML * 60) + (aTime[2].innerHTML * 1);

  if (totalSec <= 0) {
    clearInterval(countId);
    return 0;
  }
  totalSec--;

  aTime[0].innerHTML = parseInt(totalSec / 3600);
  totalSec = totalSec - aTime[0].innerHTML * 3600;
  aTime[1].innerHTML = parseInt(totalSec / 60);
  aTime[2].innerHTML = parseInt(totalSec % 60);

}


