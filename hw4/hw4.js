
////- створити функцію яка виводить масив
//inArray =[1, 2, 3, 4, 5, 6, 7];
// function showArr(array){
//     console.log(array);
// }
//showArr(inArray);
//
//
////- створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
//
//randomArr =[];
//function fillArr(array) {
//    for (i = 0; i < 10; i++) {
//        array.push(Math.round(Math.random()*100));
//    }
//    showArr(array);
//}
//fillArr(randomArr);
//
//////- створити функцію яка приймає три числа та виводить та повертає найменьше.
//
//function minValue (one, two, three) {
//    let result = Math.min(one, two, three);
//    console.log(result);
//    return result;
//}
//minValue(13, 41, 2);
//
//////- створити функцію яка приймає три числа та виводить та повертає найбільше.
//
//function maxValue (one, two, three) {
//    let result = Math.max(one, two, three);
//    console.log(result);
//    return result;
//}
//maxValue(13, 41, 2);
//
////- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
//function maxminValue (){
//console.log(arguments)
//    let args = [];
//    for (i = 0; i < arguments.length; i++) {
//args.push(arguments[i]);
//    }
//    console.log(Math.max(...args));
//    return Math.min(...args);
//}
//console.log(maxminValue(54,55,20,21, 10, 44,51,66,20, 321));
//
//
////- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//let nums = [13,5,42,55,5213];
//function average(array) {
//    let result = 0;
//    for (const elem of array) {
//        result += elem;
//    }
//        result = result / array.length;
//        return result;
//    }
//
//    console.log(average(nums));
//
//
//
//
////- створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
////    Приклад
////    [1,2,3,4]
////    [2,3,4,5]
//
//const arrOne = [1, 2, 3, 4];
//const arrTwo = [2, 3, 4, 5];
//function summ(arr1, arr2) {
//    const result = [];
//    for (let i = 0; i < arr1.length; i++) {
//        result.push(arr1[i] + arr2[i])
//    }
//    return result;
//}
//console.log(summ(arrOne, arrTwo));





//- *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

//let array = [3,5,6,7,8];
//const i = 3;
//
//function replaceIndex (repl) {
//    let item1 = repl[i];
//    let item2 = repl[i+1];
//    repl[i] = item2;
//    repl[i+1] = item1;
//
//    return repl;
//
//}
//console.log(replaceIndex(array));








