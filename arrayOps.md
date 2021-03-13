// Given the following array `[[1,2,3,4,5], [1,2,3,4,5]]`
// write a function called arrayOps, which will produce the following outcome:
// `[0,2,6,12,20,5,12,21,32,45]`

function arrayOps(arr) {
  let array = arr.flat(1).map((el, i) =>  el * i)
  return array;
}

// arrayOps(...);
