function generateSingleton(func){
    let result;
    return function(){
        if(!result){
            result = func.apply(this, arguments);
        }
        return result;
    }
}

function logAll(...content){
    console.log(content);
    return content
}

function logFirst(content){
    console.log(content);
    return content;
}

let getAll = generateSingleton(logAll);
let getFirst = generateSingleton(logFirst);


getAll('123', '223','whole');
getFirst('123', '223','whole');
getFirst('2333', '223','whole');