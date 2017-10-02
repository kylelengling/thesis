$(document).ready(function(){

	$("#scrollarrow").click(function() {  // #scrollarrow is the button that starts the scroll
    	$('html, body').animate({
        	scrollTop: $("#home").offset().top // #home is destination of scroll
    	}, 1000);  // you can adjust "900" to change speed of scroll
	});
});

$(function(){
	$('#mix_grid_container').mixItUp();	
});

// fade in fade out scroll arrow. dependant on document y value. revist/test on multiple browser sizes.
$(document).scroll(function(){
	
	var y = $(document).scrollTop();	

	if (y > 250) {
		$("#arrow").fadeOut();
	}

	else {
		$("#arrow").fadeIn();
	}

	if (y > 950) {
		$("#splashimage").css('display', 'none')
	}
});

// hover hide/show filter bar

(function(){
	var del = 200;

$('.filterbar').hide().prev('a').hover(function(){
 	$(this).next('.filterbar').stop('fx', true).slideToggle(del);
      });
    })();
