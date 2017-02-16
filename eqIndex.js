//time complexity O(n) - linear

function solution(array) {
  
  let sum = array.reduce((a,b)=> a+b,0);
  let sum_right;
  let sum_left = 0;
  let results = [];
  for(let i = 0; i < array.length; i++) {
    sum_right = sum - sum_left - array[i];
    if (sum_left === sum_right) {
      results.push(i);
    }
    sum_left += array[i];
  }
  if (results) {
    return results;
  } else {
    return -1;
  }
}

//solution([-1, 3, -4, 5, 1, -6, 2, 1])