'use strict';
//1)
function showThis(a,b){
    console.log(this);
    function sum(){
        console.log(this);
        return a+b;
    }

    console.log(sum());
}
showThis(4,5);

//2)
const obj = {
    a:20,
    b:15,
    // sum:function(){
    //     console.log(this);
    // }
    sum:function(){
        function shout(){
        console.log(this);
        }
        shout();
    }
};
obj.sum();

//3)
function User(name,id){
    this.name = name;
    this.id = id;
    this.human = true;
}
let Akzhol = new User('Akzhol', 18);

//4)
function sayName(surname){
    console.log(this);
    console.log(this.name +' '+ surname);
}
const user = {
    name: 'Jonh'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num){
    return this*num;
}

const double = count.bind(2);
console.log(double(3));
// 1) Обычная функция: this = window, но если use strict - underfined
// 2) Контекст у методов обьекта - сам обьект
// 3) this в конструкторах и классах - это новый экземпляр обьекта
// 4) Ручная привязка this: call, apply, bind


const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    console.log(this);
    this.style.backgroundColor = 'red';
});

const obje = {
    num:5,
    sayNumber: function(){
        const say = ()=>{
            console.log(this);
        }

        say();
    }
};

obje.sayNumber();