
//state argument is not application state, only the state
//this reducer is responsible for
export default function(state = null, action) {
  //All reducers get two arguments: (state, action)
  //state= current state//
  switch(action.type){
  case 'BOOK_SELECTED':
    return action.payload;
  }

  return state
  //return state if we do not care about the action
}

// Most redux reducers are set up with js switch statements
//the switch statement is going to look at the actions type
//and if it's the one we care about we'll return a new state


//initially this would return state because the user hasnt selected a book yet
//but returning state with nothing would result in undefined
//this will throw and error:
//so change arguments (state, action) to
//(state= null) ES6syntax
