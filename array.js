let array = ["navin", "sanjay", "raj","chetan"]
//for loop

        // for(let i=0;i<array.length;i++){
        //      console.log(array[i]);
        // }

//for of 
// for(let arr of array)
// console.log(arr.toUpperCase());

//practice 
let marks =[85, 97, 44, 37,76,60];

let sum =0;
//for of loop
for(let val of marks){
    sum +=val;
}
let avg = sum/marks.length;
console.log(`avg marks of the class = ${avg}`);


//2.practice
    //for of loop
            //  let item= [250,645,300,900, 50];
            // let i = 0;
            // for (let val of item){
            //     let offer = val/10;
            //     item[i] = item[i] - offer;
            //     console.log(`value after offer = ${item[i]}`);
            //     i++;
           // }
    //for loop
                let item= [250,645,300,900, 50];
                for(let i=0;i<item.length;i++){
                    let offer = item[i]/10;
                    item[i] -=offer;
                }
                console.log(item);

//array methods

        let foodItems =["potato", "apple", "litchi","tomato"];
    //push method
        // console.log(foodItems.push("piza"));
        //console.log(foodItems);
        
    //pop method
        // let deletedItem = foodItems.pop();
        //  console.log(deletedItem);
   
     //toString method
        // console.log(foodItems);
        // console.log(foodItems.toString());

    //concat method
                //  let marvelHeroes = ["thor","spiderman","ironman"];
                //  let dcHeroes =  ["superman", "batman"];
                // let heroes  = marvelHeroes.concat(dcHeroes);
                // console.log(heroes);
    
    //unshift method
                // let marvelHeroes = ["thor","spiderman","ironman"];
                // let val = marvelHeroes.unshift("superman");
                // console.log("Start add", marvelHeroes);
    //shift method 
            // console.log(marvelHeroes.shift()); 
            // console.log("Deleted",marvelHeroes );           

    //slice method 
            //  let marvelHeroes = ["thor","spiderman","ironman","antman","superman"];
            // console.log(marvelHeroes);
            // console.log(marvelHeroes.slice(1 , 3));

    //splice methd
               let arr =[1,2,3,4,5,6,7];
               console.log(arr);
              // arr.splice(2,2,101,102);

        //add Element 
              //  arr.splice(2, 0,101);
            //   console.log(arr);
        // delele element
                // arr.splice(3,1);
                // console.log(arr);
        //replace element 
                arr.splice(3,1, 101);
                console.log(arr);

    //practice
                let companiy = ["bloomberg","Microsoft","uber","googale","Ibm","netfix"];
                console.log(companiy);
            //remove the first company from the array
                // companiy.shift();
                // console.log(companiy);
            // remove uber % add ola in this place 
                // companiy.splice(2,1,"OLa");
                // console.log(companiy);
            // add amozon the end 
                companiy.push("Amonzon");
                console.log(companiy);


