$(document).ready(function(){
	// Set Options
	
	var speed = 500;				// Fade Speed
	var autoswitch = true;			// Auto Slider Option
	var autoswitch_speed = 4000;	// Auto Slider Speed
	
	// Add initial active class
	
	$('.slide').first().addClass('active');
	
	// Hide all slides
	
	$('.slide').hide();
	
	// Show first slide
	
	$('.active').show();
	
	// Fade between slides
	
	$('#next').on('click', nextSlide)
	
	$('#prev').on('click', prevSlide)
	
	// Auto Slider Handler
	
	if(autoswitch == true){
		setInterval(nextSlide, autoswitch_speed);
		
	}
	
	// Switch to the next slide
	
	function nextSlide(){
		$(".active").removeClass("active").addClass("oldActive");
		
		if($('.oldActive').is(":last-child")){
			$(".slide").first().addClass("active");
		} else{
			$('.oldActive').next().addClass("active");
		}
		
		$('.oldActive').removeClass("oldActive");
		$(".slide").fadeOut(speed);
		$(".active").fadeIn(speed);
	}
	
	// Switch to the previous slide
	
	function prevSlide(){
		$(".active").removeClass("active").addClass("oldActive");
		
		if($('.oldActive').is(":first-child")){
			$(".slide").last().addClass("active");
		} else{
			$('.oldActive').prev().addClass("active");
		}
		
		$('.oldActive').removeClass("oldActive");
		$(".slide").fadeOut(speed);
		$(".active").fadeIn(speed);
	}
});
	