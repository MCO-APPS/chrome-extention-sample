(function($){
	$(function(){
		var randomDegrees = function(min, max){
			return Math.floor((Math.random() * ((max + 1) - min)) + min);
		}
		
		$('a').each(function(){
			var deg = randomDegrees(-10, 10);
			$(this).css({
				'display': 'inline-block',
				'transform': 'rotate(' + deg + 'deg)'
			});
		});
	});
})(jQuery);