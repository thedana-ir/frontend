$('.downloads-btn').click(function() {
    if ($('#downloads').css('display') === 'none') {
        $('#uploads').fadeOut(function () {
            $('#downloads').css("display", 'flex');            
        });
    }

    $('.my-resources-btn').removeClass('selected-btn');
    $('.my-resources-btn').addClass('unselected-btn');

    $(this).removeClass('unselected-btn');
    $(this).addClass('selected-btn');
});

$('.my-resources-btn').click(function() {
    if ($('#uploads').css('display') === 'none') {
        $('#downloads').fadeOut(function () {
            $('#uploads').css("display", "flex");            
        });
    }

    $('.downloads-btn').removeClass('selected-btn');
    $('.downloads-btn').addClass('unselected-btn');

    $(this).removeClass('unselected-btn');
    $(this).addClass('selected-btn');
});
