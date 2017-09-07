let throttle = function(fn, t){
    let timer;  // setTimeout的id
    let firstTime = true;

    return function(){
        //
        let args = arguments;
        let me = this;
        if(firstTime){
            fn.apply(me, args);
            return firstTime = false;
        }
        if(timer){
            return false;
        }
        timer = setTimeout(function(){
            clearTimeout(timer);
            timer = null;
            fn.apply(me, args);
        }, 900)
    }
};

let test = throttle(function(){
    console.log(Date.now());
});

setTimeout(function(){
    test();
},1000);
setTimeout(function(){
    test();
},2000);
setTimeout(function(){
    test();
},3000);
setTimeout(function(){
    test();
},4000);
setTimeout(function(){
    test();
},5000);
setTimeout(function(){
    test();
},6000);
