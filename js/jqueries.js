$(window).scroll(function() { // on scroll, get the browser window and trigger function
    if ( $(this).scrollTop() > 600) {
        // addClass?
        $(".navbar").css('position','fixed');
        $(".navbar").css('top','0');
        $(".navbar").css('width','100%');
    } else {
        $(".navbar").removeAttr('style'); // what is this sorcery
        }
});
