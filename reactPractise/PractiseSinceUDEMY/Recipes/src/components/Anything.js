import React from 'react';

const Anything = (props) => {
  if (props.loading) {
    return <div>I am loading...</div>
  }

  // ({video}) is identical to having (props) and then
  // writing within the expression: const video = props.video; ES6 code ^
  console.log(props);

  const theRecipes = props.recipes;

  const mappedRecipes = theRecipes.map((recipe) => <div key={recipe.title}>
    <li >{recipe.title}</li>
    <img src={recipe.thumbnail} alt="img" height="100" width="100"/>
  </div>)
  console.log(mappedRecipes);
  return (
    <ul>{mappedRecipes}</ul>
  // {props.recipes[0].title}
  );
};

export default Anything;
