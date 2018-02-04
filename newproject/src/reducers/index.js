import { combineReducers } from 'redux';
import BookReducer from './reducer_book_of_week';

const rootReducer = combineReducers({
  book: BookReducer,
});

export default rootReducer;
