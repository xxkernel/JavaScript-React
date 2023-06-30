// Task_1:
    // const userName = "John";
    // let userNumber = 25;
    // userNumber = 24;



//Task_2:
    // const storeName = "Naruto";
    // const storeDescription = {
    //     budget : 10000,
    //     employees : ["Tom", "John", "Holly"],
    //     products : {
    //         Miky : 'Waifu', 
    //         Nino : 'Waifu also'
    //     },
    //     open : true
    // };



// Task_3:
    //     // Место для первой задачи
    // function firstTask() {
    //     // Пишем решение вот тут
    //     for(let i = 5; i<=10;i++){
    //         console.log(i);
    //     }
        
    // }

    // firstTask()
    // // Место для второй задачи
    // function secondTask() {
    //     // Пишем решение вот тут
    //     for(let i = 20;i>=10;i--){
    //         if(i==13){
    //             break;
    //         }
    //         console.log(i);
    //     }
        
    // }

    // secondTask()
    // // Место для третьей задачи
    // function thirdTask() {
    //     // Пишем решение вот тут
        
    //     for(let i = 2; i<=10;i+=2){
    //         console.log(i);
    //     }
    // }
    // thirdTask()
    // // Место для четвертой задачи

    // // Цикл, который нужно переписать:

    // // for (let i = 2; i <= 16; i++) {
    // //     if (i % 2 === 0) {
    // //         continue;
    // //     } else {
    // //         console.log(i);
    // //     }
    // // }

    // function fourthTask() {
    //     // Пишем решение вот тут
    //     let i = 2;
    //     while(i<=16){
    //         if(i%2===0){
    //             i++;
    //             continue;
    //         }
    //         else{
    //             console.log(i);
    //         }
    //         i++;
    //     }
        
    // }
    // fourthTask()
    // // Место для пятой задачи

    // function fifthTask() {
    //     const arrayOfNumbers = [];
        
    //     // Пишем решение вот тут
    //     for(let i = 5;i<=10;i++){
    //         arrayOfNumbers[i-5]=i;
    //     }
    //     console.log(arrayOfNumbers);
        
    //     // Не трогаем
    //     return arrayOfNumbers;
    // }



// Task_4:
    // // Место для первой задачи
    // function firstTask() {
    //     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    //     const arr = [3, 5, 8, 16, 20, 23, 50];
    //     const result = [];
        
    //     // Пишем решение вот тут
    //     for(let i = 0;i<arr.length;i++){
    //         result[i] = arr[i];
    //     }
        
    //     // Не трогаем
    //     return result;
    // }

    // // Место для второй задачи
    // function secondTask() {
    //     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    //     const data = [5, 10, 'Shopping', 20, 'Homework'];

    //     // Пишем решение вот тут
    //     for(let i = 0;i<data.length;i++){
    //         if(typeof data[i]==='string'){
    //             data[i] = data[i] + ' - done';
    //         }
    //         else{
    //             data[i] = data[i]*2;
    //         }
    //     }
        
    //     // Не трогаем
    //     return data;
    // }

    // // Место для третьей задачи
    // function thirdTask() {
    //     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    //     const data = [5, 10, 'Shopping', 20, 'Homework'];
    //     const result = [];

    //     // Пишем решение вот тут
    //     for(let i = data.length-1;i>=0;i--){
    //         result[data.length-i-1] = data[i];
    //     }
        
    //     // Не трогаем
    //     return result;
    // }



// Task_5:
    // const lines = 5;
    // let result = '';

    // for (let i = 0; i <= lines; i++) {
    //     for (let j = 0; j < lines - i; j++) {
    //         result += " ";
    //     }
    //     for (let j = 0; j < 2 * i + 1; j++) {
    //         result += "*";
    //     }
    //     result += "\n";
    // }

    // console.log(result)



// Task_6:
    // // Место для первой задачи
    // function calculateVolumeAndArea(num) {
    //     if (typeof (num) !== 'number' || num < 0 || !Number.isInteger(num)) {
    //         return "При вычислении произошла ошибка";
    //     }
    //     let v = num*num*num;
    //     let a = (num*num)*6;
    //     return `Объем куба: ${v}, площадь всей поверхности: ${a}`;
    // }

    // // Место для второй задачи
    // function getCoupeNumber(num) {
    //     if(num===0 || num>36){
    //         return "Таких мест в вагоне не существует";
    //     }
    //     if (typeof (num) !== 'number' || num < 0 || !Number.isInteger(num)) {
    //         return "Ошибка. Проверьте правильность введенного номера места";
    //     }

    //     else{
    //         let n = num/4;
    //         return Math.ceil(n);
    //     }
    // }



// Task_7:
    // // Место для первой задачи
    // function getTimeFromMinutes(minute) {
    //     if(!Number.isInteger(minute) || minute<0 || typeof(minute)!=='number'){
    //         return "Ошибка, проверьте данные";
    //     }
    //     let hour = Math.floor(minute/60);
    //     let minute_1 = minute - (hour*60);
    //     if(hour===0){
    //         return `Это ${hour} часов и ${minute_1} минут`;
    //     }
    //     if(hour ===1){
    //         return `Это ${hour} час и ${minute_1} минут`;
    //     }
    //     return `Это ${hour} часа и ${minute_1} минут`;
    // }

    // // Место для второй задачи
    // function findMaxNumber(a,b,c,d) {
    //     if(typeof(a)!=='number' || typeof(c)!=='number' || typeof(b)!=='number' || typeof(d)!=='number'){
    //         return 0;
    //     }
    //     if(a>b && a>c && a>d){
    //         return a;
    //     }
    //     if(b>a && b>c && b>d){
    //         return b;
    //     }
    //     if(c>a && c>d && c>b){
    //         return c;
    //     }
    //     if(d>a && d>b && d>c){
    //         return d;
    //     }
    // }



