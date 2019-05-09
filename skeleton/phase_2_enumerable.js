Array.prototype.myEach = function(cb){
    for(i = 0; i < this.length; i++){
        
        cb(this[i]);
    }
};

Array.prototype.myMap = function(cb){
    mapArr = [];
    const myCb = (ele) => {
        mapArr.push(cb(ele));
    };
    this.myEach(myCb);
    return mapArr;
};

Array.prototype.myReduce = function(cb,acc = null){
    let arr = [];
    if (acc === null){        
        acc = this[0];
        arr = this.slice(1, this.length);
    }else{
        arr = this.slice(0,this.length);
    }
    const myCb = (ele) => {  
        acc =  cb(acc,ele);
    };
    arr.myEach(myCb);
    return acc;
};

// num = [1,2,3].myReduce((acc,ele)=>{return acc + ele;});
// console.log(num);
console.log([1,2,3,4].myReduce((acc,ele)=> {return acc + ele;},5));