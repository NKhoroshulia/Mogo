$(function() {

    let header = $("#header");
    let introH = $("#intro").innerHeight();
    let scrolloffset = $(window).scrollTop();

    /* fixed Header */

    checkScroll(scrolloffset);

    $(window).on("scroll", function(){
        
        scrolloffset = $(this).scrollTop();

        checkScroll(scrolloffset);

    });

    function checkScroll(scrolloffset) {

        if (scrolloffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth scroll */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let blockId = $this.data('scroll');
        let blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });


    /* Menu nav toggle */

    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    /* Collapse */

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let blockId = $this.data('collapse');

        $this.toggleClass("active");
        /*$(blockId).slideToggle();*/ 
    });

    /* Slider */

    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    

});