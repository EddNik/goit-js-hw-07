const categoriesObjects = document.querySelectorAll('li.item.container');
console.log(`Number of categories: ${categoriesObjects.length}`);

for (let item of categoriesObjects) {
  const categoryName = item.querySelector('h2').textContent;
  console.log(`Category: ${categoryName}`);
  const numberCategoryElements = item.querySelectorAll('li').length;
  console.log(`Elements: ${numberCategoryElements}`);
}
