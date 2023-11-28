//Functions

//function myFunction(msg, n) { //perametarJU
    // console.log("welcome  sankhala Navin");
//     console.log(msg*n);
// }

// myFunction("I love js");//argument

//functions -> numbers , sum 
            // function sum(x, y){
            //    // console.log(x+y);
            //    s = x +y;
            //    return s;

            // }
            //  let val = sum(4 ,5);
            //  console.log(val);

//arrow functions
        //sum functions
        //      function sum(a ,b){
        //         return a + b;
        //      }
        // //arrow funcions
        //         const arrowSum = (a, b) =>{
        //             console.log(a +b);
        //         };

        //         arrowSum(4, 6);
        //multiplication functon
        //  
        
//practice

//         function countVowels(str){
//             let count = 0;
//             for(const  char of  str){
//                 if(char === "a" ||char === "e"||char ==="i" || char === "o" || char === "u")
//                  {
//                     count++;
//                  }
//             }
//                 console.log(count); 
        
//         }
//         countVowels("apanaCollage");

// // qs 2.

//            const countVow =(str) =>{
//             let count = 0;
//             for(const  char of  str){
//                 if(char === "a" ||char === "e"||char ==="i" || char === "o" || char === "u")
//                  {
//                     count++;
//                  }
//             }
//                return count;
        
//         }
//         countVow("abcde");

//forEach loops Array is function callback
            // let arr  = ["pune","delhi", "patan"];

            // arr.forEach((val , idx, arr) =>{
            //     console.log(val.toUpperCase(), idx, arr);
            // });
//practice

        // let nums = [2, 3, 4, 5, 6];

        // nums.forEach((num) =>{
        //     console.log(num *num);
        // });

// map methods
    //  let nums = [40, 45, 20];

    //  let newArr = nums.map((val) =>{
    //     return val * 2;
    //  });
    //  console.log(newArr);

//filter methods
            // let arr = [1, 2, 3, 4, 5, 6, 7];
            // let evenArr = arr.filter((val) =>{
            //     return val % 2 === 0;
            // });

            // console.log(evenArr);
// // reduce methods 
//             let arr = [1, 2, 3, 4];

//             const output =arr.reduce((res ,curr) =>{
//                 return res +  curr;
//             });
//             console.log(output);

// practice
             let n = prompt("Enter a number:")
             let arr = [];

             for(let i =1;i<=n;i++){
                arr[i - 1] = i;
             }

             console.log(arr);

             let sum = arr.reduce((res , curr) =>{
                return res +curr;
             });

             console.log("Sum :", sum);


             let factorial = arr.reduce((res , curr) =>{
                return res * curr;

             });
             console.log("Factorial :", factorial);



