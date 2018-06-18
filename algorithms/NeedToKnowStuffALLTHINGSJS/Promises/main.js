let cleanRoom = function(){
  return new Promise(function(resolve, reject){
    let cleanedRoom = true;
    if (cleanedRoom){
        resolve('Room cleaned.');
    } else {
      reject('Room wasn\'t cleaned.');
    }
  });
};

let doDishes = function(message){
  return new Promise(function(resolve, reject){
    let dishesDone = false;
    if (dishesDone){
        resolve( message + ' Dishes done.');
    } else {
      reject(message + ' Dishes have not been done.');
    }

  });
};

let walkDog = function(message){
  return new Promise(function(resolve, reject){
    let dogWalked = true;
    if (dogWalked){
        resolve( message + ' Walked the dog.');
    } else {
      reject(message + ' Didn\'t walk the dog.');
    }
  });
};

cleanRoom().then(function(result){
  return doDishes(result);
}).then(function(result){
  return walkDog(result);
}).then(function(result){
  console.log( result + ' All daily tasks complete' );
}).catch(function(fromReject){
  console.log("" + fromReject);
})
