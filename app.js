console.time("codeRunTime");

//problem #3
function aVeryBigSum(ar) {
  // Write your code here
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}
let array = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
// aVeryBigSum(array)

//problem #4
const multiArray = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(arr) {
  // Write your code here
  let leftDiagonal = 0;
  let rightDiagonal = 0;
  let different = 0;
  for (let i = 0, j = arr.length - 1; i < arr.length, j >= 0; i++, j--) {
    leftDiagonal += arr[i][i];
    rightDiagonal += arr[i][j];
    //     leftDiagonal.push(arr[i][i])
    //     RightDiagonal.push(arr[i][j])
  }
  if (leftDiagonal > rightDiagonal) {
    different = leftDiagonal - rightDiagonal;
  } else {
    different = rightDiagonal - leftDiagonal;
  }
  return different;
}
diagonalDifference(multiArray);

// problem #5
function plusMinus(arr) {
  // Write your code here
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;
  const len = arr.length;
  arr.forEach((item) => {
    if (item > 0) {
      positiveCount++;
    } else if (item < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  });
  // console.log((positiveCount/len).toFixed(6))
  // console.log((negativeCount/len).toFixed(6))
  // console.log((zeroCount/len).toFixed(6))
}

const arrayOfPlusMinus = [-4, 3, -9, 0, 4, 1];

plusMinus(arrayOfPlusMinus);

// problem #6
function staircase(n) {
  // Write your code here
  const arr = [];
  let count = 1;
  let string = "";
  for (let i = 1; i <= n; i++) {
    arr.push(count++);
    for (let j = n - 1; j >= i; j--) {
      string += " ";
    }
    for (let i = 0; i < arr.length; i++) {
      string += "#";
    }
    string += "\n";
  }
  // console.log(string)
}

// staircase(10)

// problem #7
function miniMaxSum(arr) {
  // Write your code here
  const minMaxArray = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  for (let j = 0; j < arr.length; j++) {
    minMaxArray.push(sum - arr[j]);
  }
  const miniMumSum = minMaxArray.reduce((a, b) => Math.min(a, b));
  const miniMaxSum = minMaxArray.reduce((a, b) => Math.max(a, b));
  // console.log(miniMumSum,miniMaxSum)
}

miniMaxSum([1, 2, 3, 4, 5]);

// problem #8
function birthdayCakeCandles(candles) {
  // Write your code here
  let tallest = 0;
  // let tallestArray = []
  for (let i = 0; i < candles.length; i++) {
    if (tallest < candles[i]) {
      tallest = candles[i];
    }
  }
  const tallestArray = candles.filter((v) => v === tallest);
  return tallestArray.length;
}
birthdayCakeCandles([3, 2, 1, 3]);

// problem #9
// code definition
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

//   console.log(formatAMPM(new Date));

let hours = new Date().getHours();
let minutes = new Date().getMinutes();
const ampm = hours >= 12 ? "pm" : "am";
hours = hours % 12;
hours = hours ? hours : 12;
minutes = minutes < 10 ? "0" + minutes : minutes;
// solving
function timeConversion(s) {
  // Write your code here
  const time = s.split(":");
  let hours;
  if (time[2].includes("PM")) {
    hours = time[2].includes("PM") && time[0] > 11 ? "12" : 12 + time[0]++;
  } else {
    hours = time[2].includes("AM") && time[0] > 11 ? "00" : time[0];
  }
  return `${hours}:${time[1]}:${time[2].slice(0, 2)}`;
}
//   console.log(timeConversion("3:45:54PM"))

// problem #10
function gradingStudents(grades) {
  // Write your code here
  // const result = grades.map(grade => {
  //     const gradeResult = Math.ceil((grade / 5)) * 5
  //     const finalResult = gradeResult - grade < 3 && gradeResult > 38  ?  gradeResult : grade
  //     return finalResult
  // })
  // return result

  // another solution
  return grades.reduce((acc, cur) => {
    const gradeResult = Math.ceil(cur / 5) * 5;
    console.log(gradeResult, cur);
    acc.push(gradeResult - cur < 3 && gradeResult > 38 ? gradeResult : cur);
    return acc;
  }, []);
}

// console.log(gradingStudents([73,67,38,33]))

// problem #11

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let appleAtSamsHouse = 0;
  let orangeAtSamsHouse = 0;

  apples.forEach((apple) => {
    const sum = a + apple;
    if (sum >= s && sum <= t) {
      appleAtSamsHouse++;
    }
  });
  oranges.forEach((orange) => {
    const sum = b + orange;
    if (sum >= s && sum <= t) {
      orangeAtSamsHouse++;
    }
  });
}
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);

