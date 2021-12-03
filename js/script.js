$(document).ready(function() {

    $('#addactive').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active')
        $('.header-collapse').toggleClass('active')
        $('#header').toggleClass('active')
    });

    $('#fixd-header').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active')
        $('.header-collapse').toggleClass('active')
        $('#fixd-header').toggleClass('active')
    });
    $('#fixd-header').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active')
        $('.header-collapse').toggleClass('active')
        $('#fixd-header').toggleClass('active')
    });

});


new Vivus('cog1', {
    duration: 100,
    type: 'sync'
})
new Vivus('cog2', {
    duration: 200,
    type: 'sync'
})
new Vivus('cog3', {
    duration: 250,
    type: 'sync'
});


$(document).ready(function() {
    $(".counter").counterUp({
        delay: 10,
        time: 1200
    });
});

jQuery(document).ready(function($) {

    // FIXED HEADER
    window.onscroll = function() {
        if (window.pageYOffset > 100) {
            $(".cor").addClass("fixd");
        } else {
            $(".cor").removeClass("fixd");
        }
    };

});