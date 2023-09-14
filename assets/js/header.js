$(document).ready(function(){
    
    var showHeaderAt = 150;

    var win = $(window),
            body = $('body');

    // Mostra o header fixo apenas em telas grandes
    if(win.width() > 400){

        // When we scroll more than 150px down, we set the
        // "fixed" class on the body element.

        win.on('scroll', function(e){

            if(win.scrollTop() > showHeaderAt) {
                body.addClass('fixed');
            }
            else {
                body.removeClass('fixed');
            }
        });

    }

});