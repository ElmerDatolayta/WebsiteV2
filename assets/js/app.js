"use strict";

$(function () {
    
    //Navbar scripts
    function collapseNavbar() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else if(!$(".navbar-toggle").hasClass("active")) {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    }

    $(window).scroll(collapseNavbar);
    $(document).ready(collapseNavbar);

    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
        if($(this).hasClass("active")){
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        }
        else if($(".navbar").offset().top <= 50){
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });


    //Slick scripts
    $('.banner-background-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade : true,
        arrows : false,
        speed : 1000,
        autoplay: true,
        autoplaySpeed: 8000,
        dots :true
    });
    

    $('a.nav-link').click(function(e){
    // prevent default action
        e.preventDefault();
        scrollToElement( $(this).attr('href'), 1000 );
    });

    var scrollToElement = function(el, ms){
        var speed = (ms) ? ms : 600;
        $('html,body').animate({
            scrollTop: $(el).offset().top
        }, speed);
    };

});