const downloadsBooklets = document.querySelector('#downloads');
const

$('.downloads-btn').click(function() {
    if ($('#downloads').css('display') == 'none') {
        $('#uploads').fadeOut();
        $('#downloads').css("display", 'flex');
    }
    // $('#profile-cart #foot h6').removeClass('selected');
    // $(this).addClass('selected');
});

$('.my-resources-btn').click(function() {
    if ($('#uploads').css('display') == 'none') {
        $('#downloads').fadeOut();
        $('#uploads').css("display", "flex");
    }
    // $('#profile-cart #foot h6').removeClass('selected');
    // $(this).addClass('selected');
});

console.log("hi");