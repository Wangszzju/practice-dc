window.onload = function () {
  let oCountDown = document.getElementById('countdown');

  //在元素内部选择标签，返回一个数组
  let aInput = oCountDown.getElementsByTagName('input')[0];
  let timer = null;

  aInput.onclick = function () {
    // 原来还可以用,来进行连续执行的？
    // 用className来进行是否执行的判断，你看，简洁多了吧
    this.className = "" ? (timer = setInterval(updateTime, 1000), updateTime()) : (clearInterval(timer));
    this.className = this.className === "" ? "cancel" : "";
  }
  // 更新时间模块
  function updateTime(){
    let aSpan = oCountDown.getElementsByTagName('span');
    let oRemain = aSpan[0].innerHTML.replace(/^0/,'')*60+parseInt(aSpan[1].innerHTML.replace(/^0/,''));
    if(oRemain <= 0 ){
      clearInterval(timer);
      return
    }
    oRemain--;
    aSpan[0].innerHTML = format(parseInt(oRemain/60));
    oRemain %= 60;
    aSpan[1].innerHTML = format(parseInt(oRemain));
  }

  //格式化处理模块，给个位数前面加个0
  function format(a){
    return a.toString.replace(/^(\d)$/,'0$1')
  }
}