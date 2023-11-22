//operators
//1. Arithmetic operators

// let  a= 5
// let b= 4;

// console.log(a+b);
// console.log("a-b" , a-b);
// console.log("a*b" , a*b);
// console.log("a/b" , a/b);
// console.log("a%b" , a%b);
// console.log("a**b" , a**b);//5^4

//unary oprerator
// let  a= 5
// let b= 4;
//a= a+1;

// console.log( "a++", a++);
// console.log("a=", a );

//2.Assignment operators

// let  a= 5
// let b= 4;
// a+=b;//a= a+4
// console.log("a =", a);

// a-=b;//a= a-4
// console.log("a =", a);

// a*=b;//a= a*4
// console.log("a =", a);

// a/=b;//a= a/4
// console.log("a =", a);

// a**=b;//a= a**4
// console.log("a =", a);

//3.comparison operators
// let  a= 5
// let b=3;

// console.log("a==b =", a==b);
// console.log("a!=b =", a!=b);
// console.log("a===b =", a===b);
// console.log("a!==b =", a!==b);
// console.log("a>b =", a>b);
// console.log("a>=b =", a>=b);
// console.log("a<b =", a<b);
// console.log("a<=b =", a<=b);

//4.logical operators

// let  a= 5
// let b=3;
// let cond1 = a<b; //false
// let cond2 = a === 5; // true

// console.log("cont1 && cont2 =",cond1 && cond2);
// console.log("cont1 || cont2 =",cond1 || cond2);
// console.log("cont1 ! cont2 =",!(a<b) )// false
// console.log("cont1 ! cont2 =",!(a===5) )// true


//conditionl Statement 

//let age = 25;
// if (age >= 18) {
    //     console.log("you can vote");
        
    // }
    // if (age < 18) {
        
    //     console.log("you can not vate ");
    // }
    
// let mode = "dark";
// let color;

// if(mode === "dark"){
//     color = "black";

// }
// if(mode === "light"){
//     color = "white";

// }
// console.log(color);

//if-else satement 

// let mode = "bule";
// let color;

// if(mode === "dark"){
//     color = "black";
// }else{
//     color = "white";

// }
// console.log(color);

// let num = 7;

// if (num%2===0) {
//     console.log(num,"is even");
    
// }else{
//     console.log(num, "is odd");
// }

//else-if statement

// let mode = "silver";
// let color;

// if (mode==="dark") 
// {
//     color = "black";
// }else if(mode === "blue"){
//     color = "blue";

// }else if (mode === "pink") {
//     color = "pink";
// }else{
//     color = "white";
// }
// console.log(color);

//Ternary operators

// let age =25;

//  let result  =age >=18 ? "adult": "not adult";
// console.log(result);

//1.practice

//  let num = prompt("Enter the number");

//  if (num %5===0){
//     console.log(num," is a multiple of 5 ");
//  }else{
//     console.log(num, "is Not a multiple of 5");
//  }

//2.peactice

let score =  prompt("Enter YournScore(0-100)");
let grade;

if (score>=90 && score <=100) {
     grade = "A"
}else if (score>=70 && score <=89) {
    grade = "B";

}else if(score >=60 && score <= 69){
    grade = "C";

}else if (score >=50 && score <= 59) {
    grade = "D";

}else if (score>=0 && score<=49) {
    grade = "F";
}

console.log(grade);




