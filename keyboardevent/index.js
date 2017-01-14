'use strict'
let btn = document.querySelector('.button');
document.addEventListener('keyup',(event)=>{
  console.log(event.keyCode);
})
let ev = new KeyboardEvent('keyup',{
  keyCode:65
});
document.dispatchEvent(ev);