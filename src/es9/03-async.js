async function* anotherGenerator(){
  yield await Promise.resolve(1);
  yield await Promise.resolve('santana');
  yield await Promise.resolve(3);
};

const other = anotherGenerator();
other.next().then(response => console.log(response));
other.next().then(response => console.log(response));
other.next().then(response => console.log(response));
other.next().then(response => console.log(response));

// For
async function arrayOfNames(array){
  for await (let value of array){
    console.log(value);
  }
}

const names = arrayOfNames(['oscar', 'windows', 'mac', 'linux']);
console.log('after');