//Write a function that takes in a string and returns it when reversed
//let food = “eating”
let food ="eating"
function eat (food){
console.log(food.split(``).reverse(``).join(``))
}
eat(food)
//Write a function that takes in the following array and consoles the target if it is found else
//null
//let num = [2,8,0,23,5,45,76]
//Target = 23
function mergeSort(num){
    if(num.length<=1){
        return num
    }
    let middle=Math.floor(num.length/2)
    let left=num.slice(0,middle)
    let right=num.slice(middle)
    return sortedArray(mergeSort(left),mergeSort(right))
 }
 function sortedArray(left,right){
    let emptyArray=[]
    while(left.length && right.length ){
        if(left[0]<right[0]){
            emptyArray.push(left.shift())
        }
        else{
            emptyArray.push(right.shift())
        }
    }
    return [...emptyArray,...left,...right]
 }
 let num2 = [2,8,0,23,5,45,76]
 console.log(mergeSort(num2))



 function binarySearch(num,target){
    let left=0
    let right=num.length-1
    while(left<=right){
        let middle=Math.floor((left+right)/2)
        if(num[middle]===target){
            return middle
        }
        else if(num[middle]>target){
            right=middle-1
        }
        else{
            left=middle+1
        }
    }
    return null
}
let num = [2,8,0,23,5,45,76]
let target = 23
console.log(binarySearch(num2,target))


//Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
function leapyear(){
    for (let year =2000;year<=2023;year++){
        if(year%4==0){
            console.log(year + "is leap year")
        }
        else{
            console.log(year + "is not a leap year")
        }
    }
}
leapyear()



//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
function divisibility(){
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          console.log(i +"" +"FizzBuzz");
        } else if (i % 3 === 0) {
          console.log(i+"" +"Fizz");
        } else if (i % 5 === 0) {
          console.log(i+"" +"Buzz");
        } else {
          console.log(i);
        }
      }

}
divisibility()


//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
let numArray = [12,87,45,75,23,64,73];
function ara3(numArray){
let multiply =numArray.map(function(item){
    return item*4
})
console.log(multiply);
}
ara3(numArray)


//Write a function that takes in an array of strings and returns an array with every element
//turned into a number
let nums =["10","24","45","56","67"];
let num1=nums.map(str=>{
    return +str
})
console.log(num1)

function toNumbersArray(arr) {
    const arrOfNum = [];
  
    arr.forEach(str => {
      arrOfNum.push(Number(str));
    });
  
    return arrOfNum;
  }
  console.log(toNumbersArray(["10","24","45","56","67"]))






