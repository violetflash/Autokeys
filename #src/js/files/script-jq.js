$(function() {


    $('.filter__select').select2({
        width: "100%",
        allowClear: true,
        searchInputPlaceholder: 'Поиск'
    }).on('select2:unselecting', function() {
        $(this).data('unselecting', true);
    }).on('select2:opening', function(e) {
        if ($(this).data('unselecting')) {
            $(this).removeData('unselecting');
            e.preventDefault();
        }
    }).on("select2:open", function () {
        $('.select2-results__options').niceScroll({
            cursorcolor: "#ff8200",
            cursorwidth: "5px",
            autohidemode: false,
            smoothscroll: true,
            cursorborder: "none",
            horizrailenabled: false,
        });
    });
});