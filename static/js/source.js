function page_back() {
    queries = Cookies.get('searched');
    if (queries) {
        window.location.href = "../" + queries;
    } else {
        window.location.href = "../../search/";
    }
}

$( document ).ready(function() {
    $(".lazy").lazy();
});

$("#buy-btn a").click(function () {
    window.scrollTo(0, 0);
    $("#please-vote").fadeIn();    
});