$(document).ready(function() {
    // Function to handle window resize
    function handleResize() {
        const windowWidth = $(window).width();

        // If window width is less than 900px, hide the elements
        if (windowWidth < 900) {
            $('.desktop-item').hide();
            $('.mobile-item').show();
        } else {
            // Otherwise, show the elements
            $('.desktop-item').show();
            $('.mobile-item').hide();
        }
    }

    // Initial call to handleResize
    handleResize();

    // Add event listener for window resize
    $(window).resize(handleResize);
});