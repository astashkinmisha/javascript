
//
//function tag (name, description, atrArr1=[name, action], atrArr2=[name, action]) {
//    this.tagname = name;
//    this.tagdescription = description;
//    this.tagatrArr1 = atrArr1=[name,action];
//    this.tagatrArr2 = atrArr2=[name, action];
//
//}
//let atag = new tag('a', 'Тег является одним из важных элементов HTML и предназначен для создания ссылок', [{}, name = 'accesskey', action = 'Активация ссылки с помощью комбинации клавиш.'],  [name = 'href', action = 'Задает адрес документа, на который следует перейти']);
//
//console.log(atag);
//
//let divT = new tag('div','Элемент  является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого', [alighAtr = {name : 'align', action : 'Задает выравнивание содержимого тега'}], [titleAtr = {name : 'title', action : 'Добавляет всплывающую подсказку к содержимому.'}]);
//
//console.log(divT);
//
//
//let h1T = new tag('h1', 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. ', [elain = {name : 'elain', action :'Определяет выравнивание заголовка.'}]);
//
//console.log(h1T);
//
//let spanT = new tag('span', 'Тег предназначен для определения строчных элементов документа', [accesskey = {name: 'accesskey', action: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш'}]);
//
//console.log(spanT);
//
//let inputT = new tag('input', 'Тег является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем', [accept = {name: 'accept', action: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'}],  [align = {name: 'align'}, {name: 'align', action: 'Определяет выравнивание image'}]);
//
//console.log(inputT);
//
//let formt = new tag('form', 'Cвязывает поле с формой по её идентификатору', [null]);
//console.log(formt);
//
//let optionT = new tag('option', 'Тег определяет отдельные пункты списка, создаваемого с помощью контейнера',[value = {name: 'Value', action: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов'}], [{name: 'selected', action: 'Заранее устанавливает определенный пункт списка выделенным'}]);
//
//console.log(optionT);
//
//let selectT = new tag('select', 'Тег позволяет создать элемент интерфейса в виде раскрывающегося списка',[name ={name : 'name', action : 'Имя элемента для отправки на сервер или обращения через скрипты.'}], [form ={name : 'form', action: 'Связывает список с формой.'}] );
//console.log(selectT);

//class tag2 {
//    constructor(name, description, atrArr1=[name, action], atrArr2=[name, action]) {
//        this.name = name;
//        this.description = description;
//        this.tagatrArr1 = atrArr1=[name,action];
//        this.tagatrArr2 = atrArr2=[name, action];
//    }
//}
//let atag = new tag2 ('a', 'Тег является одним из важных элементов HTML и предназначен для создания ссылок', [{}, name = 'accesskey', action = 'Активация ссылки с помощью комбинации клавиш.'],  [name = 'href', action = 'Задает адрес документа, на который следует перейти']);
//
//console.log(atag);
//
//let divT = new tag2('div','Элемент  является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого', [alighAtr = {name : 'align', action : 'Задает выравнивание содержимого тега'}], [titleAtr = {name : 'title', action : 'Добавляет всплывающую подсказку к содержимому.'}]);
//
//console.log(divT);
//
//
//let h1T = new tag2('h1', 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. ', [elain = {name : 'elain', action :'Определяет выравнивание заголовка.'}]);
//
//console.log(h1T);
//
//let spanT = new tag2('span', 'Тег предназначен для определения строчных элементов документа', [accesskey = {name: 'accesskey', action: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш'}]);
//
//console.log(spanT);
//
//let inputT = new tag2('input', 'Тег является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем', [accept = {name: 'accept', action: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'}],  [align = {name: 'align'}, {name: 'align', action: 'Определяет выравнивание image'}]);
//
//console.log(inputT);
//
//let formt = new tag2('form', 'Cвязывает поле с формой по её идентификатору', [null]);
//console.log(formt);
//
//let optionT = new tag2('option', 'Тег определяет отдельные пункты списка, создаваемого с помощью контейнера',[value = {name: 'Value', action: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов'}], [{name: 'selected', action: 'Заранее устанавливает определенный пункт списка выделенным'}]);
//
//console.log(optionT);
//
//let selectT = new tag2('select', 'Тег позволяет создать элемент интерфейса в виде раскрывающегося списка',[name ={name : 'name', action : 'Имя элемента для отправки на сервер или обращения через скрипты.'}], [form ={name : 'form', action: 'Связывает список с формой.'}] );
//console.log(selectT);


//- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

//let car = {
//    model: 'Tesla',
//    producer: 'USA',
//    yearOfProd: 2020,
//    MaxSpeed: 300,
//    volume: 0,
//    drive: function () {
//        console.log('їдемо зі швидкістю', this.MaxSpeed, 'на годину')
        //    },
