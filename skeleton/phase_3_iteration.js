Array.prototype.bubbleSort = function(cb){
    let sorted = false;
    while(!sorted){
        sorted = true;
        this.forEach((ele,i,arr)=>{
            if(cb(ele,arr[i+1])){
               sorted = false;
               [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
            }
        });
    }
    return this;
};

String.prototype.substrings = function(){
    arr = [];
    for(let i = 0; i < this.length; i++){
        for(let j = i; j < this.length; j++){
            arr.push(this.slice(i,j+1));
        }
    }
    return arr;
};
console.log([4,12,87,98,345,867,235,76868,13,5,5].bubbleSort((a,b)=>{
    return a > b;
}));

console.log("house".substrings())