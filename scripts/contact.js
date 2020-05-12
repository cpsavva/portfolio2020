// Firebase Config
var firebaseConfig = {
    apiKey: "AIzaSyCsFwyKIvVZgud2n-A8UcuYSushdS_iERc",
    authDomain: "soriasavva-contact.firebaseapp.com",
    databaseURL: "https://soriasavva-contact.firebaseio.com",
    projectId: "soriasavva-contact",
    storageBucket: "soriasavva-contact.appspot.com",
    messagingSenderId: "336671080064",
    appId: "1:336671080064:web:8a760f89a0c7e740fbb065",
    measurementId: "G-3NBQMNBVN2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

// creating database for messages

var messagesRef = firebase.database().ref("messages");



function submitForm(){
// Listener
 $("form").submit(function(e){
  	e.preventDefault();
    console.log('123')
  
  // Collect Values
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    // 
    // saveMessages(name, email, message);
    $('.alert').css("visibility", "visible");
    
    setTimeout(function(){
    // 	$(".alert:visible").hide("slow");
    $('.alert').css("visibility", "hidden");
    }, 3000);

    // reset form
  	$('input').val("");
  	$('textarea').val("");

  });

};


//Saving Messages
function saveMessages(name, email, message){

	var pushNewMessage = messagesRef.push();

	pushNewMessage.set({
		name: name,
		email: email,
		message: message

	});

}










// Executions


$(document).ready(function(){
	submitForm();

});