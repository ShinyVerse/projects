function add(num){
   return function nextAdd(second){
    return second + num;
  }
}


add(12)(20);
