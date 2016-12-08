//问题1:setInterval写得太难看了
//问题2:countNumber函数中，每次都要将h/m/s字符串进行数字化，有没有一开始就数字化的方法呢？有的，见下方
//问题3:countNumber函数里，更新DOM对象内容的写法是不是太长了一点？（果然原生JS还是jQuery操作来得好啊）



const startBtn = document.querySelector('#J_start');
const pauseBtn = document.querySelector('#J_pause');
// 其实可以const aTime = document.getElementsByClassName('time-box'); 然后，用aTime[i]就可以表示各个对象了
const leftHour = document.querySelector('#J_hour');
const leftMin = document.querySelector('#J_minute');
const leftSec = document.querySelector('#J_second');
var countId;

//两个按钮可以写成一个，只要每次改一下class以改样式和id以改内容，且用id来判断函数执行状态
startBtn.addEventListener('click', () => {
    startBtn.classList = ['start-btn hide'];
    pauseBtn.classList = ['pause-btn'];
    // 需要先立即执行一次setInterval，否则在点击后会停1秒再执行
    countId = setInterval('countNumber(leftHour.textContent,leftMin.textContent,leftSec.textContent);',1000);
});

pauseBtn.addEventListener('click', () => {
    startBtn.classList = ['start-btn'];
    pauseBtn.classList = ['pause-btn hide'];
    clearInterval(countId);
});

// 没有必要从外部传入，把aTime的定义写到内部来比较好
function countNumber(h,m,s){

  // 其实不用每个变量都乘1，只要let totalSec = (h*3600)+(m*60)+s*1就好了;
  // 这充分说明了：乘法操作可以讲string变成number，加法则优先遵循变成string
  h=h*1;
  m=m*1;
  s=s*1;

  let totalSec = (h*3600)+(m*60)+s;
  // 下面两句顺序有问题，到1秒时就停止执行了
  totalSec--;
  if(totalSec === 0 ){
    clearInterval(countId);
    return 0;
  }

  // 用aTime[i]去表示更新
  leftHour.textContent = h = parseInt(totalSec/3600);
  // 这里写上一句totalSec = totalSec - 3600*h 就更清晰
  leftMin.textContent = m = parseInt((totalSec-3600*h)/60);
  //其实parseInt((totalSec％60))就是剩余的秒数了
  leftSec.textContent = s = parseInt((totalSec-3600*h-60*m));
  
}


