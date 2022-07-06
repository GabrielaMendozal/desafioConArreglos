function betterThanAverage(arr) {
    let sum = 0;

    for(let i=0; i<arr.length; i++){
        sum += arr[i];
        
    }
    let prom = sum / arr.length;
    var count = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i]>prom){
            count++;
        }

    }
    // cuenmta cuánmtas variables son mayores que el promedio
    return count;
}
let result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta