 // String 
//  let str = "Navin";

//  console.log(str.length);

//Template literals 

        // let obj ={
        //     item :"pen",
        //     price: 10,
        // };
        // console.log(`the cost of ${obj.item} is price ${obj.price} rupis`);
  //escape tab
        // console.log(`Sankhala\nNavin`);
        // console.log(`sankhala \tnavin`);
        // let str ="Sankhala\tNavin";
        // console.log(str.length);

// String Methods 

      let str =" Sankhala  Navin   "
      console.log(str);
  //toupperCase
      let newStr = str.toUpperCase();
      console.log(newStr);

//tolowercase
     let str1=str.toLowerCase();
      console.log(str1);  
//trim speces remove karvi
      console.log(str.trim());

//slice mins ke tukda karva 

        console.log(str.slice(0, 4));

//concatilation bane string jodvi

let str2= "Sankhala"
let str3= "Navin";

 let str4=str2.concat(str3);
 console.log(str2+str3);
 console.log(str4);

 //replace 
        let str5 = "hello"
        console.log(str5.replace("lo", "vi"));

//charAt 
    let str6 = "IloveJs";

    console.log(str6.charAt(3));


//practice
         let fullName=prompt("Ener your fullname without spaces");
      let username ="@" +fullName+fullName.length;
      console.log(username); 
