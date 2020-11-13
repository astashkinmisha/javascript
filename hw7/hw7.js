
//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

//const p = document.createElement('p');
//p.innerText = 'loremclick';
//p.style.backgroundColor = 'red';
//
//let btn = document.createElement('button');
//btn.innerText ='x';
//
//btn.onclick = (ev) =>{
//    console.log(ev.target.parentElement);
//    console.log('remove');
//    ev.target.parentElement.style.display = 'none';
//}
//p.appendChild(btn);
//document.body.appendChild(p);


//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
//let btn =document.createElement('button');
//btn.innerText = 'x';
//btn.onclick = (ev) => {
//    console.log(ev);
//    ev.target.parentElement.style.display = 'none';
//    console.log('remove');
//
//}
//document.body.appendChild(btn);

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на
// кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
//
//let inpt = document.createElement('input');
//let btn = document.createElement('button');
//inpt.innerText =(value = 'number' );
//btn.innerText = ('OK');
//
//btn.onclick = (ev) => {
//
//    console.log(inpt.value);
//    if (inpt.value >= 18) {
//        console.log('its ok');
//    }else {
//        alert ('go back');
//    }
//}
//
//
//document.body.appendChild(inpt);
//document.body.appendChild(btn);
//
//console.log(value);


//- Создайте меню, которое раскрывается/сворачивается при клике

//let menuElem = document.getElementById('menus');
//let titleElem = menuElem.querySelector('.title');
//
//titleElem.onclick = function() {
//    menuElem.classList.toggle('open');
//};


//
//let title1 = document.getElementById('title');
//let title2 = document.getElementById('title2');
//let cont = document.getElementById('body');
//let cont2 = document.getElementById('body2');
//
//
//title1.onclick = function () {
//    title1.classList.toggle('close');
//};


//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//    Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
//
//let input1 = document.getElementById('input1');
//let input2 = document.getElementById('input2');
//let input3 = document.getElementById('input3');
//let input4 = document.getElementById('input4');
//
//let btn1 = document.getElementById('btn1');
//let btn2 = document.getElementById('btn2');
//
//input1.innerText = (input1.value);
//input2.innerText = (input2.value);
//input3.innerText = (input3.value);
//input4.innerText = (input4.value);
//btn1.onclick = (ev) => {
//    console.log(input1.value);
//    console.log(input2.value);
//
//    btn2.onclick = (ev) => {
//        console.log(input3.value);
//        console.log(input4.value);
//    }
//
//}

//- Створити функцію, яка генерує таблицю.
//    Перший аргумент визначає кількість строк.
//    Другий параметр визначає кліькіть ячеєк в кожній строці.
//    Третій параметр визначає елемент в який потрібно таблицю додати.

//const content = document.getElementById('content')
//
//function createTable(row,columns,tag) {
//    const table = document.createElement('table');
//    for (let i = 0; i < row; i++){
//const tr = document.createElement('tr');
//for (let j = 0; j < columns; j++){
//    const td = document.createElement('td');
//    td.innerHTML = i.toString() + j.toString();
//    tr.appendChild(td);
//}
//table.appendChild(tr);
//    }
//tag.appendChild(table);
//}
//createTable(3,3, content);
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

//let usersWithAddress = [
//    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//    ];
//
//let firstcheck = usersWithAddress.filter((value, index) => value = !value.status);
//const element1 = document.getElementById('checkbox1');
//for (i = 0; i < usersWithAddress; i++){
//    element1.onclick = () => {
//        firstcheck.value.status;
//        document.write(firstcheck);
//    }
//
//}
//document.write(usersWithAddress);


//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//    При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//
//
//let rowCount = document.getElementById('rowsCount');
//let ColumnCount = document.getElementById('colCount');
//let content = document.getElementById('Content');
//let btn = document.getElementById('btn2');
//
//rowCount.innerText = (rowsCount.value);
//ColumnCount.innerText = (colCount.value);
//content.innerText = (Content.value);
//
//btn.onclick = (ev) => {
//    let table = document.createElement('table');
//    for (i = 0; i < rowCount; i++) {
//        let td = document.createElement('td');
//        for (j = 0; j < ColumnCount; j++){
//            let tr = document.createElement('tr');
//        tr.appendChild(td);
//        }
//table.appendChild(tr);
//    }
//    content.appendChild(table);
//
//}


//- Сворити масив не цензцрних слів.
//    Сворити інпут текстового типу.
//    Якщо людина вводить слово і воно міститься в масиві не цензурних слів
//кинути алерт з попередженням.
//    Перевірку робити при натисканні на кнопку

incorrect

//let censored = ['bitch', 'fuck', 'dick'];
//let btn = document.getElementsByTagName("input");
//let checkered = document.getElementsByTagName("input");
//btn.onclick = () => {//

//    if (checkered === censored){
//        alert('ssss')
//    }
        }
        

