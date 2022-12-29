// enhanced object literals
function newuser(user, age, country){
return {
  user: user,
  age: age,
  country: country
  }
};

function newuser2(user, age, country, uId){
  return {
    user,
    age,
    country,
    id: uId
    }
  };

console.log(newuser2("fbravohz", 34, "MX", 1));
