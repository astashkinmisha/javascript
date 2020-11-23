//Реалізувати друкарську машинку.
//    У вас є текст "Hello World".
//    Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//    КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//    Цим самим ви маєте симулювати написання даного тексту юзером.
//    Приклад: "Hello"
//Затримки:
// H (затримка 0.6)
//e (затримка 0.1)
//l (затримка 0.3)
//l (затримка 0.7)
//о (затримка 1)
//
//
 function machine () {
    return new Promise(resolve => {
        setTimeout(() => {

            resolve('H')
            document.write('H')
        }, 450)
    })

 }
function e () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('e')
            document.write('e')
        }, 555)
    })
}
function  l1 () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('l')
            document.write('l')
        }, 340)
    })
}
function  l2 () {
    return new Promise(resolve => {
        setTimeout(() => {
           resolve('l')
            document.write('l')
        }, 500)
    })
}
function  o () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('o')
            document.write('o')
        }, 400)
    })
}
function  W () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('W')
            document.write('W')
        }, 500)
    })
}
function  o () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('o')
            document.write('o')
        }, 603)
    })
}
function  r () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('r')
            document.write('r')
        }, 890)
    })
}
function  l () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('l')
            document.write('l')
        }, 600)
    })
}
function  d () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('d')
            document.write('d')
        }, 600)
    })
}

async function delay () {
    const word = await machine()
    const let1 = await e()
    const let2 = await l1()
    const let3 = await l2()
    const let4 = await o()
    const let5 = await W()
    const let6 = await o()
    const let7 = await r()
    const let8 = await l()
    const let9 = await d()
}
delay()





