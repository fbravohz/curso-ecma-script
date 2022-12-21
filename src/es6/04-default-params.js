// Antes de ECMA SCRIPT 6
function newUser(name, age, country){
    var name1 = name || 'Oscar';
    var age1 = age || 34;
    var country1 = country || 'MX';
    console.log(name1, age1, country1);
}

newUser();
newUser("miguel", 334, 'El arcangel');

// Despues de ECMA SCRIPT 6
function newAdmin(name = "Oscar", age = 56, country = "Cincel"){
    console.log(name, age, country);
}

newAdmin("miguel", 334, 'El arcangel');