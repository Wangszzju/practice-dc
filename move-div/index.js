window.onload = () => {

  //37-40 分别是左，上，右，下,187是+，189是-
  const actionMap = {
    bLeft: false,
    bTop: false,
    bRight: false,
    bBottom: false,
    bEnlarge: false,
    bShrink: false,
  };

  let targetDiv = document.getElementById('J_target');
  let size = 1;

  // 核心，类似心跳函数
  setInterval(() => {
    // 应该用if 还是else if
    if (actionMap.bLeft) {
      targetDiv.style.left = targetDiv.offsetLeft - 10 + 'px';
    }
    else if (actionMap.bRight) {
      targetDiv.style.left = targetDiv.offsetLeft + 10 + 'px';
    }
    if (actionMap.bTop) {
      targetDiv.style.top = targetDiv.offsetTop - 10 + 'px';
    }
    else if (actionMap.bBottom) {
      targetDiv.style.top = targetDiv.offsetTop + 10 + 'px';
    }
    if(actionMap.bEnlarge){
      // // 缩放处理
      // size = size*1.2;
      // targetDiv.style.transform = `scale:(${size},${size})`;
    }
    else if(actionMap.bShrink){
      // size = size*0.8;
      // targetDiv.style.transform = `scale:(${size},${size})`;
    }
  },50);

  // 为什么在document上绑定keydown事件
  document.onkeydown = function (event) {
    event = window.event;

    // 修改actionMap的相应属性的值
    // 吐个槽，我觉得你这还是过程化的写法。。
    matchAction(event,true);

  };

  document.onkeyup = function (event) {
    event = window.event;
    // 这样写会限制组合键，组合键什么的以后再改吧，先写个单按键
    matchAction(event,false)
  };

  function matchAction(event,ifMove) {
    const keyCodeMap = {
      '37': 'bLeft',
      '38': 'bTop',
      '39': 'bRight',
      '40': 'bBottom',
      '187': 'bEnlarge',
      '189': 'bShrink'
    };
    const keyCode = event.keyCode;
    if (Object.keys(keyCodeMap).includes(String(keyCode))) {
      actionMap[keyCodeMap[keyCode]] = ifMove;
      return true;
    };
  }

};

