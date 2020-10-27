$('.logon__switcher').click(function(){
    // Switches the Icon
    $(this).children('.logon__tooltip').toggleClass('register');
    // Switches the forms
    $('.logon__module').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: "toggle"
    }, "slow");
})
