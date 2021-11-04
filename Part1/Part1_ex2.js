'use strict'
function filterProperties(propNames,obj){
    const arr = Object.keys(obj).filter((it) => propNames.includes(it));
    const newObj = arr.reduce((currObject, it) => {currObject[it] = obj[it];return currObject}, {});
    return newObj;
}
//2
function filterPropertiesN(propNames,objs){
    return objs.map(function(dummy){ return filterProperties(propNames,dummy)});
}
module.exports = filterPropertiesN