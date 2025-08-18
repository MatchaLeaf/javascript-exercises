const removeFromArray = function(arr, ...removeValue) {
    return arr.filter((n) => !removeValue.includes(n));
 };
 

// Do not edit below this line
module.exports = removeFromArray;
