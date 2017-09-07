let timeChunk = function(arr, fn, count, t){
    let timer;
    let nowIndex = 0;
    let executeChunk = function(){
        for(let i = 0; i < ( count || 1); i++){
            fn(arr[nowIndex]);
            nowIndex++;
        }
    }

    return function(){
        setInterval(function(){
            if(nowIndex === arr.length){
                clearInterval(timer);
            }else{
                executeChunk();
            }
        }, t);
    }
};

let arr = [];
for(let j = 0 ; j < 100;j++){
    arr[j] = j + 1;
};

let say = timeChunk(arr, console.log, 10, 300);
say();