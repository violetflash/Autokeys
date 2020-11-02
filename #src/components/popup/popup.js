///MODAL LOGIN-REGISTER

$('.top-header__login').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '.logon__login',
    closeOnBgClick: false,

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

// Switching Login to Register
$('.logon__switcher').click(function () {
    // Switches the Icon
    $(this).toggleClass('_register');

    if ($(this).hasClass('_register')) {
        // $(this).text('Вход')
        $('.logon__tooltip-text').text('уже есть аккаунт?')
        $('.logon__switcher-title').text('Вход')
    } else {
        // $(this).text('Регистрация')
        $('.logon__tooltip-text').text('нет аккаунта?')
        $('.logon__switcher-title').text('Регистрация   ')
    }
    // Switches the forms
    $('.logon__module').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: "toggle"
    }, "slow");
})

// password show
let passEyes = document.querySelectorAll('.logon__show');
let passwords = document.querySelectorAll('.logon__password');

for (let i = 0; i < passEyes.length; i++) {
    const passEye = passEyes[i];

    passEye.addEventListener('click', function () {

        passEye.classList.toggle('_active');

        let password = passwords[i];
        (password.type == 'password') ? password.type = 'text' : password.type = 'password';
    });
}

// Call modal
$('.hero__btn').magnificPopup({
    type: 'inline',
    preloader: false,
});

// Call-request modal
$('.call__btn').magnificPopup({
    type: 'inline',
    preloader: false,
});






