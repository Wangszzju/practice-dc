let starList = $('#J_starList');
let starMap = $('.J_star');
let lastHoverIndex = 0;
let lastClickIndex = 0;
let hoverDescBox = $('#J_hovered');
let selectedDescBox = $('#J_selected');
const satisfiedMap = [
  '',
  '很不满意',
  '不满意',
  '一般',
  '满意',
  '非常满意'
];
const hoverDescMap = [
  '',
  "差得太离谱，与卖家描述的严重不符，非常不满",
  "部分有破损，与卖家描述的不符，不满意",
  "质量一般，没有卖家描述的那么好",
  "质量不错，与卖家描述的基本一致，还是挺满意的",
  "质量非常好，与卖家描述的完全一致，非常满意"
];


// 实时更新lastHoverIndex
starList.on('mouseenter', '.J_star', function (event) {
  let target = event.target;
  lastHoverIndex = (/\d{1}/).exec(target.id)[0];
  addHoverEffect(lastHoverIndex);
  hoverDescBox.removeClass('hide');
});

starList.on('mouseleave', '.J_star', function (event) {
  removeHoverEffect($('.J_star').length);
  hoverDescBox.addClass('hide');
});

starList.on('click', '.J_star', function (event) {
  let target = event.target;
  lastClickIndex = (/\d{1}/).exec(target.id)[0];
  changeSelectedResult(lastClickIndex);

  // 这里处理得不好，其实只要第一次搞一波就好了
  selectedDescBox.removeClass('hide');
});

// //根据最新的lastHoverIndex来更改浮层&高亮
function addHoverEffect(lastHoverIndex) {
  // 先清理
  for (let i = 0; i < $('.J_star').length; i++) {
    starMap[i].className = 'star J_star';
  }
  // 再添加
  for (let i = 0; i < lastHoverIndex; i++) {
    starMap[i].className = 'star J_star on';
  }
  // 更改浮层
  hoverDescBox.html(`<p><em>${lastHoverIndex} 分  ${satisfiedMap[lastHoverIndex]}</em></p><p class="sec-line">${hoverDescMap[lastHoverIndex]}</p>`);
};



function removeHoverEffect(starListLength) {
  // 每次移出时按照lastClickIndex渲染
  for (let i = 0; i < starListLength; i++) {
    starMap[i].className = (i < lastClickIndex ? 'star J_star on':'star J_star');
  }
};

function changeSelectedResult(lastClickIndex) {
  for (let i = 0; i < lastClickIndex; i++) {
    starMap[i].className = 'star J_star on';
  }
  selectedDescBox.html(`<em>${lastClickIndex} 分</em> ${hoverDescMap[lastClickIndex]}`);
};

// 意见：addHoverEffect和changeSelectedResult两个函数中的公共部分可以合并的吧。