const promise1 = new Promise((resolve, reject) => reject('rejected1'));
const promise2 = new Promise((resolve, rejec) => resolve('resolved2'));
const promise3 = new Promise((resolve, rejec) => resolve('resolved3'));
// RETORNA LA PRIMER PROMESA RESUELTA
Promise.any([promise1, promise2, promise3])
  .then(response => console.log(response));