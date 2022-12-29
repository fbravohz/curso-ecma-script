const user = {username: 'fbravo', age: 36, country: 'mx'};
const { username, ...values} = user;
console.log(username);
console.log(values);
