// 用appendChild来做number-list
// 下次代码最好重构成pug+less+web.main.js形式
$(() => {

  const topBox = document.getElementById('J_topBox');
  const imgMap = document.getElementsByTagName('img');
  let numList = $('#J_numList');
  const imgList = $('#J_imgList');
  let autoTimer;
  let forward = true;
  let index = 1;
  let eventTimer = null;
  let moveTimer = null;

  //这说明innerHTML属性是个字符串
  // 知识点：通过字符串添加子节点的方法
  const numMap = [];
  for (let i = 1; i <= imgMap.length; i++) {
    numMap.push(`<li class="number-item J_numItem" id="J_num${i}">${i}</li>`);
  }
  numList.html(numMap.join(""));
  let numItem = $('.J_numItem');

  // autoPlay仅仅应该用于移动，使用jQuery动画进行位移
  const autoPlay = function () {
    for(let i = 0 ; i <= numItem.length-1 ; i++) numItem[i].className = "number-item J_numItem";
    numItem[index-1].className = "number-item J_numItem index";
    startMove(-(index - 1) * 170);

  };
  const startMove = function(iTarget){
    clearInterval(moveTimer);
    moveTimer = setInterval(function () {
      let iSpeed = (iTarget - imgList.offset().top) / 10;
      iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
      if(imgList.offset().top === iTarget ) clearInterval(moveTimer);
      else{
      imgList.offset((index,c) =>{
        newPos = new Object();
        newPos.left=c.left;
        newPos.top=c.top+iSpeed;
        return newPos;
      });
      }
    }, 30);
  }

  // 仅用于确定新的index，每次确定之后，去执行autoPlay函数
  const nextItem = function () {
    index = forward ? (index + 1) : (index - 1);
    if (index >= imgMap.length) {
      index = imgMap.length;
      forward = false;
    }
    else if (index <= 1) {
      index = 1;
      forward = true;
    }
    autoPlay();
  }

  // 页面加载完成后自动播放
  autoTimer = setInterval(nextItem, 2000);

  // 鼠标移出之后，每隔3秒确定新的index，不要直接去执行autoPlay，这样会绕不回来
  topBox.onmouseout = function () {
    autoTimer = setInterval(nextItem, 2000);
  }

  // 鼠标移入非数字区，停止播放
  topBox.onmouseover = function () {
    clearInterval(autoTimer);
  }

  // 鼠标移入数字区，调整到相应位置，这个事件要比上一个先执行，说明事件是冒泡阶段执行
  // 事件代理
  // 如果在200毫秒内，有新的事件，取消
  numList.on('mouseover', '.J_numItem', (event) => {
    clearTimeout(eventTimer);
    eventTimer = setTimeout(function () {
      index = event.target.innerHTML;
      console.log(`第${index}张`);
      autoPlay();
    }, 50);
  });

  // 知识点：修改节点样式＋类名；获取事件的目标对象；jQuery动画效果

});