let btn1 = document.querySelector("#btn1");

// btn1.onclick =(evt) =>{ //(evt)-> mins  event object hota hee
//     // console.log(evt);
//     // console.log(evt.type);
//     // console.log(evt.target);
//     // console.log("btn1 was clicked");
//     // let  a= 25;
//     // a++;
//     // console.log(a);
// }

btn1.addEventListener("click", (evt) =>{
    console.log("button was clicked");
  //  console.log(evt.type);
});

btn1.addEventListener("click", () =>{
    console.log("button was clicked - handler2");
});
        const handler3 =() =>{
            console.log("button was clicked - handler3");
        }
   btn1.addEventListener("click",handler3); 
    
btn1.addEventListener("click", () =>{
    console.log("button was clicked - handler4");
});

btn1.removeEventListener("click", handler3);

//let div = document.querySelector("div");

// div.onmouseover = (evt) =>{
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log("you are inside div");
// };

let modeBtn = document.querySelector("#mode");
let currMode = "light"; //drak

modeBtn.addEventListener("click", () =>{
   if(currMode === "light"){
    currMode = "drak";
    document.querySelector("body").style.backgroundColor = "black";

   }else{
    currMode = "light";
    document.querySelector("body").style.backgroundColor = "white";
   }
   console.log(currMode);
});
