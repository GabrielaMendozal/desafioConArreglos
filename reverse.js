function reverse(arr) {
    let reverseArr = []
    for (let i = 0; i < arr.length; i++) {
        reverseArr.push(arr[(arr.length-1)-i])
    }
    arr = reverseArr
    return arr;
}
   
let result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]
