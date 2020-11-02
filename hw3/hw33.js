//-- створити об'єкт (не меньше 5ти властивостей) який описує
//- собаку
//- людину
//- автомобіль
//- квартиру
//- книгу
//
//-- Створити масив та вивести його в консоль:
//    - з 5 собак
//- 3 5 людей
//- з 5 автомобілів
//
//-- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
//- будинок
//- водій
//- іграшку
//- стіл
//- сумка
//
//
//
//Дан массив:
//    let users = [
//        {name: 'vasya', age: 31, status: false},
//        {name: 'petya', age: 30, status: true},
//        {name: 'kolya', age: 29, status: true},
//        {name: 'olya', age: 28, status: false},
//        {name: 'max', age: 30, status: true},
//        {name: 'anya', age: 31, status: false},
//        {name: 'oleg', age: 28, status: false},
//        {name: 'andrey', age: 29, status: true},
//        {name: 'masha', age: 30, status: true},
//        {name: 'olya', age: 31, status: false},
//        {name: 'max', age: 31, status: true}
//    ];
//- звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
//- статус Андрія
//- статус Максима
//- ім'я передостаннього об'єкту
//- ім'я третього об'єкта
//- вік Олега
//- вік Олі
//- вік + ім'я 5го об'єкта
//- вік + сатус Анни
//Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!
//
//-Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
//-- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//- отримує текст з параграфа з id "content"
//- отримує текст з блоку з id "rules"
//- замініть текст параграфа з id 'content' на будь-який інший
//- замініть текст параграфа з id 'rules' на будь-який інший
//- змініть кожному елементу колір фону на червоний
//- змініть кожному елементу колір тексту на синій
//- отримати весь список класів елемента з id=rules і вивести їх в console.log
//- отримати всі елементи з класом fc_rules
//- поміняти колір тексту у всіх елементів fc_rules на червоний
//
//====================
//====================
//====================
//
//=================
//=====class=======
//=================
//Взяти файл template_2.html та працювати в ньому
//- Напишіть код, який :
//-- змінює колір тексту елемнту з ід main_header на будь-який інший
//-- робить шириниу елементу ul 400 пікселів
//-- робить шириниу всіх елементів з класом linkList шириною 50%
//-- отримує текст який зберігається в елементі з класом listElement2
//-- отримує всі елементи li та змінює ім колір фону на сірий
//-- отримує всі елементи 'a' та додає їм клас anchor
//-- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//-- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//-- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//-- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//-- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//-- отримати елементи p та змінити їм paddin на довільне значення
//-- отримати елементи з класом text2 та змінити їм текст на довільне значення
//
//const dog = {
//    age : 2,
//    family : 'sembernar',
//    weight : 15,
//    location : 'scotland',
//    passport : 'yes'
//}
//
//const man = {
//    age : 18,
//    name : 'Karl',
//    hair : 'black',
//    height : 178,
//    work : 'yes'
//}
//
//const car = {
//    mark : 'Tesla',
//    model : 'x',
//    hp : 450,
//    color : 'silver',
//    type : 'coupe'
//}
//
//const flat = {
//    rooms : 4,
//    street : 'pasichna',
//    floor : 9,
//    ownership : 'yes',
//    elevator : 'yes'
//}
//
//const book = {
//    author : 'yes',
//    pages : 520,
//    genre : 'horror',
//    pagesize : 'album',
//    font : 'helvetica'
//}
//
//
//console.log(book, flat, car, man, dog);


//const dogsArray = ['Chappy', 'Fluffy', 'Joke', 'Blake', 'Demon'];
//console.log(dogsArray);
//
//const pplArray = ['Jordan', 'Micheal', 'Carl', 'Charlotte', 'Julia'];
//console.log(pplArray);
//
//const carsArray = ['BMW', 'Toyota', 'Maybach', 'Audi', 'Tesla'];
//console.log(carsArray);

