for (var i = 1; i < 6; i++) {
    setTimeout((
        (function(value){
            return function(){
                console.log(value)
            }
        })(i)
    ), 1000);
}


for (const i = 1; i < 6; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000);
}