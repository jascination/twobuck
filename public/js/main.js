$(function(){
	$('.tbbtn').click(function(){
		var modal = $(this).attr('data-modal');

		$('#' + modal).addClass('md-show')
	});

	$('.md-close').click(function(){
		$('.md-show').removeClass('md-show');
	});

	$('.md-overlay').click(function(){
		$('.md-show').removeClass('md-show');
	})
});