(function(){


$('.filters > ul > li').on('click', function(e){
	e.preventDefault();

	$('.filters > ul > li').removeClass('active');
	$(this).addClass('active');
});


})(jQuery);