

/* fix vertical when not overflow
	call fullscreenFix() if .fullscreen content changes */

function fullscreenFix(){
	var h = $('body').height();
	// set .fullscreen height
	$(".content-b").each(function(i){
											 if($(this).innerHeight() > h) {
											 $(this).closest(".fullscreen").addClass("overflow");
											 }
											 });
}

$(window).resize(fullscreenFix);
$(document).ready(fullscreenFix);
fullscreenFix();

/* resize background images */

function backgroundResize() {
	var winH = $(window).height();
	$(".bg").each(function(i){
								var path = $(this);
								// variables
								var contW = path.width();
								var contH = path.height();
								var imgW = path.attr("data-img-width");
								var imgH = path.attr("data-img-height");
								var ratio = imgW / imgH;
								
								// overflowing difference
								var diff = parseFloat(path.attr("data-diff"));
								diff = diff ? diff : 0; // TODO what
								
								// remaining height to have fullscreen image only on parallax
								var remainingH = 0;
								if(path.hasClass("parallax")){
								var maxH = contH > winH ? contH : winH;
								remainingH = winH - contH;
								}
								
								// set img values depending on cont
								imgH = contH + remainingH + diff;
								imgW = imgH * ratio;
								
								// fix when too large
								if (contW > imgW){
								imgW = contW;
								imgH = imgW / ratio;
								}
								
								path.data("resized-imgW", imgW);
								path.data("resized-imgH", imgH);
								path.css("background-size", imgW + "px " + imgH + "px");
								});
}

$(window).resize(backgroundResize);
$(window).focus(backgroundResize);
backgroundResize();
$(document).ready(backgroundResize);


