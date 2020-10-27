$('.top-header__select').select2({
    width: "150px",
    minimumResultsForSearch: Infinity,
    dropdownCssClass: "header-dropdown",
});

$('.select2-selection').css('border-radius', '0px')
$('.select2-container').children().css('border-radius', '0px')


///MODAL LOGIN-REGISTER
$(document).ready(function() {
    $('.top-header__login').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '.logon__login',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });
});
