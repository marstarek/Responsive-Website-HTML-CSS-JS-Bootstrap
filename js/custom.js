$(document).ready(function() {
    "use strict";
    $(window).scroll(function() {
        "use strict";
        if ($(window).scrollTop() < 80) {
            $(".navbar").css({
                "margin-top": "-100px",
                opacity: "0",
            });
            $(".navbar-light").css({
                "background-color": "#ffc900ba",
            });
        } else {
            $(".navbar").css({
                "margin-top": "0px",
                opacity: "1",
            });
            //   $(".navbar-brand img").css({
            //       height: "35px",
            //       "padding-top": "0px",
            //   });
            //   $(".navbar-nav>li>a").css({
            //       "padding-top": "15px",
            //   });
        }
    });
});

/* active menu item on click */
$(document).ready(function() {
    "use strict";

    $(".navbar-nav li a").click(function() {
        "use strict";

        $(".navbar-nav li a").removeClass("active");

        $(this).addClass("active");
    });
});
$(document).ready(function() {
    $(".slider").bxSlider({
        slideWidth: 292.5,
        auto: true,
        minSlides: 1,
        maxSlides: 3,
        slideMargin: 50,
    });
});

$(document).ready(function() {
    $(".counter-num").counterUp({
        delay: 20,
        time: 2000,
    });
});

// Add animation/ Initialize Woo
$(document).ready(function() {
    "use strict";

    new WOW().init();
});