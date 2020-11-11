//- создать массив с 20 числами.
//-- при помощи метода sort и колбека  отсортировать массив.
//
//const arr =[22,1,5,7,8,2,45,67,22,3,7,6,9,66,34,65,78,99,100,123];
//
//let sort = arr.sort((a, b) => {
//    console.log(a);
//    console.log(b);
//    console.log('_________');
//    return a - b;
//});
//
//console.log(sort);
//-- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
//
//const arr =[22,1,5,7,8,2,45,67,22,3,7,6,9,66,34,65,78,99,100,123];
//
//let sort = arr.sort((a, b) => {
//    console.log(a);
//    console.log(b);
//    console.log('_________');
//    return b - a;
//});
//
//console.log(sort);

//-- при помощи filter получить числа кратные 3
//    -- при помощи filter получить числа кратные 10
//
//const arr =[22,1,5,7,8,2,45,67,22,3,7,6,9,60,34,65,78,99,100,123];
//
////const filter = arr.filter(value => value % 3);
//const filter1 = arr.filter(value => (value % 10));
//
//console.log(filter1);

//    -- перебрать (проитерировать) массив при помощи foreach()
//let  arr =[22,1,5,7,8,2,45,67,22,3,7,6,9,60,34,65,78,99,100,123];
//
//arr.forEach(function(value, index, array){
//    console.log(value, index);
//});

//    -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
//
//
//let  arr =[22,1,5,7,8,2,45,67,22,3,7,6,9,60,34,65,78,99,100,123];
//
//let map =  arr.map(value => value * 3);
//console.log(map);
//console.log(arr);

//- создать массив со словами на 15-20 элементов.
//-- отсортировать его по алфавиту в восходящем порядке.
//let newArr = ['qwe','rty', 'uio', 'op[', 'asd','fgh', 'jkl','zxc', 'vbn', 'm,.', 'qaz', 'wsx', 'edc', 'rfv', 'tgb'];
//
//let arr = newArr.sort((a, b) => {
//});
//console.log(arr.sort());

    //-- отсортировать его по алфавиту  в нисходящем порядке.
//let newArr = ['qwe','rty', 'uio', 'op[', 'asd','fgh', 'jkl','zxc', 'vbn', 'm,.', 'qaz', 'wsx', 'edc', 'rfv', 'tgb'];
//
//let arr = newArr.sort((a, b) => {
//});
//console.log(arr.sort().reverse());

//-- отфильтровать слова длиной менее 4х символов
//let newArr = ['qwe','rty', 'uio', 'op[', 'asda','fgh', 'jkl','zxc', 'vbn', 'm,.', 'qaz', 'wsx', 'edc', 'rfv', 'tgb'];
////
//let filtr =  newArr.filter((value, index, array) => value = value.length === 4);
//
//
//console.log(filtr);

//-- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
//let newArr = ['qwe','rty', 'uio', 'op[', 'asda','fgh', 'jkl','zxc', 'vbn', 'm,.', 'qaz', 'wsx', 'edc', 'rfv', 'tgb'];
//
//
//let map =  newArr.map(value => value + '!')
//
//console.log(newArr);
//console.log(map);



//Все робити через функції масивів (foreach, map ...тд)
//Дан масив :
//    let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];

//let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
//
////- відсортувати його за  віком (зростання , а потім окремо спадання)
//let age = users.sort((a, b) => {
//    return a.age - b.age;
//
//})
//
//console.log(age);

//- відсортувати його за  віком (зростання , а потім окремо спадання)
//let age = users.sort((a, b) => {
//    return a.age - b.age;
//
//})
//
//console.log(age.reverse());


//let nameLength =  users.sort((a, b) => a.name.length - b.name.length);
//console.log(nameLength);

//- пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)


//let newUsers = JSON.stringify(users);
//newUsers = JSON.parse(newUsers);
//newUsers.forEach((item, index) => item.id = index + 1);
//console.log(newUsers);
//console.log(users);

  //- відсортувати його за індентифікатором

// let newSort = map.sort((a, b) =>);
//console.log(newSort);




//let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, {producer:"mercedes",model: "e63",year 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
//Відфільтрувати масив за наступними крітеріями :
//    - двигун більше 3х літрів
//- двигун = 2л
//- виробник мерс
//- двигун більше 3х літрів + виробник мерседес
//- двигун більше 3х літрів + виробник субару
//- сили більше ніж 300
//- сили більше ніж 300 + виробник субару
//- мотор серіі ej
//- сили більше ніж 300 + виробник субару + мотор серіі ej
//- двигун меньше 3х літрів + виробник мерседес
//- двигун більше 2л + сили більше 250
//- сили більше 250  + виробник бмв
//

