const here = window.location.pathname;
Cookies.set('searched', window.location.href.split(here)[1]);

function page_back() {
    const here = window.location.pathname;
    const queries = window.location.href.split(here)[1];
    window.location.href = "../search/" + queries;
}