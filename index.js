
import { fill, reverse, compact, arrayFromPairs, removeDuplicates, arraysEqual,  onlyUnique } from "./src/Helper.js";



const filed = fill(5, "d");
console.log("fill() - " + filed);

const reversedArray = reverse([1,2,3,4,5,6,7,8,9,10]);
console.log("reverse() - " + reversedArray);



const compactArray = compact([1, null, "", false, 4, undefined, 2]);
console.log("compact() - " + compactArray);


const fromPairs = arrayFromPairs([['a', 1], ['b', 2], ['c', 3]]);
console.log("arrayFromPairs() - ");
console.log(fromPairs);

const removeDuplicate = removeDuplicates([123,231,123,123,123,4123,32]);
console.log("remove duplicate: "+ removeDuplicate);


const arr1 =[1,2,3];
const arr2=[1,2,4];
const arr3 =[1,2,3];
const arr4 =[1,2,3];

console.log("is Array equal 1 :"+arraysEqual(arr1, arr3))
console.log("is Array equal 2 :"+arraysEqual(arr2, arr3))
console.log("is Array equal 3 :"+arraysEqual(arr4, arr2))




const unique = onlyUnique(arr1)
console.log(unique)