
$('.top-header__select').select2({
    minimumResultsForSearch: Infinity
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
