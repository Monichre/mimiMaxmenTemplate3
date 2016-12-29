jQuery(function($) {
    "use strict";

	
	$('#galleryki').justifiedGallery({rowHeight :400,lastRow : 'justify',captions: false,margins : 0});
	$(window).on('load', function() {setTimeout(function() {$('#loading').fadeOut('slow', function() {});}, 3000);});
	new WOW().init();
	$('ul.navigation li').each(function(index){$(this).attr('data-wow-duration', 0.1 + (0.2 * index) + 's');$(this).attr('data-wow-delay', (0.1 * index) + 's');});


	var $lateral_menu_trigger = $('.nav-trigger'),
	$content_wrapper = $('.main');

	//open-close lateral menu clicking on the menu icon
	$lateral_menu_trigger.on('click', function(event){
		event.preventDefault();

		$lateral_menu_trigger.toggleClass('is-active');
		$content_wrapper.toggleClass('is-active').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			// firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
			$('body').toggleClass('overflow-hidden');
		});
		$('#nav-menu').toggleClass('is-active');
		$('body').toggleClass('overflow-hidden');
		
		
	});

	//close lateral menu clicking outside the menu itself
	$content_wrapper.on('mouseover', function(event){
		if( !$(event.target).is('.nav-trigger, .nav-trigger span') ) {
			$lateral_menu_trigger.removeClass('is-active');
			$content_wrapper.removeClass('is-active').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').removeClass('overflow-hidden');
			});
			$('#nav-menu').removeClass('is-active');
			//check if transitions are not supported
			if($('html').hasClass('no-csstransitions')) {
				$('body').removeClass('overflow-hidden');
			}

		}
	});


});

