let itemsArticles = document.querySelectorAll('.articles__item');
number = 1;
let countersArticles = document.querySelectorAll('.articles__counter');

for (let i = 0; i < itemsArticles.length; i++) {
    let counter = countersArticles[i];
    counter.innerHTML = number;
    number = number + 1;
}