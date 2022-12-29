const entries = new Map([['name', 'oscar'], ['age', 24]]);
console.log(entries);
console.log(Object.fromEntries(entries));

const object = Object.fromEntries(entries);
const array = Object.entries(object);
console.log(array);