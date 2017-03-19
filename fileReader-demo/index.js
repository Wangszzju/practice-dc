let dropBox = document.getElementById('J_fileInput');
dropBox.addEventListener('dragenter', dragEnter, false);
dropBox.addEventListener('dragover', dragOver, false);
dropBox.addEventListener('drop', drop, false);

function dragEnter(e) {
  console.log('dragEnter Event');
  e.stopPropagation();
  e.preventDefault();   // 没有这句话的话，input标签会变蓝色
}

function dragOver(e) {
  console.log('DragOver Event');
  e.stopPropagation();
  e.preventDefault();  // 没有这句话的话，input标签会变蓝色
}

function drop(e) {
  e.stopPropagation();
  e.preventDefault();  // 默认行为是展示图片大图

  let dt = e.dataTransfer;  // 拖拽上传的内容被存在了dataTransfer里
  let files = dt.files;
  console.log(files[0]);
  let reader = new FileReader();
  reader.onload = function (e) {
    let body = document.getElementById('J_body');
    let imgNode = document.createElement('img');
    imgNode.src = e.target.result;
    body.appendChild(imgNode);
  }
  reader.onprogress = function (e) {
    let percent = Math.round((e.loaded / e.total) * 100);
    if( percent % 5 === 0){
      console.log(percent);
    }
  };
  reader.readAsDataURL(files[0]);
}