//challenge 4
var nums = [4, 1, 3];
var add = function(a, b) { return a + b; }
reduce(nums, add, 0);   //-> 8

//challenge 5

function intersection (inputArr, newArr) {
    function reduce(nums , add, int){
    
        for(var i = 0; i < nums.length; i++){
            add(i,int);
            int++;
            return add(nums);
        };
        
    };
    for (let i = 0; i < inputArr.length; i++){
        return newArr.push(nums[i]);
    }
    return reduce();
};
// console.log(inputArr);
// console.log(newArr);
console.log(reduce(inputArr));


//challege 6

var arr = [
    [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    [[10, 11, 12], [13, 14, 15], [16, 17, 18]],
    [[19, 20, 21], [22, 23, 24], [26, 27, 28]]
];

function union(arr) {
    var results = [];
    for(var i = 0; i < arr.length; i++){
        console.log('i ',arr[i]);
        if(arr[i].length){
           return  union(arr[i]);
        }else{
           results.push(arr[i]);
           return results
           console.log('results', results);
        };
    }      // "text"
};

console.log(union(arr));


//challenge 7

function objOfMatches(arr1, arr2, callback) {
    return callback(arr1, arr2);
  }

  // challenge 8

  
