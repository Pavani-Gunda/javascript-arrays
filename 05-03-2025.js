//1. Create an Array
//Create an array with five numbers and print it.
var arr = [ 35, 46, 25, 97, 25];
console.log(arr);

//2. Access an Element
//Given an array, print the third element.

var arr1 = [25, 36, false, function(){console.log("Hello world!")}, "good_morning"];
console.log(arr1[2]);


//3. Change an Element
//Modify the second element of an array to a new value.
var arr2 = ['hello world', 25, 16, 9, 729, 343];
console.log(arr2);
arr2[1] = 'hello there';
console.log(arr2);


//4. Find Length
//Write a function that returns the length of an array.

arr = [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000];
console.log(arr.length);

function demo(){
  arr = [1, 8, 27, 64, 125, 216, 33, 512, 729, 1000]
  console.log(arr);
}
demo();

//5. Add an Element (Push)
//Add a new element to the end of an array.
var arr3 = [1221, 1728, 1369, 1564];
console.log(arr3.length);
arr3[4] = arr3[0] * 10;
console.log(arr3);
console.log(arr3.length);

arr3 = [1, 2, 3, 4, 5];
arr3.push(6);
console.log(arr3);



//6. Remove the Last Element (Pop)
//Remove the last element from an array and print the updated array

arr2 = ['hello world', 'therefore','good morning', 'good evening', 'hence proved']
console.log(arr2);
arr2.pop();
console.log(arr2);


//7. Loop Through an Array
//Use a loop to print each element of an array.
var arr4 = [ 10, 11, 12, 13, 14, 15];
for(var element of arr4){
  console.log(element);
}

for(var index in arr4){
  console.log(arr4[index]);
}


//8. Check if an Element Exists
//Write a function to check if a given value exists in an array.

function elementExist(n){
  var arr1 = [25, 36, false, function(){console.log("Hello world!")}, "good_morning"];
  var count = 0
  for (element of arr1){
    if(element == n);{
      console.log('${n} exists')
      count = 1;
      break
    }
  }

if(count == 0){
  console.log('${n} not exist')
}
}
elementExist(5);


//9. Copy an Array
//Create a copy of an array and print it.

var arr5 = arr2;
console.log(arr5);


//Convert Array to String
//Convert an array to a string using .join() and print the result.

var arr2 = arr.join();
console.log(arr2);


