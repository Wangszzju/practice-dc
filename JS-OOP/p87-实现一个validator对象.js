// 先只做针对String／Num等类型的见证
let common_rules = {
    require: (ifRequire = false) => {
        return (value) => {
            return ifRequire ? !!value : !value;
        }
    },
    max: (max) => {
        max = Number(max);
        if(typeof max !== 'number'){
            throw new Error('最大值必须是数字类型');
        }
        return (value) => {
            value = Number(value);
            if(typeof  value !== 'number'){
                throw new Error('最大值必须是数字类型');
                return false;
            }
            return !!(value <= max );
        }
    },
    min: (min) => {
        min = Number(min);
        if(typeof min !== 'number'){
            throw new Error('最小值必须是数字类型');
        }
        return (value) => {
            value = Number(value);
            if(typeof  value !== 'number'){
                throw new Error('最小值必须是数字类型');
                return false;
            }
            return !!(value >= min );
        }
    }
};

function Validator(){
    this.rules = new Object();
    this.tell = [];
    console.log('HHH');
}

Validator.prototype.addRules = (prop, rules) => {

    if(!this.rules[prop]){
        this.rules[prop] = {};
    }
    for (let item in rules) {
        this.rules[prop][item] = common_rules[item](rules(item));
    };
};

let validator = new Validator();
validator.addRules('name', { require: true });
validator.addRules(age, {require: false, max: 10, min: 2});
console.log(validator);



