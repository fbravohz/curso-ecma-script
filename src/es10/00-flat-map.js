// array flat
const array = [1,2,3,4,5,6,[7,8,9,[10,11,12]]];
console.log(array.flat(0));
console.log(array.flat(1));
console.log(array.flat(2));

// flatmap
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [[v, v *2]]));