/******************
 * YOUR CODE HERE *
 ******************/
function onlyOdds(arr){
  const x = []
  for (let i=0; i<arr.length; i++){
    if (arr[i]%2!==0){
      x.push(arr[i])
    }
  }
  return x
}

function onlyEvens(arr){
  const x = []
  for (let i=0; i<arr.length; i++){
    if (arr[i]%2===0){
      x.push(arr[i])
    }
  }
  return x
}

function shortNamesOnly(arr){
  const x = []
  for (let i=0; i<arr.length; i++){
    if (arr[i].length<7){
      x.push(arr[i])
    }
  }
  return x
}

function dNames(arr){
  const x = []
  let y = ''
  let z = 'Dd'
  for (let i=0; i<arr.length; i++){
    y = arr[i]
    if (z.includes(y[0])){
      x.push(y)
    }
  }
  return x
}



/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof dNames === 'undefined') {
  dNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  dNames,
}
