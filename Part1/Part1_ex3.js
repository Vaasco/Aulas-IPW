'use strict'
//3
Array.prototype.zip = function(a,combiner){
    let newArray = [];
    let minI = Math.min(this.length,a.length);
    for(let i = 0;i<minI;i++){
        newArray[i] = combiner(this[i],a[i]);
    }
    return newArray;
    }


    
    
