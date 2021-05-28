const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listOfIngredients = ingredients.map(ingredient => {
  const ingredientEl = document.createElement('li');
  // console.log(ingredientEl)
  ingredientEl.textContent = ingredient

  return ingredientEl;
})
// console.log(listOfIngredients)

const listOfIngredientsEl = document.querySelector('#ingredients');
listOfIngredientsEl.append(...listOfIngredients);