// Bonus计算公式  bonus = k * salary

// 定义一个绩效Performance类，把k -> performance的关系，独立出来。
function PerformanceS(){};
PerformanceS.prototype.cal = function(salary){
    return salary * 4;
};

function PerformanceA(){};
PerformanceA.prototype.cal = function(salary){
    return salary * 3;
};

function PerformanceB(){};
PerformanceB.prototype.cal = function(salary){
    return salary * 2;
};


function Bonus(){
    this.result = null;    // 函数值
    this.salary = null;    // 函数变量
    this.strategy = null;
}

Bonus.prototype.setSalary = function(salary){
    this.salary = salary;
};

Bonus.prototype.setStrategy = function(strategy){
    this.strategy = strategy;
}

Bonus.prototype.getBonus = function(){
    // 缺点：getBonus必须知道strategy有call方法，耦合度高了。
    this.result = this.strategy.cal(this.salary)
}

let s = new Bonus();
s.setSalary(4000);
s.setStrategy(new PerformanceS())
s.getBonus();
console.log(s.result);