// Task_8:
    // function fib(number) {
    //     let res = '0 1';
    //     if(typeof(number) !== 'number' || number <= 0 || !Number.isInteger(number)){
    //         return "";
    //     }
    //     if(number==1){
    //         return '0';
    //     }
    //     if(number===0){
    //         return '';
    //     }
    //     if(number==2){
    //         return res;
    //     }
    //     let m = 0;
    //     let n = 1;
    //     let sen;
    //     let cnt = 2;
    //     while(cnt!=number){
    //         res+=' ' + (m+n);
    //         sen = n
    //         n = n+m;
    //         m = sen;
    //         cnt++;
    //     }
    //     return res;
    // }



// Task_9:
    // const personalPlanPeter = {
    //     name: "Peter",
    //     age: "29",
    //     skills: {
    //         languages: ['ru', 'eng'],
    //         programmingLangs: {
    //             js: '20%',
    //             php: '10%'
    //         },
    //         exp: '1 month'
    //     },
    //     showAgeAndLangs : function(plan){
    //         let res = '';
    //         for(let key of plan['skills']['languages']){
    //             res+=`${key.toUpperCase()} `;
    //         }
    //         return `Мне ${plan.age} и я владею языками: ${res}`;
    //         }

    //     };

    // function showExperience(plan) {
    //     return plan.skills.exp;
    // }

    // function showProgrammingLangs(plan) {
    //     let result = '';
    //     for(let item in plan["skills"]["programmingLangs"]){
    //         result+=`Язык ${item} изучен на ${plan["skills"]["programmingLangs"][item] }`;
    //         result+='\n';
    //     }
    //     return result;
    // }



// Task_10:
    // const family = ['Peter', 'Ann', 'Alex', 'Linda'];

    // function showFamily(arr) {
    //     if(arr.length===0){
    //         return 'Семья пуста';
    //     }
    //     let res = arr.join(' ');
    //     return `Семья состоит из: ${res}`;
    // }

    // const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

    // function standardizeStrings(arr) {
    //     arr.forEach(city => {
    //         console.log(city.toLowerCase())
    //     })
    // }



// Task_11:
    // const someString = 'This is some strange string';

    // function reverse(str) {
    //     if (typeof(str) !== 'string') {
    //         return "Ошибка!";
    //     }
    //     let res = '';
    //     for(let i = str.length-1; i>=0;i--){
    //         res+=str[i];
    //     }
    //     return res;
    // }

    // const baseCurrencies = ['USD', 'EUR'];
    // const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

    // function availableCurr(arr, missingCurr) {
    //     let str = '';
    //     arr.length===0 ? str = "Нет доступных валют" : str = "Доступные валюты:\n";
    //     arr.forEach(function(curr,i){
    //     if(curr!=missingCurr){
    //         str += `${curr}\n`;
    //     } 
    //     });
    //     return str;
    // }



// Task 12:
    // const shoppingMallData = {
    //     shops: [
    //         {
    //             width: 10,
    //             length: 5
    //         },
    //         {
    //             width: 15,
    //             length: 7
    //         },
    //         {
    //             width: 20,
    //             length: 5
    //         },
    //         {
    //             width: 8,
    //             length: 10
    //         }
    //     ],
    //     height: 5,
    //     moneyPer1m3: 30,
    //     budget: 50000
    // }

    // function isBudgetEnough(data) {
    //     let r = 0;
    //     let v = 0;
    //     data.shops.forEach(item => {
    //         r+=((item.width)*(item.length));
    //     })
    //     v = r*data.height;
    //     let enough = v * data.moneyPer1m3;
    //     if(enough > budget){
    //         return 'Бюджета недостаточно';
    //     }
    //     else{
    //         return 'Бюджета достаточно';
    //     }
    // }



// Task 13:
    // const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

    // function sortStudentsByGroups(arr) {
    //     arr.sort();
    //     const a = [],b = [],c = [], rest = [];
    //     for(let i = 0;i<arr.length;i++){
    //         if (i < 3) {
    //             a.push(arr[i]);
    //         } else if (i < 6) {
    //             b.push(arr[i]);
    //         } else if (i < 9) {
    //             c.push(arr[i]);
    //         } else {
    //             rest.push(arr[i]);
    //         }
    //     }
        
    //     return [a,b,c,`Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
    // }



// Task 14:
    // const restorantData = {
    //     menu: [
    //         {
    //             name: 'Salad Caesar',
    //             price: '14$'
    //         },
    //         {
    //             name: 'Pizza Diavola',
    //             price: '9$'
    //         },
    //         {
    //             name: 'Beefsteak',
    //             price: '17$'
    //         },
    //         {
    //             name: 'Napoleon',
    //             price: '7$'
    //         }
    //     ],
    //     waitors: [
    //         {name: 'Alice', age: 22}, {name: 'John', age: 24}
    //     ],
    //     averageLunchPrice: '20$',
    //     openNow: true
    // };

    // function isOpen(prop) {
    //     let answer = '';
    //     prop ? answer = 'Открыто' : answer = 'Закрыто';

    //     return answer;
    // }

    // console.log(isOpen(openNow))

    // function isAverageLunchPriceTrue(fDish, sDish, average) {
    //     if (+(fDish.price.slice(0, -1)) + (sDish.price) < average) {
    //         return 'Цена выше средней';
    //     } else {
    //         return 'Цена ниже средней';
    //     }
    // }

    // console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

    // function transferWaitors(data) {
    //     const copy = Object.assign({}, data);

    //     copy.waitors = [{name: 'Mike', age: 32}];
    //     return copy;
    // }

    // console.log(transferWaitors(restorantData));