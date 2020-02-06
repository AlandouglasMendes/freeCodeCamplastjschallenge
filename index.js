
let arrRef = [['ONE HUNDRED', 100],['TWENTY', 20],['TEN', 10],['FIVE', 5],['DOLLAR', 1],['QUARTER', 0.25],['DIME', 0.1],['NICKEL', 0.05],['PENNY', 0.01]]

function setDrawer(arr){

  let drawNums = [];

  for(let i = 0; i <arr.length; i++){// makes array of drawer values
      drawNums[i] = arr[i][1]
  }

  return drawNums;
}

function coinCount(num) {//counts number of each coin

  let arrVal = arrRef;
  let theRest = 0;
  let quoci = 0;
  let arrQuant = [];

  for (let i = 0; i < arrVal.length; i++){
    arrQuant[i] = ((num - (num%arrVal[i][1]))/arrVal[i][1]);
    theRest = num%arrVal[i][1];
    num = theRest;
  }

  return arrQuant;
}

function valuesGrouped(arr){//gives the ammount of money by value of coin

  let arrGroup = [];

  for (let i = 0; i < arr.length; i++){
    arrGroup[i] = arr[i]*arrRef[i][1];
  }

  return arrGroup;
}

function totaling(arr){//sum of elements of an array

  let toSum = 0;

  for (let elem in arr){
    toSum = toSum + arr[elem]
  }
  return toSum;
}

let test = coinCount(19.75);
console.log(test);
let groupingTest = valuesGrouped(test);
console.log(groupingTest);
let sumtest = totaling(groupingTest);
console.log(sumtest);
