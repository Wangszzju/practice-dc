var count0=0;
var count1=0;
var count2=0;
var count3=0;
for(var i=0 ; i<100;i++){
  var k = Math.round(Math.random()*3);
  switch(k){ 

    case 0:
    count0++;
    break;

    case 1:
    count1++;
    break;

    case 2:
    count2++;
    break;

    case 3:
    count3++;
    break;

    default:
    break;
  }
}
console.log(count0);
console.log(count1);
console.log(count2);
console.log(count3);