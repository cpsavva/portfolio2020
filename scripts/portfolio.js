// Variables
var divInfo = [
{
	section : 'about',
	heading : '<h2>About Me</h3><br/>',
	description : '<p class="ptags">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>',
	nextsection : '<br/><h4 class="projSec">Projects</h4>'
},{
	section : 'contact',
	heading : '<h2>Contact Me</h3><br/>',
	description : '<p class="ptags>"Please fill out the form below and I will get back to you within 48 hours. Thank you"</p>',
	nextsection : '<form><label for="fname">First name:</label><br><input type="text" id="fname" name="fname" value="John"><br><label for="lname">Last name:</label><br><input type="text" id="lname" name="lname" value="Doe"><br><br><input type="submit" value="Submit"></form>'
}
]

var pT = [
	{
		section: 0,
		image: 'gotboredWhite.png',
		alt: 'Got Bored?'
	},
	{
		section: 1,
		image: 'calogo.png',
		alt: 'Cancer Alliance'
	},	
	{
		section: 2,
		image: 'trailblazer.png" id="trail',
		alt: 'Trailblazer'
	},
	{
		section: 3,
		image: 'radio2.jpg',
		alt: 'NPR Scrape'
	},


]
var pTArr = [];
// // Functions
function loadHome(){
	$('.homeSec').click(function(){
		location.reload();
	})
}
function loadAboutInfo(){
	$('.aboutSec').click(function(){
		var section = $(this).data('section');
		var divSect = divInfo[section]
		console.log('I got clicked ' + section);
		$('#home').hide();
		$('#mainDiv').html(
			divSect.heading + divSect.description + divSect.nextsection
			)
	});

}

function loadProjectInfo(){
	$('.projSec').click(function(){
		
		$('#home').hide();
		console.log('I have been clicked')
		for (let i = 0; i < pT.length; i++){
			console.log(pT[0].section)
			pTArr.push('<div class="col-sm-6 col-md-4">' + 
				'<div class="thumbnail"><img class="img-rounded img-fluid" src="./assets/css/images/'
				+ pT[i].image + '" alt="' 
				+ pT[i].alt + '"/></div></div>')
			var cleanPT = pTArr.join('')
		}

		// $('#mainDiv').html('<div class="row">'+ cleanPT + '</div>');
		$('#mainDiv').html('<div class="col-sm-6 col-md-4">' + 
				'<div class="thumbnail ><button class="projButton" data-toggle="modal" data-target="#projectModal" data-section="'
				+ pT[0].section +'">'+ pT[0].alt+ '</button><img class="img-rounded img-fluid" src="./assets/css/images/'
				+ pT[0].image + '" alt="' 
				+ pT[0].alt + '"/></div></div>');

	});
}

function loadContactInfo(){
	$('.conSec').click(function(){
		var section = $(this).data('section');
		var divSect = divInfo[section]
		var loadfunc = 		$('#mainDiv').html(
			divSect.heading + divSect.description  + divSect.nextsection
			)
		console.log('I got clicked ' + section);
		$('#home').hide('slow', loadfunc);

	});
}

// Executions
$(document).ready(function() {
	loadAboutInfo();
	loadContactInfo();
	loadProjectInfo();
	loadHome();
});