const reverse = function(arr) {
     const new_array = [];
    for(let i = 0; i <=arr.length-1; i++) {
        new_array[i] = arr[arr.length-1-i];
    }
    return new_array;
}

const reversedArray = reverse([1, 2, 3, 4, 5, 6, 7]);

console.log(reversedArray)