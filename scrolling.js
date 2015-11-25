
var scrollMonitor = function() {
	var scrolled = $(window).scrollTop();

	$(window).scroll(function(){
		console.log(scrolled);
	});
}


jQuery(document).ready(function($) {

	$(window).bind('scroll',function(e){
	        scrollMonitor();
	    });

});