//
//const house = {
//    area : 5,
//    rooms : {
//        first : 'yellow',
//        second : 'black',
//        third : 'green',
//        fourth : 'white'
//    },
//    neighbors : ['Jessie', 'Klaus', 'Nora', 'Saraph', 'Joe'],
//    flors : 2,
//    grill : 'yes'
//}
//
//console.log(house);
//
//const driver = {
//    name : 'Alex',
//    car : 'BMW',
//    company : {
//        name : 'drivers',
//        members : 200,
//    },
//    membersnames : ['Daniel', 'Jeremy', 'Mark'],
//    carscount : 20
//}
//console.log(driver);
//
//const toy = {
//    type : 'plastic',
//    materials : {
//        plastic : 90,
//        cotton : 4,
//        wool : 6
//    },
//    sound : 'none',
//    toyname : 'Joe',
//    recycle : true
//}
//
//const table = {
//    material : 'wood',
//    legs : 4,
//    components : {
//        table : 1,
//        legs : 4,
//        screws: 16,
//    },
//    tablepack : 'carton',
//    manual : true
//}
//
//const bag = {
//    bagcolor : 'black',
//    bagmaterial : {
//        outside : 'leather',
//        zippers : 'steel',
//        embleme : 'gold'
//
//    },
//    components : ['bag', 'handle', 'package'],
//    volume : 4,
//}


let users = [
     {name: 'vasya', age: 31, status: false},
     {name: 'petya', age: 30, status: true},
     {name: 'kolya', age: 29, status: true},
     {name: 'olya', age: 28, status: false},
     {name: 'max', age: 30, status: true},
     {name: 'anya', age: 31, status: false},
     {name: 'oleg', age: 28, status: false},
     {name: 'andrey', age: 29, status: true},
     {name: 'masha', age: 30, status: true},
     {name: 'olya', age: 31, status: false},
     {name: 'max', age: 31, status: true}
     ];

//console.log(users[0].status);
//console.log(users[4].status);
//console.log(users[9].name);
//console.log(users[2].name);
//console.log(users[7].name);
//console.log(users[9].age);
//console.log(users[5].name , users[5].age);
//console.log(users[5].age , users[5].status);
//

//
// document.getElementById('content');
//
// document.getElementById('rules');
//
//const element = document.getElementById('content') ;
//element.innerText = 'qwerty';
//element.style.backgroundColor = 'red';
//
//
//const element1 = document.getElementById('rules');
//element1.innerText = 'qwerty1'
//element1.style.backgroundColor = 'red';

//let elementsByClassName = document.getElementsByClassName("fc_rules");
//console.log(elementsByClassName);
//
//for (i = 0; i < elementsByClassName.length; i++) {
//    elementsByClassName[i].style.backgroundColor = 'red';
//}
//
//let element = document.getElementById(`main_header`);
//element.style.backgroundColor = '#b1b021';

//const elementsByTagName = document.getElementsByTagName('ul')[0];
//elementsByTagName.style.width = '400px';
//
//
//const className = document.getElementsByClassName('linkList');
//for (i = 0; i < className.length; i++) {
//    className[i].style.width ='50%';
//}


//let elementsByClassName = document.getElementsByClassName("listElement2");
//console.log(elementsByClassName);
//
//const elementsByTagNameElement = document.getElementsByTagName('li');
//    for (i = 0; i < elementsByTagNameElement.length; i++) {
//        elementsByTagNameElement[i].style.backgroundColor ='silver';
//    }





//Task 2


