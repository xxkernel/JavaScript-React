'use strict';

const num = new Number(3);
console.log(num);

function User(name,id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log(`Hello ${this.name}`);
    }
}

User.prototype.exit = function(){
    console.log(`User ${this.name} left`);
}

const azkhol = new User('Akzhol', 18);
const alex = new User('Alex', 20);

azkhol.exit();

azkhol.hello();
console.log(azkhol);