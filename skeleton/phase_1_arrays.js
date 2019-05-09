Array.prototype.uniq = function(){ 
    let arr = [];
    for (let i = 0; i < this.length; i++){
        if(!arr.includes(this[i])){
            arr.push(this[i]);
        }
    }
    return arr;
};

Array.prototype.twoSum = function(){
    let arr = [];
    let i = 0;
    while(i < this.length){
        j = i + 1;
        while(j < this.length){
            if ((this[j] + this[i]) === 0){
                arr.push([i,j]);
            }
            j++;
        }
        i++;
    }
    return arr;
};

Array.prototype.transpose = function () {
    const arr = [];
    this.forEach((ele1, i)=>{
        arr.push([]);
        ele1.forEach((ele2,j)=>{
            arr[i].push(this[j][i]);
        });
    });
    return arr;
};



arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(arr.transpose());