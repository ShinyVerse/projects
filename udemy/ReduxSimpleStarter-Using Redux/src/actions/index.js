//book = object with a title. object.title
export function selectBook(book){
  //selectBook is an ActionCreator, it needs to return an actions
  //an object with a type property
  return {
    type: 'BOOK_SELECTED', //an Action always contains a type
    payload: book //and sometimes contains a payload\

    //payload is more information about the action that was just taken
  };
}


//type is always in uppercase, usually a string, always seperated
//if multiple words _ _ _
