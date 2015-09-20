$(function(){
			$("img").click((function() {
			    var i = 0;
			    return function(){
			        $(this).animate({width:(++i % 2) ? $(window).width() : 400},200);
			        console.log($(this).offset().top);
			    	$('html, body').animate({scrollTop: $(this).offset().top,scrollLeft: $(this).offset().left}, "slow");
			    }

			})());
		});