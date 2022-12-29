// declaracion
class User {

};

// instancia de una clase
// const user = new User();

// clases en es6
class user {
    //metodos
    greeting() {
    return "Hello"
    };
}
const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

// constructor
class user2 {
    //constructor
    constructor() {
        console.log("nuevo usuario")
    }
    greeting() {
        return "Hello"
    };
}
const david = new user2();
console.log(david.greeting());


//this
class user3 {
    //constructor
    constructor(name) {
        this.name = name;
    }
    speak() {
        return 'hello';
    };
    greeting() {
    return `${this.name} ${this.speak()}`;
    };
}
const usuario3 = new user3();
console.log(usuario3.greeting());


// getters and setters
class user4 {
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // metodos
    speak() {
        return 'hello';
    };
    greeting() {
    return `${this.name} ${this.speak()}`;
    };
    // getters and setters
    get age() {
      return this.age;
    }
    set age(age) {
     this.age = age;
    }
}