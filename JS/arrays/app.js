

var cities = ["karachi", "Lahore", "Islamabad"];

console.log(cities[0])
console.log(cities[1])
// alert("Welcome to " + cities[1])


var mixedValues = ["karachi", 50, true];
console.log(mixedValues);

mixedValues = [5 , 6];

console.log(mixedValues);

mixedValues[1] =  "hello";
mixedValues[2] =  10;
console.log(mixedValues);

mixedValues.pop(); // remove at the end
console.log(mixedValues);

mixedValues.push("hello", "hi",60); // add one or more at the end
console.log(mixedValues);

mixedValues.shift() // remove from beginning
console.log(mixedValues);

mixedValues.unshift("10", 15) // add one or move from beginning
console.log(mixedValues);

mixedValues.splice(2,1); // removing elements
console.log("after splice(removing):",mixedValues);

mixedValues.splice(3,0, 50, 100, "hey"); // adding elements
console.log("after splice(adding):", mixedValues);

mixedValues.splice(1,2, 5, 15,12); // adding with deleting elements
console.log("after splice(adding):", mixedValues);

var copyArray = mixedValues.slice(1,4); 
                            // (1, 4-1 )
console.log("copy array: ", copyArray);

var copyArray2 = mixedValues.slice(2); 
                            // copy from index 2 till end
console.log("copy array 2: ", copyArray2);


// [1,2,3,4]
// -4  -3  -2  -1

var copyArray3 = mixedValues.slice(-5,-1); 
  // copy from index 2 till end
console.log("copy array 3: ", copyArray3);
// (-1) -1 = -2



