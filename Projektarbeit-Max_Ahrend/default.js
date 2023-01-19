	// JavaScript Document
	/*-----------------Pfeil nach oben--------------- */
	$(document).ready(function(){
		$(window).scroll(function(){
			if($(window).scrollTop() > 200){
				$('.back-top').fadeIn(1000);
			}else{
				$('.back-top').fadeOut(1000);
			}
		});
			$('.back-top a').click(function(){
				$('html,body').animate({scrollTop:0},1000);
				return false;
			});
	});

		
		/* jQuery für lightbox */

		$(document).ready(function(){

    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
	  'albumLabel': "Foto %1 von %2"
    })
		});