// problem #12
function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  // let distanceV1
  // let distanceV2
  // let result;
  // for(let i = 1; i < 100; i++){
  //     distanceV1 = v1 * i
  //     distanceV2 = v2 * i
  //     if((distanceV1 + x1) === (distanceV2 + x2)){
  //         result = "YES"
  //         break
  //     }else{
  //         result = "NO"
  //     }
  // }
  // console.log(result)
  // return result
  if (x1 > x2 && v1 > v2) {
    return "NO";
  }
  if (x1 < x2 && v1 < v2) {
    return "NO";
  }
  if (v1 === v2) {
    return "NO";
  }
  if ((x2 - x1) % (v1 - v2) == 0) {
    return "YES";
  } else {
    return "NO";
  }
}

// console.log(kangaroo(0,3,4,2))

// problem #13
// use to every traverse function
function getTotalX(a, b) {
  // Write your code here
  let validCount = 0;
  for (let i = 1; i <= 100; i++) {
    if (a.every((init) => i % init == 0)) {
      // console.log(i)
      if (b.every((init) => init % i == 0)) {
        console.log(i);
        validCount++;
      }
    }
  }
  return validCount;
}
// getTotalX([2,4],[16,32,96])

// problem #14
function breakingRecords(scores) {
  // Write your code here
  const highestNum = [];
  const lowestNum = [];
  let init = scores[0];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= init) {
      init = scores[i];
      highestNum.push(scores[i]);
    } else {
      highestNum.push(highestNum[highestNum.length - 1]);
    }
  }
  for (let i = 0; i < scores.length; i++) {
    if (init >= scores[i]) {
      init = scores[i];
      lowestNum.push(scores[i]);
    } else {
      lowestNum.push(lowestNum[lowestNum.length - 1]);
    }
  }
  const collectHigestNum = [];
  const collectLowestNum = [];
  const firstHiNum = highestNum[0];
  const firstLwMum = lowestNum[0];
  for (
    let i = 0, j = 0;
    i < highestNum.length, j < lowestNum.length;
    i++, j++
  ) {
    if (
      highestNum[i] > firstHiNum &&
      !collectHigestNum.includes(highestNum[j])
    ) {
      collectHigestNum.push(highestNum[i]);
    }
    if (lowestNum[j] < firstLwMum && !collectLowestNum.includes(lowestNum[j])) {
      collectLowestNum.push(lowestNum[j]);
    }
  }
  return [collectHigestNum.length, collectLowestNum.length];
}
breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);

// problem #15
function birthday(s, d, m) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let sum = s[i];
    for (let j = i + 1; j < i + m; j++) {
      sum = sum + s[j];
    }
    if (sum === d) {
      count++;
    }
  }
  return count;
}
// console.log(birthday([1,2,1,3,2],3,2));

// problem #16
function divisibleSumPairs(n, k, arr) {
  // Write your code here
  const sumArr = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum % k === 0) {
        sumArr.push(arr[i] + arr[j]);
        sum = arr[i];
      } else {
        sum = arr[i];
      }
    }
  }
  console.log(sumArr);
  return sumArr.length;
}

// console.log(divisibleSumPairs(6,3,[1,3,2,6,1,2]));
// console.timeEnd("codeRunTime");

// problem #17
console.time("Not traverse", "Optimize");
function migratoryBirds(arr) {
  // Write your code here
  const uniqValue = [];
  let newArr = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i) {
      uniqValue.push(arr[i]);
    }
  }
  function filter(arr, cb) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      const value = cb(arr[i], i, arr);
      if (value) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  for (let i = 0; i < uniqValue.length; i++) {
    const filterVal = filter(arr, (v) => {
      return v === uniqValue[i];
    });
    const totalVal = filterVal.length;
    newArr[uniqValue[i]] = totalVal;
  }
  const result = Object.entries(newArr).sort(([, a], [, b]) => b - a);
  return result[0][0];
}

// console.log(migratoryBirds([1, 4, 4, 4, 5, 6]));
// console.timeEnd("Not traverse");

// problem #18
function dayOfProgrammer(year) {
  if (year == 1918) return "26.09.1918";
  else if (
    (year <= 1917 && year % 4 == 0) ||
    year % 400 == 0 ||
    (year % 4 == 0) & (year % 100 != 0)
  )
    return "12.09." + year;
  else return "13.09." + year;
}

