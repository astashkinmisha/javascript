//function daySchedule (time, success) {
//    console.log('таска 1');
//
//    setTimeout(() =>{
//    console.log('Get up at 7 a.m.');
//
//        if (time > 7 ){
//       success('you should get up faster', null);
//return;
//            }
//        success(null, 'lets go');
//    }, 1500);
//
//}
//daySchedule(7, (err, day) => {
//    if (err) {
//        console.log('треба було раніше вставати');
//        return;
//    }
//    console.log(`хороший початок ${day}`);
//
//    function  cupOfCoffee (time, success){
//        setTimeout(() => {
//            console.log('lets drink some coffee...');
//            console.log("drinking...");
//            if (time > 15) {
//                success('you will lose bus', null);
//                return;
//            }
//            success(null, 'great');
//
//        },2000);
//    }
//    cupOfCoffee(15, (err, coffee) => {
//        if (err) {
//            console.log('you should do it faster');
//            return;
//        }
//        console.log(`have a ${coffee} day`);
//        function goWork(time, success) {
//            console.log('going to homeoffice..');
//            console.log('turning computer on....');
//
//            setTimeout(() => {
//                if (time > 5) {
//                    success('you are late, - 15 euro', null);
//                    return;
//                }
//                success(null, 'you are logged in and your money saved');
//            },3000)
//        }
//        goWork(5, (err, schedule) => {
//            if (err) {
//                console.log('you should start your PC before coffee');
//                return;
//            }
//            console.log(`have a nice ${schedule}`);
//
//            function haveBreak(time, success) {
//                console.log('taking break for 10 mins');
//                console.log('chilling..');
//                setTimeout(() => {
//                    if (time > 15) {
//                        success('you shouldnt be late', null);
//                        return;
//                    }
//                    success(null, 'you are here in time');
//                }, 1500);
//            }
//
//            haveBreak(15, (err, breaking) => {
//                if(err) {
//                    console.log('you must come back in time');
//                    return;
//                }
//                    console.log(`have a great ${breaking}`);
//
//
//                    function woking(time, result) {
//                        console.log('taking calls ...');
//                        console.log('giving support...');
//                        setTimeout(() => {
//                            if (time < 120) {
//                                result('you hang up too little number of calls', null);
//                                return;
//
//                            }
//                            result(null, 'you worked fine, but should take a break');
//
//                        }, 5000)
//                    }
//                    woking(120, (err, smoke) => {
//                        if (err) {
//                            console.log('you should work better');
//                            return;
//                        }
//                        console.log(` ${smoke} now`);
//
//                            function someSports (time, result) {
//                                console.log('after work, going sports...');
//                                console.log('like this...');
//                                setTimeout(() => {
//                                if (time > 90){
//                                    result('you need to go resting at home', null);
//                                    return;
//                                }
//                                result(null, 'taking photos :D');
//                                    }, 3000)
//                            }
//                            someSports(90, (err, resting)=> {
//                                if (err){
//                                    console.log('you need rest');
//                                    return;
//                                }
//                                console.log(`${resting}, ha ha `);
//
//                           function goingSleep (time, rest){
//                               console.log('preparing to sleep');
//                               console.log('going to sleed');
//                               setTimeout(() => {
//                                   if (time > 15){
//                                       rest('your sleeping time will be too low', null);
//                                       return
//                                   }
//                                   rest(null, 'you slept fine');
//                               })
//                           }
//                           goingSleep(15, (err, sleep) => {
//                               if (err) {
//                                   console.log('you should go sleed erlier');
//                                   return;
//                               }
//                               console.log(`${sleep} good bye`);
//                           })
//                            })
//                    })
//            })
//        })
//    })
// })


function dayStart (Waketime) {
    return new Promise((resolve, reject) => {
        console.log('getting up...');
        setTimeout(() => {
            console.log('done');
            if (Waketime > 15) {
                resolve('niceboy');
            } else {
                reject('you can be late');
            }
        }, 1000);
    });
}

    function goWork(time) {
        return new Promise((resolve, reject) => {
            console.log('going on bus');
            setTimeout(() => {
                if (time > 15){
                    resolve('you are in work on time');
                } else {
                    reject('you should do it faster')
                                    }
            }, 1000)
                            })
                };

        function onWork (tasks) {
            return new Promise((resolve, reject) => {
                console.log('making tasks');
                setTimeout(() => {
                    if (tasks >= 10) {
                        resolve('good boy')
                                        } else {
                        reject('you should do more')
                                        }
                }, 4500)
                        })
                }
            function commingHome (eating) {
            return new Promise((resolve, reject) => {
                console.log('looking for food');
                setTimeout(() => {
                    if (!eating ) reject('no food, no eat')
                                    {
                    resolve('mnyam')
                                        }
                }, 3000)
                        })
                    }
                function playingGames (game){
            return new Promise((resolve, reject) => {
                console.log('hmmm, what game can i play...');
                setTimeout(() => {
                    if (!game) reject('i go to sleep')
                                    resolve('i`ll play a little')
                                }, 3500)
                        })

                        }
                function preparingToSleep (time) {
            return new Promise((resolve, reject) => {
                console.log('i should go to bed');
                setTimeout(() => {
                    if (time > 22){
                        reject('you can sleep so low and will miss your work')
                                        } else {
                        resolve('there is chances to come on job in time')
                                        }
                }, 1200)
                        })
                        }
                function sleeping (timeInBed){
            return new Promise((resolve, reject) => {
                console.log('ZzzZ');
                setTimeout(() => {
                    if (timeInBed > 8){
                        resolve('nice night')
                                        }else{
                        reject('bad night')
                                        }
                },2400)
                        })
                        }

               dayStart(16)
                       .then((Waketime) => {
    console.log(Waketime);
    return goWork(16)
            })
                       .then((goWork)=>{
                           console.log(goWork);
                           return onWork(11)
                                   }
                       )
                   .then((onWork) => {
                       console.log(onWork);
                       return commingHome(true)
                           })
                       .then((commingHome) => {
                       console.log(commingHome);
                       return playingGames(true)
                               })
                       .then((playingGames) => {
                       console.log(playingGames);
                       return preparingToSleep(22)
                               })
                       .then((preparingToSleep) => {
                       console.log(preparingToSleep);
                       return sleeping(9)
                               })
                       .then((sleeping) => {
                       console.log(sleeping);
                   })
                       .catch((err) => {
                       console.log(err);
                   })





