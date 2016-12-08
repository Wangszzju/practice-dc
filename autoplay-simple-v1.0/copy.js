window.onload = function () {
  //最外层div／图片列表ul块+图片列表数组／
  let oBox = document.getElementById('box');
  let oList = oBox.getElementsByTagName('ul')[0];
  let aImg = oBox.getElementsByTagName('img');
  let timer = playTimer = null;
  let index = i = 0;
  let bOrder = true;
  let aTmp = [];
  let aBtn = null

  // 根据图片数量加上数字
  for (i = 0; i < aImg.length; i++) aTmp.push(`<li>${i + 1}</li>`);

  // 这是轮播用的浮层
  let oCount = document.createElement('ul');
  oCount.className = "count";
  oCount.innerHTML = aTmp.join('');
  oBox.appendChild(oCount);
  aBtn = oBox.getElementsByTagName('ul')[1].getElementsByTagName('li');

  //页面加载完成后立刻启动第一步移动
  cutover();

  //按钮点击，改变index
  for (i = 0; i < aBtn.length; i++) {
    aBtn[i].index = i;
    aBtn[i].onmouseover = function () {
      index = this.index;
      cutover();
    }
  }
  // 所谓初始化就是，把当前展示图片的class加上current，其他都取消这个class，并且按照index移动一定距离;
  function cutover() {
    for (i = 0; i < aBtn.length; i++) aBtn[i].className = "";
    aBtn[index].className = "current";
    startMove(-(index * aImg[0].offsetHeight));
  }

  // 在自动轮播的逻辑下面，确定下一个index
  function next() {
    bOrder ? index++ : index--;
    index <= 0 && (index = 0, bOrder = true);
    index >= aBtn.length - 1 && (index = aBtn.length - 1, bOrder = false);
  }
  // 页面加载完成之后，自动开始确定下一个index，进而启动轮播
  playTimer = setInterval(next, 3000);

  oBox.onmouseover = function () {
    clearInterval(playTimer);
  }
  oBox.onmouseout = function () {
    playTimer = setInterval(next, 3000);
  }

  // 如果有上一个动作，先清除，再执行下一次动作
  function startMove(iTarget) {
    clearInterval(timer);
    timer = setInterval(function () {
      doMove(iTarget);
    }, 30);
  }
  // iTarget是目标要到达的位置，oList.offsetTop是当前的位置，那么减一减，就是要移动的距离了。
  function doMove(iTarget) {
    // 分10次移动，这是能实现”我就算移动一半，如果突然有其他的事件，就能及时抽身“的原因
    let iSpeed = (iTarget - oList.offsetTop) / 10;
    iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
    // 移动之后，更新oList的位置
    oList.offsetTop = iTarget ? clearInterval(timer) : oList.style.top = oList.offsetTop + iSpeed + "px";
  }


}