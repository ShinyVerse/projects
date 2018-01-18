import { combineReducers } from 'redux';
// import BooksReducer from './reducer_books';
import AnimalsReducer from './reducer_animal_list';
import ActiveAnimal from './reducer_active_animal';


//this is the mapping of our state
const rootReducer = combineReducers({
//Any key to the object that we provide to
//combineReducers ends up as a key on our global state
  animals: AnimalsReducer,
  activeAnimal: ActiveAnimal
});

export default rootReducer;
