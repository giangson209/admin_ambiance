
$(document).ready(function(){
	// if($(window).innerWidth() < 1024){})

	$('.slide-under').slick({
		autoplay:true,
		arrow:false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		nextArrow: '',
		prevArrow: '',
	});

	$('.clc-tab').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.clc-tab').removeClass('active');
		$('.tab-content').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	})

})

