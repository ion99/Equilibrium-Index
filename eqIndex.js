function solution(array) {
  let L = array.length;
  let i;
  let left = [];
  let right = [];
  let result = [];
  for (left[0] = array[0], right[L - 1] = array[L - 1], i = 1; i<L; i++){
    left[i] = left[i - 1] + array[i], right[L - i - 1] = right[L - i] + array[L - i - 1]
  }
  for (i = 0; i < L; i++){
    if (left[i] === right[i]){
      result.push(i);
    } 
  }
  if (result.length){
    return result;
  } else {
    return -1;
  }
  
}
//solution([-1, 3, -4, 5, 1, -6, 2, 1])