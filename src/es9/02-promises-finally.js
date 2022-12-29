//promises
const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if(true){
      resolve("Hello");
    }else{
      reject("Whoops!");
    }
  });
};

anotherFunction()
  .then(response => console.log(response))
  .catch(err => console.error(err))
  .finally(() => console.log('finally'));