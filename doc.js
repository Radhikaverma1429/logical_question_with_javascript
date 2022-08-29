// Write a python program to find maximum between two numbers.

// var number=require('readline-sync');
// var num=number.questionInt('enter a number1! ')
// var num1=number.questionInt('enter a number2! ')
// if(num>num1){
//     console.log("num is greater then num1");
// }else{
//     console.log('num1 is greater then num');
// }

// Write a python program to find maximum between three numbers.

// var number=require('readline-sync');
// var num=number.questionInt('enter a number1! ')
// var num1=number.questionInt('enter a number2! ')
// var num2=number.questionInt('enter a number3! ')
// if(num>num1 && num>num2){
//     console.log('num is greterthen num1 and num2 ');
// }else if(num1>num && num1>num2){
//     console.log('num1 is greterthen num and num2 ');
// }else{
//     console.log('num2 is greterthen to num and num1 ');
// }


// Write a python program to check whether a number is negative, positive or zero.

// Write a python program to check whether a number is divisible by 5 and 11 or not

// var number=require('readline-sync');
// var num=number.questionInt('enter a number1! ')
// if((num%5==0 )&& (num%11==0)){
//     console.log('divisible');
// }else{
//     console.log('not divisible');
// }

// Write a python program to check whether a number is even or odd.

// var number=require('readline-sync');
// var num=number.questionInt('enter a number1! ')
// if(num%2==0){
//     console.log('even');
// }else{
//     console.log('odd');
// }

// var number=require('readline-sync');
// var ch=number.question('enter a number1! ')
// if(ch>='a' || ch<='z' && ch>='A' || ch<='Z'){
//     console.log("it's alfabet ");
// }else {
//     console.log("it's not alfabet");
// } 

// Write a python program to input any alphabet and check whether it is vowel or consonant.

// var char=require('readline-sync');
// var chr=char.question('enter any character! ')
// if(chr==='a' || chr==='e' || chr==='i' || chr==='o' || chr==='u'){
//     console.log("it,s a vowel");
// }else{
//     console.log("it's not a vowel");
// }


// Write a python program to input any character and check whether it is alphabet, digit or special character.

// var char=require('readline-sync');
// var character=char.question('enter any character! ')
// if((character>='a' && character<='z') || (character>='A' && character<='Z')){
//     console.log('alfabet');
// }else if(character>=0 && character<=9){
//     console.log("it's a digit");
// }else{
//     console.log('special character');
// }

// var a='shanti'-6;
// console.log(a);


// a=require('readline-sync');
// b=a.questionInt('enter a number! ')
// i=b
// sum=0
// while(i>0){
//     sum=sum+(i%10);
//     i=Math.floor(i/10)
//     if(b%sum==0){
//         console.log('harshad');
//     }else{
//         console.log('not');
//     }
// }

// let a=require('readline-sync').questionInt('enter any thing');
// let count=0;
// for(i=0;i<=a;i++){
//     if(a%i==0){
//         count++
//     }if(c==2){
//         console.log('prime');
//     }
// }

const isPrime = (num) => {
    if(num <= 3) return true;
    if(num % 2 === 0) return false;
    for(let i = 3; i < num; i+=2)
        if(num % i === 0) return false;
    return true;
}

let arr = [1,2,3,4,5,6,7,8,9];
let mappedArr = arr.map((val) => val + 1);
console.log(mappedArr);

let arr = [1,2,3,4,5];
let mappedVal = arr.reduce((prev, curr) => prev * curr);
console.log(mappedVal);


let arr = ["umang", "nancy", "shreya"];
let mappedArr = arr.map((val) => "My name is " + val);
console.log(mappedArr);

let arr = ["umang", "nancy", "shreya"];
let mappedArr = arr.map((val) => `My name is ${val}`);
console.log(mappedArr);

