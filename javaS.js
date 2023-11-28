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
  let divs = document.querySelectorAll(".box");
        let idx =1;
        for(div of divs){
            div.innerText = `new unique value ${idx}`;
            idx++;
        }


  //   console.dir(divs[0]);
//   console.dir(divs[1]);
//   console.dir(divs[2]);
  