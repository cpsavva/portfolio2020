// Variables
 var modalInfo = [
	{
		projectName : 'Cancer Alliance',
		image : 'calogo_modal.png',
		alt : 'Cancer Alliance',
		site : 'https://cancer-alliance.herokuapp.com/',
		des : 'An application created to provide a place for patients of cancer to connect with each other. Users are taken to a dashboard of the specific condition and are provided with support forum, doctor recommendations and the latest news in cancer research.',
		tech : 'HTML5, CSS3, JavaScript, Bootstrap, Node.js, Express.js, MongoDB, React.js, Firebase',
		coll : 'Melissa Shah, Chiara DeLucia, Kevin Lawler, Asha Tadimari',
		role : 'Developer in charge of web-scrapping and Firebase Authentication'
	},

	{
		projectName : 'Got Bored?',
		image : 'gotbored_modal.png',
		alt : 'Got Bored?',
		site : 'https://fam-app-94e72.firebaseapp.com',
		des : 'An application created to help parents and caregivers find activities for their children in their area. Users input their location or location of interest and the app delivers results and map locations tailored for children and their families.',
		tech : 'HTML5, CSS3, JavaScript, Bootstrap, jQuery, Firebase, OAuth, GoogleAPI',
		coll : 'Chiara DeLucia, Melissa Shah, Asha Tadimari',
		role : 'Developer in charge of APIs'
	},
	{
		projectName : 'TrailBlazer',
		image : 'trailblazer_modal.png',
		alt : 'TrailBlazer',
		site : 'https://trailblazer-rcb.herokuapp.com',
		des : 'An application created for hikers exploring the US National Parks.',
		tech : 'HTML5, CSS3, JavaScript, Materialize, Node.js, Express.js, MySQL, Handlebars.js',
		coll : 'Emily Sun, Deepika Vikas, Jonathan Cruz, Smriti Shrestha',
		role : 'Developer in charge of NPS API and MySQL database'
	},
	{
		projectName : 'NPR Scrapping',
		image : 'radio2_modal.jpg',
		alt : 'NPR Scrapping',
		site : 'https://npr-scrape.herokuapp.com',
		des : 'A web-scrapping project that allows the user to save the latest NPR articles to a database and make comments on those saved articles.',
		tech : 'HTML5, CSS3, JavaScript, Bootstrap, Node.js, Express.js, MongoDB, Handlebars.js',
		coll : 'Sole Developer',
		role: 'All Roles'
	}

]


function loadModalInfo(){
		$('.projButton').click(function(){
			console.log('.projButton has been clicked')
			var projName = $(this).data('section');
			var info = modalInfo[projName]
			console.log("projName is: " + projName)
			console.log(modalInfo[projName].projectName)
				$('.modalInfo').html(		        
					'<h2 class="modal-title modalHeading">' + info.projectName + 
					'</h2><div class="row"><div class="col-sm-4 text-center"><img class="img-rounded" src="./assets/css/images/' 
				    + info.image +  '" alt="' + info.alt + 
				    '"><br /><br /><p><a href="' + info.site +
				    '" target="_blank">Website</a></p></div><div class="col-sm-8"><p>' 
				    + info.des +  '</p><h3 class="modalHeading">Technologies</h3><p>' 
				    + info.tech +  '</p><h3 class="modalHeading">Collaborators</h3><p>' 
				    + info.coll +  '</p><h3 class="modalHeading">Role</h3><p>' 
				    + info.role + '</p></div></div>'
				    )
		})
}
$(document).ready(function(){
	loadModalInfo();
})
