'use strict'
//1
function filterProperties(propNames,obj){
    const arr = Object.keys(obj).filter((it) => propNames.includes(it));
    const newObj = arr.reduce((currObject, it) => {currObject[it] = obj[it];return currObject}, {});
    return newObj;
}
module.exports = filterProperties