let cars = [{producer:"subaru", model: "wrx", year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}];
//let newFLTR = cars.filter((value, index, array) => value = value.volume > 2);
//let newFLTR1 = cars.filter((value, index, array) => value.producer === 'mercedes');
//let newFLTR2 = cars.filter((value, index, array) => value.producer === 'mercedes' + value.volume > 3);
//let newFLTR3 = cars.filter((value, index, array) => value.producer === 'subaru' + value.volume > 3);
//let newFLTR4 = cars.filter((value, index, array) => value.power >= 300);
//let newFLTR5 = cars.filter((value, index, array) => value.power >= 300 + value.producer === 'subaru');
//let newFLTR6 = cars.filter((value, index, array) => value.engine.startsWith('ej');
//let newFLTR7 = cars.filter((value, index, array) => value.engine.startsWith('ej') && value.power > 300 &&  value.producer === 'subaru');
//let newFLTR8 = cars.filter((value, index) => value.volume < 3 && value.producer === 'mercedes');
//let newFLTR9 = cars.filter((value, index) => value.volume > 2 && value.power > 250);


//console.log(newFLTR);
//console.log(newFLTR1);
//console.log(newFLTR2);
//console.log(newFLTR3);
//console.log(newFLTR4);
//console.log(newFLTR5);
//console.log(newFLTR6);
//console.log(newFLTR7);
//console.log(newFLTR8);
//console.log(newFLTR9);



//- взять слдующий массив
let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
//-- отсортировать его по id пользователей
    //-- отсортировать его по id пользователей в обратном опрядке
    //-- отсортировать его по возрасту пользователей
    //-- отсортировать его по возрасту пользователей в обратном порядке
    //-- отсортировать его по имени пользователей
    //-- отсортировать его по имени пользователей в обратном порядке
    //-- отсортировать его по названию улицы  в алфавитном порядке
    //-- отсортировать его по номеру дома по возрастанию
    //-- отфильтровать (оставить) тех кто младше 30
    //-- отфильтровать (оставить) тех у кого отрицательный статус
    //-- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
    //-- отфильтровать (оставить) тех у кого номер дома четный

//-- отсортировать его по id пользователей
//
//let newSort = usersWithAddress.sort((a, b) => a.id - b.id);
//console.log(newSort);
////-- отсортировать его по id пользователей в обратном опрядке
//let newSort = usersWithAddress.sort((a, b) => b.id - a.id);
//console.log(newSort);

////-- отсортировать его по возрасту пользователей
//let ageSort = usersWithAddress.sort((a, b) => a.age - b.age);
//console.log(ageSort);

////-- отсортировать его по возрасту пользователей в обратном порядке
//let ageSort = usersWithAddress.sort((a, b) => b.age - a.age);
//console.log(ageSort);

//-- отсортировать его по имени пользователей
//console.log(usersWithAddress.sort((a, b) => {
//    let nameA = a.name.toLowerCase();
//    let nameB = b.name.toLowerCase();
//    if (nameA < nameB) return -1;
//    if (nameA > nameB) return 1;
//}));

//-- отсортировать его по имени пользователей в обратном порядк
//console.log(usersWithAddress.sort((a, b) => {
//    let nameA = a.name.toLowerCase();
//    let nameB = b.name.toLowerCase();
//    if (nameA > nameB) return -1;
//    if (nameA < nameB) return 1;
//}));

//-- отсортировать его по названию улицы  в алфавитном порядке
//console.log(usersWithAddress.sort((a, b) => {
    //let streetA  = a.address.street.toLowerCase();
    //let streetB  = b.address.street.toLowerCase();
    //if (streetA > streetB) return  -1;
    //if (streetA < streetB) return  1;
//}));

//-- отсортировать его по номеру дома по возрастанию
//console.log(usersWithAddress.sort((a, b) => {
//    let numberA = a.address.number;
//    let numberB = b.address.number;
//    if (numberA < numberB) return -1;
//    if (numberA > numberB) return 1;
//
//}));

//отфильтровать (оставить) тех кто младше 30
//
//let filtrd = usersWithAddress.filter((value, index) => value = value.age < 30);
//console.log(filtrd);

//-- отфильтровать (оставить) тех у кого отрицательный статус
//
//let filtrd2 = usersWithAddress.filter((value, index) => value = !value.status)
//console.log(filtrd2);

//-- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
//
//let filtrd2 = usersWithAddress.filter((value, index) => value = !value.status && value.age < 30);
//console.log(filtrd2);

//-- отфильтровать (оставить) тех у кого номер дома четный

//let filtr3 = usersWithAddress.filter((value, index) => {
//    if (value.address.number % 2);
//
//})
//console.log(filtr3);