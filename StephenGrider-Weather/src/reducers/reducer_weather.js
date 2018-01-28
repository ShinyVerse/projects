import {FETCH_WEATHER} from '../actions/index.js';

export default function(state=[], action) {
  // console.log("Action received" , action);
  switch(action.type) {
    case FETCH_WEATHER:

return [action.payload.data, ...state]; //ES6.Insert new record to begin with.
            //concat just add on to state, it doesn't manipulate it. Manipulating is a no no. eg. state.push() would mutate
      // return state.concat([action.payload.data]);
      //^put in array, because multiple info coming back


  }
  return state;
}
