$(document).ready(function () {

    function viewport() {
        var e = window,
            a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return {
            width: e[a + 'Width'],
            height: e[a + 'Height']
        };
    }

    // Get the correct window sizes with these declarations
    var windowHeight = viewport().height;
    var windowWidth = viewport().width;

    $(window).on("resize", function () {
        windowHeight = viewport().height;
        windowWidth = viewport().width;
    });

    // DESKTOP SLIDING BAR
    $(window).scroll(function () {
        var hT = $('#register').offset().top,
            hH = $('#register').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hH + hT)) {
            $('.navBarSlider').addClass('slided');
        } else {
            $('.navBarSlider').removeClass('slided');
        }
    });
});