var citiesArray = ["Karachi", "lahore", "Islamabad"];
// var checkCity = prompt("enter your city");
// console.log(checkCity)
// checkCity = checkCity.toLowerCase();
// console.log(checkCity.toUpperCase())

// for( var i=0; i<citiesArray.length; i++){
//     if(checkCity === citiesArray[i].toLowerCase()){
//         alert("ok");
//     }
// }

// var userName = prompt("enter name").toLowerCase();
// var firstCh = userName.slice(0,1).toUpperCase();
// var remainCh = userName.slice(1);
// var nameToShow = firstCh + remainCh;
// console.log(nameToShow)

// var month = prompt("enter month").toLowerCase();
// var firstCh = month.slice(0,1).toUpperCase();
// var remainCh = month.slice(1,3);
// var nameToShow = firstCh + remainCh;

// document.write(nameToShow);


// //find space
// var text = "some   text";

// for(var i = 0; i<text.length; i++){
//     if(text.slice(i, i+2) === "  "){
//         alert("double space")
//         break;
//     }
//     console.log(text.slice(i, i+2))
// }


// //find text
var text = "The New Yorker magazine doesn't allow the phrase World War II some text.";
for(var i = 0; i<text.length; i++){
    if(text.slice(i, i+12) === "World War II"){
        text = text.slice(0,i) + "second world war"+ text.slice(i+12)
        break;
    }  
}

console.log(text)
