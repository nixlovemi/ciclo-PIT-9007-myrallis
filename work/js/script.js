$( document ).ready(function() {
    $("div.button").on("click", function() {
        let id = $(this).data('id');
        
        // hide pages
        $('div.page').hide();

        // show the clicked page
        $(`#dv-${id}`).fadeIn(300);
    });
});