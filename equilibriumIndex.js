//Time complexity O(n^2) - quadratic

function solution(array) {
  let result = [];
  // function sum(arr){
  //   let res = 0;
  //   arr.forEach(i => res+=i);
  //   return res;
  // }
  for (let i = 0; i<array.length; i++){
    // if(sum(array.slice(0,i)) === sum(array.slice(i+1,array.length))){
    if(array.slice(0,i).reduce(function(a,b){return a+b},0) === array.slice(i+1,array.length).reduce(function(a,b){return a+b},0)) {
      result.push(i);
    } 
  }
  if (result.length){
    return result;
  } else {
    return -1;
  }
}

//solution([-1, 3, -4, 5, 1, -6, 2, 1]);