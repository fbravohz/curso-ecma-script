//promises
const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if(false){
      resolve("Hello");
    }else{
      reject("Whoops!");
    }
  });
};

anotherFunction()
  .then(response => console.log(response))
  .catch(err => console.error(err));