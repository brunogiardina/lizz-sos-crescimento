$('.purchase-link').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset
    }, 500);
});

$('.contagem').each(function() {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});