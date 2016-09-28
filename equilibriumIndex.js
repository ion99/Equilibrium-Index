function solution(array) {
  function sum(arr){
    let res = 0;
    arr.forEach(i => res+=i);
    return res;
  }
  for (let i = 0; i<array.length; i++){
    if(sum(array.slice(0,i)) === sum(array.slice(i+1,array.length))){
      return 1;
    } else {
      continue;
    }
  }
  return -1;
}

//solution([-1, 3, -4, 5, 1, -6, 3, 1]);