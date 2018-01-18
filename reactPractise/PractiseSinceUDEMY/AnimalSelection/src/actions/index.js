//To contain all the different action creators that we make

//make sure the action returned from it runs through all the reducers

export function selectAnimal(animal) {
  //selectAnimal is an ActionCreator, it needs to return an action.
  //Action: an object with a type property.
  return {
    type: 'ANIMAL_SELECTED',
    payload: animal
  };
  // console.log('An animal selected is called a :', animal.name)
}
