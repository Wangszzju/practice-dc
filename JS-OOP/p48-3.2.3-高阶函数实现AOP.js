Function.prototype.before = function(beforeFn){
    const _self = this;
    return function(){
        // 执行完了before以后，func变成了一个新函数，在进一步封装了原有的代码的基础上，多执行了一次beforeFn.apply(this, arguments);
        beforeFn.apply(this, arguments);
        return _self.apply(this, arguments);
    }
}

Function.prototype.after = function(afterFn){
    const _self = this;
    return function(){
        // _self已经包含了beforeFn
        let ret = _self.apply(this,arguments);
        afterFn.apply(this, arguments);
        return ret;
    }
};

let func = function(){
    console.log('Middle\n');
};

func = func.before(function(){
    console.log('Before\n');
}).after(function(){
    console.log('After\n')
});

func();