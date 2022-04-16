const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');
const itemArray = [];

const foo = (array) => array.map(item => {
  const itemEl = document.createElement('li');
  itemEl.textContent = item;
  itemEl.classList = 'item';
  return itemArray.push(itemEl);
});

foo(ingredients);

const addItems = ingredientsList.prepend(...itemArray);

