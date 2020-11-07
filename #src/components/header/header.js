// City choice select
$('.top-header__select').select2({
    width: "150px",
    minimumResultsForSearch: Infinity,
    dropdownCssClass: "city-dropdown",
})


//Header NAV menu switch active
// let navLinks = document.querySelectorAll('.bottom-header__link');
//
// for (let i = 0; i < navLinks.length; i++) {
//     let navLink = navLinks[i];
//
//     navLink.addEventListener('click', function(e) {
//
//         for (let i = 0; i < navLinks.length; i++) {
//             navLinks[i].classList.remove('_active');
//         }
//         this.classList.add('_active');
//     });
// }

// Header NAV dropdown menu open

$('.bottom-header__dropdown-btn').on('click', function () {
    $(this).toggleClass('_active');
    $('.bottom-header__dropdown-list').animate({'height': 'toggle'}, 300)
})

$(document).click(function (e) {
    e.stopPropagation();
    var container = $('.bottom-header__dropdown');

    //check if the clicked area is dropDown or not
    if (container.has(e.target).length === 0) {
        $('.bottom-header__dropdown-list').slideUp(300);
        $('.bottom-header__dropdown-btn').removeClass('_active')

    }
})

$(".scroll-header").hide();
$(window).scroll(function() {
    if ($(this).scrollTop() > 10) {
        $('.scroll-header').slideDown(500);
        $('.header').slideUp(500);
    } else {
        $('.scroll-header').slideUp(500);
        $('.header').slideDown(500);
    }
});