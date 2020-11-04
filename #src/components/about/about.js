// about__item counter
let items = document.querySelectorAll('.about__item');
var index = 1;
let counters = document.querySelectorAll('.about__counter');
for (let i = 0; i < items.length; i++) {
    let counter = counters[i];
    counter.innerHTML = index;
    index = index + 1;
}