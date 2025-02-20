//inch to feet converter
let value;
let remainder;
let inchValue;
function converter(height) {
  value = parseInt(height/12);
  remainder = height % 12;
  inchValue = remainder;
  let result = value + ' ft ' + inchValue + ' inch';
  return result;
  // console.log(`feet: ${value} inch: ${inchValue}`) 
}
let manHeight = converter(67);
console.log(manHeight);

//mile to kilometer converter
let distance;
function mileTokm(mile) {
  distance = parseInt(mile * 1.609344);
  return distance;

}
let totalDistance = mileTokm(34);
console.log("Total distance: ", distance ,"km");

//is year leap year or not?
function isLeapYear(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  }
  else if (year%100===0 && year%400===0) {
    return true;
  } else {
    return false
  }
}
let yearCheck = isLeapYear(2120);
console.log(`?: ${yearCheck}`);

// function takes an array as parameter. give me the average of the odd number in the array
function oddAverage(numbers) {
  let oddArray = []
  let sum = 0;
   for (const number of numbers) {
     if (number % 2 === 1) {
       oddArray.push(number);
       sum += number;
    }
   }
  let average = sum / oddArray.length;
  return parseInt(average);
 }

let arrayOfNumber = [2, 4, 6, 7, 8, 11, 33, 44, 55, 76, 343]
let result = oddAverage(arrayOfNumber);
console.log(result);
