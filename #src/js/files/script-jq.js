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
    }).on("select2:open", function (e) {
        $('.select2-results__options').niceScroll({
            cursorcolor: "#ff8200",
            cursorwidth: "5px",
            autohidemode: false,
            smoothscroll: true,
            cursorborder: "none",
            horizrailenabled: false,
        });
    }).on('select2:open', function(e){
        $('.select2-search input').attr('readonly',true);
    });

    $('body').on('click', '.select2-search input', function(){
        $(this).attr('readonly',false);
    });


@@include('../../components/header/header.js', {})
@@include('../../components/popup/popup.js', {})

});