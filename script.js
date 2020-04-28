// Variables



// Functions
// 

function firstFade(){
		event.preventDefault();
		$('.homePage').fadeOut('slow', function(){
			$('.about').fadeIn('slow');	
		});
}
function projectFade(){
	$('.about').fadeOut('slow', function(){
		$('.projects').fadeIn('slow');
	})
}

function resetHome(){
	$('#home').click(function(){
		$('.projects').css('display', 'none');
		$('.about').css('display', 'none');
		$('.contact').css('display', 'none');
		$('.homePage').fadeIn('slow');
	})
}
function contactPage(){
	$('#contact').click(function(){
		$('.projects').css('display', 'none');
		$('.about').css('display', 'none');
		$('.homePage').css('display', 'none');
		$('.contact').fadeIn('slow');
	})
}
function projectsPage(){
	$('#contact').click(function(){
		$('.projects').css('display', 'none');
		$('.about').css('display', 'none');
		$('.homePage').css('display', 'none');
		$('.contact').fadeIn('slow');
	})
}

// Executions
$(document).ready(function(event){
	$('.aboutSec').click(function(){
		firstFade();
	})
	resetHome();
	contactPage();
	$('.projSec').click(function(){
		projectFade();
	})
	

})