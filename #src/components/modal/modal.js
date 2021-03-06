///MODAL LOGIN-REGISTER

$('.modal-login').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '.modal__login',
    closeOnBgClick: false,

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
        beforeOpen: function() {
            $('body').addClass('mfp-active');
            if($(window).width() < 700) {
                this.st.focus = false;
            } else {
                this.st.focus = '#name';
            }
        },
        beforeClose: function() {
            $('body').removeClass('mfp-active');
        }
    }
});

// Switching Login to Register
$('.modal__switcher').click(function () {
    // Switches the Icon
    $(this).toggleClass('_register');

    if ($(this).hasClass('_register')) {
        // $(this).text('Вход')
        $('.modal__tooltip-text').text('уже есть аккаунт?')
        $('.modal__switcher-title').text('Вход')
    } else {
        // $(this).text('Регистрация')
        $('.modal__tooltip-text').text('нет аккаунта?')
        $('.modal__switcher-title').text('Регистрация   ')
    }
    // Switches the forms
    $('.modal__module').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: "toggle"
    }, "slow");
})

// password show
let passEyes = document.querySelectorAll('.modal__show');
let passwords = document.querySelectorAll('.modal__password');

for (let i = 0; i < passEyes.length; i++) {
    const passEye = passEyes[i];

    passEye.addEventListener('click', function () {

        passEye.classList.toggle('_active');

        let password = passwords[i];
        (password.type == 'password') ? password.type = 'text' : password.type = 'password';
    });
}

// Call modal
$('.modal-btn').magnificPopup({
    type: 'inline',
    preloader: false,
    callbacks: {
        beforeOpen: function() {
            $('body').addClass('mfp-active');
            if($(window).width() < 700) {
                this.st.focus = false;
            } else {
                this.st.focus = '#name';
            }
        },
        beforeClose: function() {
            $('body').removeClass('mfp-active');
        }
    }
});




