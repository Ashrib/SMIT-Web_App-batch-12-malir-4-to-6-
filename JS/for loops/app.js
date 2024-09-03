// for(var i = 0; i <= 9; i++){
//     console.log("hello", i ,i+1 );
// }

// // console.log("hello");

// var cityArray = ["karachi",  "lahore", "islamabad"];
// var checkCity = "lahore";

// for(var i = 0; i < cityArray.length; i++ ){

//     console.log(i)
//     if(checkCity === cityArray[i]){
//         alert("yes "+ "index: " + i)
//         break;
//     }

//     "2 X 2 = 4"
// }

// for(var i = 1; i<=10;  i+=2){
//     console.log(i)
// }

// var num = +prompt("number");
// var count = +prompt("count");

// for(var i = 1; i <= count; i++){
//     console.log("helloo", i*num);
// }

var citiesArray = ["karachi", "lahore", "lahore", "islamabad"];
var checkCity = "lahore";
// console.log(citiesArray.length);
// var isMatched = false;

// for(var i = 0; i<citiesArray.length; i++){
//     console.log(citiesArray[i], i);

//     if(checkCity === citiesArray[i]){
//         alert("yes found, index:" + i);
//         isMatched = true;
//         break;
//     }
// }
// if(isMatched === false){
//     alert("no")
// }

// for(var i = citiesArray.length-1; i >= 0; i--){
//     console.log("helloo", citiesArray[i]);
// }

// var count = 0;
// for(var i = 0; i< citiesArray.length; i++){
//     if(checkCity === citiesArray[i] ){
//         count++;
//     }
//     if(count === 2){
//         alert("yes")
//         break;
//     }
// }

// logic 2
// var arr2 = [];

// for(var i = 0; i< citiesArray.length; i++){
//     if(checkCity === citiesArray[i] ){
//         arr2.push(citiesArray[i]);
//     }
//     if(arr2.length === 2){
//         alert("found 2 time");
//         break;
//     }
// }

var nums = [55, 16, 27, 48];
var nums2 = [20, 15, 30, 22];

var totals = [];
var multipy;
var var2 = 0;

for(var i =0; i < nums.length; i++){
    // console.log(nums[i])

    for(var j = 0; j<nums2.length; j++){
        // console.log(nums[i] * nums2[j] , "inner loop")
        multipy = nums[i] * nums2[j];
        var2 += multipy;
        }
        totals.push(var2);
        var2 = 0;


}
console.log(totals)

