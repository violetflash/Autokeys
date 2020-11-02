///////////////
///Add to favorites button
///////////////

let favorites = document.querySelectorAll('.card__add-to-favorites');
for (let i = 0; i < favorites.length; i++) {
    const favoriteBtn = favorites[i]

    favoriteBtn.addEventListener('click', function(e) {
        favoriteBtn.classList.toggle("added");
    });
}

let selector = document.querySelectorAll('input[type="tel"]');

let im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);

