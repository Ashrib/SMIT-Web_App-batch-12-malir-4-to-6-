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
var text = "the New Yorker magazine doesn't allow the phrase World War II some text.";
// for(var i = 0; i<text.length; i++){
//     if(text.slice(i, i+12) === "World War II"){
//         text = text.slice(0,i) + "second world war"+ text.slice(i+12)
//         break;
        
//     }  
// }


// var a = prompt("enter to search");
// console.log(text.indexOf(a))
// console.log(text[32])
// var findIndex = text.indexOf(a);

// if(findIndex !== -1){
//     text = text.slice(0,findIndex) + "not allow"+ text.slice(findIndex + a.length)
// }
// console.log(text)




console.log(text.lastIndexOf("the"))



console.log(text.charAt(10))


var newText = text.replace("World War II", "the Second World War"); // not change in real var
var newText2 = text.replace("the", "Second World War"); // not change in real var
console.log(text)
console.log(newText)
console.log(newText2)

var newText3 = text.replace(/the/g, "Second World War"); // change global
console.log(newText3)

var text2 = "the New Yorker magazine doesn't allow the phrase World War II the some text.";
var count = 0;
for (var i = 0; i < text2.length; i++) {
    if(text2.slice(i, i+3) === "the"){
        count++;
        if(count===3){
            text2 = text2.slice(0,i) + "and" + text2.slice(i+3);
        }
    }
}
console.log(text2)