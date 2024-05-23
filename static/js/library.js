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

$("#lib-search").keyup(function () {
    $(".booklet-cards-container .booklet-card").hide()
    $(".booklet-cards-container .booklet-card").each(function() {
        $(this).children(".card-details").children().each(function() {
            if ($(this).text().includes($("#lib-search").val())) {
                $(this).parent().parent().show();
            }
        })
    });
});

$("button.drop").click(function () {
    $(this).next().show();
    $(this).prev().addClass('blur');
    $(this).css("opacity", "1");
});

window.addEventListener('click', function(e) {
    $(".card-btns").each( function () {
        if (this != e.target && ! this.contains(e.target) && ! $(e.target).parent().hasClass('drop')) {
            $(this).hide();
            $(this).parent().find('.card-details').removeClass('blur');
            $(this).parent().find('.drop').css('opacity', "0.5");

        }
    });
});
