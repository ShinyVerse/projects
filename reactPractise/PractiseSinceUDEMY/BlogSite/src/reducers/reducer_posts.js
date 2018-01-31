
import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';


export default function(state = {}, action){
  switch(action.type){
    case DELETE_POST:
    //takes state, compares it with what you want to remove and then
    //gives back a new object of state with the omission gone.
    return _.omit(state, action.payload);
    case FETCH_POST:
    return { ...state, [action.payload.data.id]: action.payload.data }
    // const post =  action.payload.data;
    // const newState =  { ...state };
    // newState[post.id] = post;
    // return newState;
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
