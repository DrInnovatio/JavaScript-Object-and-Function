var height = [176, 163, 182, 191, 178, 180, 171];

function rollTheArray(arr, fn){
  var arrOutput = [];
  for (var i = 0; i < arr.length; i++){
    arrOutput.push(fn(arr[i]));
  }
  return arrOutput;
}

function bmi()