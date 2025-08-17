
const repeatString = function(string,num) {
    let empty = "";
    if(num < 0){
        return "ERROR"
    }
    for(let i = 0; i < num; i++){
        empty += string
    }
    return empty
};

// Do not edit below this line
module.exports = repeatString;
