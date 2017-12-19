function eliminateDuplicates(arr){
  return [...new Set(arr)];
}

console.log(eliminateDuplicates([1,2,3,4,1,2,2,4,6,7,2,5])); //  [1, 2, 3, 4, 6, 7, 5]