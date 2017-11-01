class Beverage {
    constructor(name){
        this.name = name;
    }
    init(){
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }
    boilWater(){
        console.log('把水煮沸');
    }
    brew(){
        throw new Error('子类必须重写brew方法'); // 在JS中可以确保子类重写了brew方法
    }
    pourInCup(){
        throw new Error('子类必须重写pourInCup方法');
    }
    addCondiments(){
        throw new Error('子类必须重写addCondiments方法');
    }
}

class Tea extends Beverage {
    constructor(name){
        super(name);
    }
    brew(){
        console.log('用沸水浸泡茶叶');
    }
    pourInCup(){
        console.log('把茶叶倒进杯子');
    }
    addCondiments(){
        console.log('添加柠檬');
    }
}

const tea = new Tea('LongJing');
tea.init();