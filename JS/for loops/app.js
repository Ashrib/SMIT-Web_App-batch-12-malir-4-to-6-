
for(var i = 0; i <= 9; i++){
    console.log("hello", i ,i+1 );
}

// console.log("hello");

var cityArray = ["karachi",  "lahore", "islamabad"];
var checkCity = "lahore";


for(var i = 0; i < cityArray.length; i++ ){
    
    console.log(i)
    if(checkCity === cityArray[i]){
        alert("yes "+ "index: " + i)
        break;
    }

    "2 X 2 = 4"
}




var num = +prompt("number");
var count = +prompt("count");

for(var i = 1; i <= count; i++){
    console.log("helloo", i*num);
}



var citiesArray = ["karachi",  "lahore", "islamabad"];
var checkCity = "lahore";
console.log(citiesArray.length);
var isMatched = false;

for(var i = 0; i<citiesArray.length; i++){
    console.log(citiesArray[i], i);
    
    if(checkCity === citiesArray[i]){
        alert("yes found, index:" + i);
        isMatched = true;
        break;
    }
}
if(isMatched === false){
    alert("no")
}

for(var i = citiesArray.length-1; i >= 0; i--){ 
    console.log("helloo", citiesArray[i]);
}





