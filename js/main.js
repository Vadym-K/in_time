$(function(){
	$(".btn_menu").on('click', function(){
		var $this = $(this).parents(".navigation");

		if($this.hasClass("open")){
			$this.removeClass("open");
		} else {
			$this.addClass('open');
		}
	});
	 $(".wrapper").on('click', function(event) {
		if(!$(event.target).closest('.navigation, .btn_menu').length) {
			if($(".navigation").hasClass('open')) {
				$(".navigation").removeClass('open');
			}
		}
	});
});