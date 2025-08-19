const sumAll = function(firstNum, lastNum) {
    let finalsum = 0;

    if(firstNum > lastNum){
       let temp = firstNum;
        firstNum = lastNum;
        lastNum = temp;
    }else if(firstNum <= 0){
        return "ERROR";
    }else if(!Number.isInteger(lastNum) || !Number.isInteger(firstNum)){
        return "ERROR";
    }
    for(let i = firstNum; i < lastNum + 1 ; i++){
        finalsum = finalsum + i
      }
    return finalsum;
};

// Do not edit below this line
module.exports = sumAll;
