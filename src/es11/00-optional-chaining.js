const users = {
  gndx: {
    country: 'MX'
  },
  ana: {
    country: 'US'
  }
};

console.log(users.gndx.country);
console.log(users.gndx.age);
// aqui ni siquiera bebeloper existe, menos su country
//console.log(users.bebeloper.country);
// lo correcto seria utilizar esta sintaxis llamada OPTIONAL CHAINING
console.log(users?.bebeloper?.country);