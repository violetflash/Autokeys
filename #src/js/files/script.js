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

@@include('../../components/duplicate/duplicate.js', {})


