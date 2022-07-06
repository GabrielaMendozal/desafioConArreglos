function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0,1];
    while( fibArr.length<n){
        fibArr.push(fibArr[fibArr.length-2]+fibArr[fibArr.length-1]);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
