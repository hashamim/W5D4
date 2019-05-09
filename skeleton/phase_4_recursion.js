function range(start, end){
    if (start >= end){
        return [end];
    }
    const arr = range(start, end - 1);
    arr.push(end);
    return arr;
}

function sumRec(arr){
    if(arr.length == 1){
        return arr[0];
    }
    return sumRec(arr.slice(0,arr.length-1)) + arr[arr.length-1];
}

function exponent(base,exp){
    if(exp <= 0){
        return 1;
    }
    return base * exponent(base,exp-1);
}

function fibonacci(n){
    if(n <= 2){
        return [1,1].slice(0,n);
    }
    const fib = fibonacci(n-1);
    fib.push(fib[fib.length-1]+fib[fib.length-2]);
    return fib;

}

function deepdup(arr){
    retArr = [];
    arr.forEach((ele)=>{
        debugger
        if (Array.isArray(ele)){
            retArr = retArr.concat(deepdup(ele));
        }else{
            retArr = retArr.concat(ele);
        }
    });
    return retArr;
}

// console.log(range(5,10));
// console.log(sumRec([1,2,3,4]));
// console.log(exponent(5,3));
// console.log(fibonacci(8));
console.log(deepdup([1,2,[1,2]]));