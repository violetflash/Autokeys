let itemsArticles = document.querySelectorAll('.poster');
number = 1;
let countersArticles = document.querySelectorAll('.poster__counter');

for (let i = 0; i < itemsArticles.length; i++) {
    let counter = countersArticles[i];
    counter.innerHTML = number;
    number = number + 1;
}