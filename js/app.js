$(document).ready(function(){
	                            
	$('.ryu').mouseenter(function() {
	$('.ryu-still').hide();
	$('.ryu-cool').hide();
	$('.ryu-ready').show();

	})
	.mouseleave(function() {
		$('.ryu-cool').hide();
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	
	})
	.mousedown(function(){
		playHadouken();
		// $('.ryu-still').hide();
		// $('.ryu-cool').hide();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function(){
				$('.hadouken').hide();
				$('.hadouken').css('left', '520px');
			});
		//animate hadouken to the right of the screen
	})

		.mouseup(function(){
		$('.ryu-throwing').hide();
		$('ryu-cool').hide();
		$('.ryu-ready').show();
	})

		$(document).keydown(function(e) {
			if (e.keyCode === 88) {
				$('.ryu-still').hide();
				$('.ryu-ready').hide();
				$('.ryu-cool').show();
			};

		})
			
		.keyup(function(e) {
			if (e.keyCode === 88) {
				$('.ryu-still').show();
				$('.ryu-ready').hide();
				$('.ryu-cool').hide();
			};

		});
});

function playHadouken () {

		$('#hadouken-sound')[0].volume = 0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}






























