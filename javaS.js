// let element = document.querySelector(".myClass");//1stelement
// console.dir(element);

//let allel = document.querySelectorAll("p");//all element
//console.dir(allel);


// let div  = document.querySelector("div");
// console.dir(div);

//practice

//1.
//  let h2 = document.querySelector("h2");
//  console.dir(h2.innerText);

//  h2.innerText = h2.innerText + "from Apna college Student";


//2.
  // let divs = document.querySelectorAll(".box");
  //       let idx =1;
  //       for(div of divs){
  //           div.innerText = `new unique value ${idx}`;
  //           idx++;
  //       }
  //   console.dir(divs[0]);
//   console.dir(divs[1]);
//   console.dir(divs[2]);

//Attributes

//getattribute  (class name jova mate )
//         let div = document.querySelector("div")
//         console.log(div);

//       let val = div.getAttribute("class");
//          console.log(val);

//          let name= div.getAttribute("name");
//          console.log(name);

// //setAttributes  (class name chanje karva mate)
//          let para= div.setAttribute("class", "newClass");
//          console.log(para);


//Style is jS

        // let div = document.querySelector("div");
        // console.log(div);

        // div.style.backgroundColor="green"

//practice  Insert Element 

let newBtn = document.createElement("button");
newBtn.innerText="Click me!";


newBtn.style.color="white";
newBtn.style.backgroundColor="red";
 document.querySelector("body").prepend(newBtn);




  