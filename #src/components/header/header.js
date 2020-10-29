// City choice select
$('.top-header__select').select2({
    width: "150px",
    minimumResultsForSearch: Infinity,
    dropdownCssClass: "city-dropdown",
});



//Header NAV menu switch active
let navLinks = document.querySelectorAll('.bottom-header__link');

for (let i = 0; i < navLinks.length; i++) {
    let navLink = navLinks[i];

    navLink.addEventListener('click', function(e) {

        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('_active');
        }
        this.classList.add('_active');
    });
}

// Header NAV dropdown menu open
let navDropdownBtn = document.querySelector('.bottom-header__dropdown');

navDropdownBtn.addEventListener('click', function(e) {
    navDropdownBtn.classList.toggle('_active');
});

