'use strict';

const person = {
    name: "Alex",
    tel: '+78787878',
    parent: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(person));

clone.parent.mom = 'Ann';

console.log(person);
console.log(clone);