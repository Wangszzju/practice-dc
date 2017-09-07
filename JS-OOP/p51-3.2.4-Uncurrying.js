Function.prototype.uncurrying = function(){
    const self = this;
    return function () {
        // 把
        let obj = Array.prototype.shift.call(arguments);
        return self.apply(obj, arguments);
    };
};

let push = Array.prototype.push.uncurrying();
// 经过uncurrying之后，push就变成了一个新函数了，有了新功能

(function(){
    push(arguments, 4, 5);
    console.log(arguments);
})(1,2,3)