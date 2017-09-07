// Bonus计算公式  bonus = k * salary

// 直接定义一个函数库，维护这个库就好了，当然缺点也是要维护外部的这个库
let performance = {
    S: salary => salary*4,
    A: salary => salary*3,
    B: salary => salary*2,
    getCal: function(str) {
        if(!this[str.toUpperCase()]){
            throw new Error('哥，没这个绩效啊');
        }else {
            return this[str.toUpperCase()];
        }
    }
}


function Bonus(){
    this.result = null;    // 函数值
    this.salary = null;    // 函数变量
}

Bonus.prototype.setSalary = function(salary){
    this.salary = salary;
};

Bonus.prototype.setCal = function(p){
    // 定义的非常清楚，但是可能会遇上作用域问题，尽量在cal方法这种映射规则里不要用this
    this.cal = performance.getCal(p)
}

Bonus.prototype.getBonus = function(p){
    this.result = this.cal(this.salary)
}

let s = new Bonus();
s.setSalary(4000);
s.setCal('s');
s.getBonus();
console.log(s.result);