let oStar = document.getElementById("container");
let aLi = oStar.getElementsByTagName("li");
let oUl = oStar.getElementsByTagName("ul")[0];
let oSpan = oStar.getElementsByTagName("span")[1];
let oP = oStar.getElementsByTagName("p")[0];
let i = iScore = iStar = 0;

let aMsg = [
  "很不满意|差得太离谱，与卖家描述的严重不符，非常不满",
  "不满意|部分有破损，与卖家描述的不符，不满意",
  "一般|质量一般，没有卖家描述的那么好",
  "满意|质量不错，与卖家描述的基本一致，还是挺满意的",
  "非常满意|质量非常好，与卖家描述的完全一致，非常满意"
];

for (i = 1; i < aLi.length; i++) {
  aLi[i - 1].index = i;
  aLi[i-1].onmouseover = function(){
    fnPoint(this.index);
    oP.style.display = 'block'; // 显示 
    oP.style.left = oUl.offsetLeft+this.index*this.offsetWidth-104 + 'px'; //位置
    // 注意.+的含义，表示任意字符，数量为1个或多个
    oP.innerHTML = '<em><b>'+this.index+"</b> 分"+aMsg[this.index-1].match(/(.+)\|/)[1]+'</em>'+aMsg[this.index - 1].match(/\|(.+)/)[1];
  }
  aLi[i-1].onmouseout = function(){
    // 退出时清空，恢复上次的点击评分
    fnPoint();
    oP.style.display = 'none';
  }
  aLi[i-1].onclick = function(){
    iStar = this.index;
    oP.style.display = 'none';
    oSpan.innerHTML = "<strong>" + (this.index) + " 分</strong> (" + aMsg[this.index - 1].match(/\|(.+)/)[1] + ")"
  }
}

// iStar用于记录上次点击，而iArg则显示鼠标浮动到某个star上

// 所以你看，对于starList展示的操作，完全可以集中在一个函数内部啊，只要我传入不同的值就好了，不传代表使用上次点击。
function fnPoint(iArg){
  iScore = iArg || iStar;
  for(i=0;i<aLi.length;i++){
    aLi[i].className = i < iScore ? 'on':'';
  }
}