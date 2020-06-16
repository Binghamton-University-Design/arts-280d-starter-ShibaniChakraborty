$ (document).ready(function() {
var $hamburger = $(".hamburger");
	$hamburger.on("click", function(e) {
		$hamburger.toggleClass("is-active");
			$('#nav').toggleClass('active');
});

});