// console.log(dayOfProgrammer(1984))

// problem #19
/*There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
 */

const sockColor = [10, 20, 20, 10, 10, 30, 50, 10, 20];

const n = sockColor.length;

// complex code but optimize
function sockMerchant(n, ar) {
  // Write your code here
  console.time("start - 1");
  const unique = [];
  for (let i = 0; i < ar.length; i++) {
    if (ar.indexOf(ar[i]) === i) {
      unique.push(ar[i]);
    }
  }
  let result = 0;
  for (const item of unique) {
    const newArr = [];
    for (let i = 0; i < n; i++) {
      if (item === ar[i]) {
        newArr.push(ar[i]);
      }
    }
    result += Math.floor(newArr.length / 2);
  }
  console.timeEnd("start - 1");
  return result;
}

// simple code mid optimize
function sockMerchant2(n, ar) {
  // Write your code here
  console.time("start - 2");
  let result = 0;
  const unique = ar.filter((item, i, arr) => arr.indexOf(item) === i);
  unique.forEach((item) => {
    result += Math.floor(ar.filter((arItem) => arItem === item).length / 2);
  });
  console.timeEnd("start - 2");
  return result;
}

// reduce use to problem solve - not optimize
function sockMerchant3(n, ar) {
  // Write your code here
  console.time("start - 3");
  const unique = ar.reduce((acc, cur, i, arr) => {
    if (arr.indexOf(cur) === i) {
      acc.push(cur);
    }
    return acc;
  }, []);
  const result = unique.reduce((acc, cur) => {
    const arr = [];
    for (let i = 0; i < ar.length; i++) {
      if (cur === ar[i]) {
        arr.push(ar[i]);
      }
    }
    acc += Math.floor(arr.length / 2);
    return acc;
  }, 0);
  console.timeEnd("start - 3");
  return result;
}

// sockMerchant(n, sockColor);
// sockMerchant2(n, sockColor);
// sockMerchant3(n, sockColor);

// problem #20
function pageCount(n, p) {
  // Write your code here
  console.time("start")
  
  const page = [[1]];
  let pageCount = [];
  for (let i = 2; i <= n; i = i + 2) {
    if (i < n) {
      page.push([i, i + 1]);
    } else {
      page.push([i]);
    }
  }
  for (let i = 0; i <page.length ; i++) {
    // console.log(i)
    if(page[i].includes(p)){   
      pageCount.push(i)
    }
  }
  page.reverse()
  for (let i = 0; i <page.length ; i++) {
    // console.log(i)
    if(page[i].includes(p)){
      pageCount.push(i)
    }
  }
  const minimum = Math.min(...pageCount)
  console.log(minimum)
  return minimum
}

// pageCount(121212, 5454);

// problem #21
function countingValleys(steps, path) {
  // Write your code here
  const paths = path.split('')
  let altitude = 0
  const valleys = paths.reduce((acc,cur) => {
    altitude = cur === "U" ? altitude + 1 : altitude - 1
    if(altitude === 0 && cur === "U"){
      acc++
    }
    return acc
  },0)
  return valleys
}

countingValleys(8,'DDUUDDUDUUUD')

// problem #22
function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
   */
  let result = 0
  for(let i = 0; i < keyboards.length; i++){
    for(let j = 0; j < drives.length; j++){
      const price = keyboards[i] + drives[j]
      if(price <= b && price > result){
        result = price
      }
    }
  }
  // console.log(result ? result : -1)
  return result || -1
}

getMoneySpent([ 3, 1 ] , [ 5, 2, 8 ] , 10)

// Problem #23
// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
  // my try but not success
  if(x > y && x < z){
    return "Cat A"
  }else if( x > z){
    if((z - y) < (x - z)){
      return "Cat B"
    }else{
      return "Mouse C"
    }
  }else if(y > x && y < z){
    return "Cat B"
  }else if ( y > z ){
    if((z - x) < (y - z)){
      return "Cat A"
    }else{
      return "Mouse C"
    }
  }else{
    return "Mouse C"
  }
}
/* 
solution: -> 
// if(Math.abs(x - z) < Math.abs(y-z)){
//     return "Cat A"
//   }else if(Math.abs(x-z) > Math.abs(y - z)){
//     return "Cat B"
//   }else{
//     return "Mouse C"
//   }
*/
console.log(catAndMouse(1,3,2)) // result Cat A
// catAndMouse(1,3,2)