//    info: function () {
//        console.log(car.model, car.producer, car.yearOfProd, car.MaxSpeed, car.volume);
//    },
//        increaseMaxSpeed: function (newSpeed){
//        this.MaxSpeed += newSpeed;
//        console.log(this.MaxSpeed);
//
//    },
//    changeYear: function(newValue) {
//        this.yearOfProd = newValue;
//        console.log(this.yearOfProd);
//    },
//addDriver : function (driver) {
//
// this.driver = driver;
// console.log(driver);
//
//            }
//};
//car.drive();
//car.info();
//car.increaseMaxSpeed(30);
//car.changeYear(2019);
//car.addDriver({name: 'karl', age: 34, exp : 5});
//console.log(car);

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car



//function car(model, producer, year, maxSpeed, volume ) {
//    this.model = model;
//    this.producer = producer;
//    this.year = year;
//    this.maxSpeed = maxSpeed;
//    this.volume = volume;
//
//}
//
//let car1 = new car ('x','tesla',2017, 250, 0);
//car1.drive= function (){
//    console.log('їдемо зі швидкістю' ,'', + this.maxSpeed, 'на годину');
//}
    //    car1.info = function (){
//        console.log(this.model, this.producer, this.year, this.maxSpeed, this.volume);
//    }
    //          car1.increaseMaxSpeed = function (newSpeed){
//              this.maxSpeed += newSpeed;
//              console.log(this.maxSpeed);
//          }
    //              car1.changeYear = function (newValue) {
//                  this.year = newValue;
//                  console.log(this.year);
//              }
    //car1.addDriver = function (driver) {
//    this.driver = driver;
//    console.log(this.driver);
//}
    //car1.drive();
//car1.info();
//car1.increaseMaxSpeed(15);
//car1.changeYear(2019);
//car1.addDriver({name: 'Troll', age: 17});


//- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

//class Car {
//    constructor(model, producer, year, maxSpeed, volume) {
//        this.model = model;
//        this.producer = producer;
//        this.year = year;
//        this.maxSpeed = maxSpeed;
//        this.volume = volume;
//    }
//drive(){
//        console.log('Їхали зі швидкістю', ''+ this.maxSpeed, 'на годину');
//}
//info(){
//    console.log(this.model, this.producer, this.year, this.maxSpeed, this.volume);
//}
//increaseMaxSpeed (newSpeed){
//        this.maxSpeed += newSpeed;
//    console.log(this.maxSpeed);
//}
//
//changeYear (newValue){
//        this.year = newValue;
//    console.log(this.year);
//}
//addDriver (driver){
//        this.driver = driver;
//    console.log(this.driver);
//}
//
//
//}
//
//let OldCar = new Car('x', 'tesla', 2020,220, 0);
//console.log(OldCar);
//
//OldCar.drive();
//OldCar.info();
//OldCar.increaseMaxSpeed(30);
//OldCar.changeYear(2019);
//OldCar.addDriver({name: 'Ihor', age: 44});

   //incorrect             //class Popelyshka {
                //    constructor(name, age, legSize) {
                //        this.name = name;
                //        this.age = age;
                //        this.legSize = 0;
                //    }
                //create(){
                //        this.legSize += 6;
                //}
                //}
                //class Prince{
                //    constructor(name, age, shoeSize) {
                //        this.name = name;
                //        this.age = age;
                //        this.shoeSize = shoeSize;
                //    }
                //    find() {
                //        this.legSize === this.shoeSize;
                //    }
                //}
                //    if (this.legSize === this.shoeSize){
                //
                //
                //}
                //let Divka = new Popelyshka('Darina', 15, 36);
                //console.log(Divka);
                //
                //let Pacan = new Prince ('Harry', 20, 36);
                //console.log(Prince);
                //
                //
                //
                //console.log('Im Happy to meet' , + new Popelyshka(this.name), 'so much');
                //console.log(new Popelyshka('Ann', 20, 30));
                //Divka.create();
                //Pacan.find();
                //
                //console.log(new Popelyshka('Karina', 21, 40));
                //Divka.create();
                //Pacan.find();
                //
                //console.log(new Popelyshka('Darina', 32, 32));
                //Divka.create();
                //Pacan.find();
                //
                //console.log(new Popelyshka('Ivanna', 12, 36));
                //Divka.create();
                //Pacan.find();
                //
                //console.log(new Popelyshka('kate', 17, 44));
                //Divka.create();
                //Pacan.find();
                //
                //console.log(new Popelyshka('Roksa',12, 32));
                //Divka.create();
                //Pacan.find();
                //
                //console.log(new Popelyshka('Tifany', 90, 40));
                //Divka.create();
                //Pacan.find();
                //
                //console.log(new Popelyshka('Jessie', 18, 21));
                //Divka.create();
                //Pacan.find();
                //
                //console.log(new Popelyshka('Viktoria',14, 41));
                //Divka.create();
                //Pacan.find();
                //
                //console.log(new Popelyshka('Alice', 21, 38));
                //Divka.create();
                //Pacan.find();
                //
                //console.log(new Popelyshka('Lera',44,36));
                //Divka.create();
                //Pacan.find();