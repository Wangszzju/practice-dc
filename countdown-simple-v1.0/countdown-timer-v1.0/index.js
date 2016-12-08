

$(() => {
  const startBtn = $('#J_start');
  const pauseBtn = $('#J_pause');
  const resetBtn = $('#J_reset');
  const curH = $('#J_hour');
  const curM = $('#J_minute');
  const curS = $('#J_second');
  // addSec是已经计入的数据
  let countId;
  let startTime;
  let addSec = 0;
  let remainSec = 0;
  let totalSec = 0;
  //先声明updateTime函数，才可用（如果此处把这个放在底部，会发现updateTime不可用）
  // 以总秒数计算
  const updateTime = function() {
      let endTime = new Date().getTime();
      addSec = ((endTime - startTime) / 1000);
      totalSec = remainSec+addSec;
      curH.text(parseInt(totalSec / 3600));
      curM.text(parseInt((totalSec - 3600 * curH.text()) / 60));
      curS.text((totalSec - 3600 * curH.text() - 60 * curM.text()).toFixed(2));
  }
  // 每次点击开始，都对startTime重新生成一个Date时间戳，因为开始时间点已经变化了
  startBtn.on('click', () => {
      startTime = new Date().getTime();
      startBtn.addClass('hide');
      resetBtn.addClass('hide');
      pauseBtn.removeClass('hide');
      countId = setInterval(updateTime, 10);
  });
  // 点击暂停，停止函数执行，将原有的totalSec保存进remainSec（毕竟暂停这段时间不能算进去）
  pauseBtn.on('click', () => {
      startBtn.removeClass('hide');
      resetBtn.removeClass('hide');
      pauseBtn.addClass('hide');
      clearInterval(countId);
      remainSec = totalSec;
  });
  // 点击复位，效果等同于刷新页面
  resetBtn.on('click', () => {
      curH.text('0');
      curM.text('0');
      curS.text('0');
      totalSec = remainSec = 0;
      clearInterval(countId);
  });
});





