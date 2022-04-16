const categoriesEl = document.querySelectorAll('.item');

const countNumberCategories = el => {
    return `Number of categories: ${el.length}`
};
console.log(countNumberCategories(categoriesEl));

const res = el => {
    const countNumberEl = el.lastElementChild.children.length;
    const showTitleText = el.firstElementChild.textContent;
    console.log(`Category: ${showTitleText}`)
    console.log(`Elements: ${countNumberEl}`)
};

const result = [...categoriesEl].map(item => (res(item)));
