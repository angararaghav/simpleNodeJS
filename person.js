class Person  {
    constructor (name,age) {
    this.name = name;
    this.age = age;
    }

    greet(){
        console.log('My name is ' + this.name + ' age ' + this.age);
    }

}

module.exports = Person;