//state arg isn't app state, only the state this reducer is responsible for
export default function(state = null, action) { //get two args: (state, action)


switch(action.type) {
  case 'ANIMAL_SELECTED':
    return action.payload; // <- this returns a fresh object
}

return state;

}