//- взять json из задания 11 и превратить их обратно в объекты.
//- взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
//- взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
//- взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
//- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
//- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
//
//- За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
//
//
//
//- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
//let users = [{
//    name: 'vasya',
//    age: 31,
//    status: false,
//    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
//}, {
//    name: 'petya',
//    age: 30,
//    status: true,
//    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
//}, {
//    name: 'kolya',
//    age: 29,
//    status: true,
//    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
//}, {
//    name: 'olya',
//    age: 28,
//    status: false,
//    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
//}, {
//    name: 'max',
//    age: 30,
//    status: true,
//    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
//}, {
//    name: 'anya',
//    age: 31,
//    status: false,
//    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
//}, {
//    name: 'oleg',
//    age: 28,
//    status: false,
//    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
//}, {
//    name: 'andrey',
//    age: 29,
//    status: true,
//    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
//}, {
//    name: 'masha',
//    age: 30,
//    status: true,
//    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
//}, {
//    name: 'olya',
//    age: 31,
//    status: false,
//    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
//}, {
//    name: 'max',
//    age: 31,
//    status: true,
//    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
//}];
//
//
//- Дано 2 масиви з рівною кількістю об'єктів.
//Масиви:
//    let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
//З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//    Записати цей об'єкт в новий масив
//Частковий приклад реультату:
//    let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
//
//
//
//
//
//- створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
//- змінити цей текст використовуючи селектори id, class,  tag
//- змінити висоту та ширину блоку використовуючи селектори id, class,  tag
//- за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
//- за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
//
//--Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//- знайти всі елементі, які мають class
//- знайти всі параграфи ,та змінити текст на hello oktenweb!
//    - знайти всі div та змінити ім колір на червоний
//
//============
//====class===
//    ============
//
//    - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//    створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//    Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
//-Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//    Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
//let rules = [
//    {
//        title: 'Первое правило Бойцовского клуба.',
//        body: 'Никому не рассказывать о Бойцовском клубе.'
//    },
//    {
//        title: 'Второе правило Бойцовского клуба.',
//        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//    },
//    {
//        title: 'Третье правило Бойцовского клуба.',
//        body: 'В схватке участвуют только двое.'
//    },
//    {
//        title: 'Четвертое правило Бойцовского клуба.',
//        body: 'Не более одного поединка за один раз.'
//    },
//    {
//        title: 'Пятое правило Бойцовского клуба.',
//        body: 'Бойцы сражаются без обуви и голые по пояс.'
//    },
//    {
//        title: 'Шестое правило Бойцовского клуба.',
//        body: 'Поединок продолжается столько, сколько потребуется.'
//    },
//    {
//        title: 'Седьмое правило Бойцовского клуба.',
//        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//    },
//    {
//        title: 'Восьмое и последнее правило Бойцовского клуба.',
//        body: 'Новичок обязан принять бой.'
//    },
//
//];
//
//
//
//
//*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
//*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
//*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
//****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
//
//
//const dog = {
//    age : 2,
//    family : 'sembernar',
//    weight : 15,
//    location : 'scotland',
//    passport : 'yes'
//}
//
//const man = {
//    age : 18,
//    name : 'Karl',
//    hair : 'black',
//    height : 178,
//    work : 'yes'
//}
//
//const car = {
//    mark : 'Tesla',
//    model : 'x',
//    hp : 450,
//    color : 'silver',
//    type : 'coupe'
//}
//
//const flat = {
//    rooms : 4,
//    street : 'pasichna',
//    floor : 9,
//    ownership : 'yes',
//    elevator : 'yes'
//}
//
//const book = {
//    author: 'yes',
//    pages: 520,
//    genre: 'horror',
//    pagesize: 'album',
//    font: 'helvetica'
//}
//const house = {
//    area : 5,
//    rooms : {
//        first : 'yellow',
//        second : 'black',
//        third : 'green',
//        fourth : 'white'
//    },
//    neighbors : ['Jessie', 'Klaus', 'Nora', 'Saraph', 'Joe'],
//    flors : 2,
//    grill : 'yes'
//}
//
////console.log(house);
//
//const driver = {
//    name : 'Alex',
//    car : 'BMW',
//    company : {
//        name : 'drivers',
//        members : 200,
//    },
//    membersnames : ['Daniel', 'Jeremy', 'Mark'],
//    carscount : 20
//}
////console.log(driver);
//
//const toy = {
//    type : 'plastic',
//    materials : {
//        plastic : 90,
//        cotton : 4,
//        wool : 6
//    },
//    sound : 'none',
//    toyname : 'Joe',
//    recycle : true
//}
//
//const table = {
//    material : 'wood',
//    legs : 4,
//    components : {
//        table : 1,
//        legs : 4,
//        screws: 16,
//    },
//    tablepack : 'carton',
//    manual : true
//}
//
//const bag = {
//    bagcolor: 'black',
//    bagmaterial: {
//        outside: 'leather',
//        zippers: 'steel',
//        embleme: 'gold'
//
//    },
//    components: ['bag', 'handle', 'package'],
//    volume: 4,
//
//}
//
//let values = Object.keys(dog, car, flat, book, house, driver, toy, table, bag);
//let strings = Object.keys(dog, car, flat, book, house, driver, toy, table, bag);
//let entries = Object.keys(dog, car, flat, book, house, driver, toy, table, bag);
//for (let values in dog, car, flat, book, house, driver, toy, table, bag) {
//    console.log(values);
//
//    console.log(dog, car, flat, book, house, driver, toy, table, bag[values]);
//}
//
//let JSONstr = JSON.stringify({dog, car, flat, book, house: house});
//console.log(JSONstr);

//let readId = document.getElementById('task1');
//console.log(readId);
//let readClass = document.getElementsByClassName('task11');
//console.log(readClass);

let readId = document.getElementById('task1');
readId.innerText = 'lorem lorem';



//- за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
//- за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt