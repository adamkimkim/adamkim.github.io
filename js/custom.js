/*
$(window).scroll(function() { // on scroll, get the browser window and trigger function
    if ( $(this).scrollTop() > 600) {
        $(".navbar-fixed-top").css('margin-top','0');
        
    } else {
        $(".navbar-fixed-top").css('margin-top',600-$(this).scrollTop());
        //$(".navbar-fixed-top").removeAttr('style'); // what is this sorcery
        }
});


$(document).ready(function(){
    $(".landing-page").css('min-height',$(window).height());
    $("#landing-page-cover").css('min-height',$(window).height());
}
*/

$('.carousel').carousel()
