class user {
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // metodos
    #speak() {
        return 'hello';
    };
    greeting() {
    return `${this.name} ${this.speak()}`;
    };
    // getters and setters
    #getAge() {
      return this.age;
    }
    #setAge(age) {
      this.age = age;
    }
}