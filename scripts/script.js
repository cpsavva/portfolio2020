// Variables



// Functions
// 

function firstFade() {
    event.preventDefault();
    $('.homePage').fadeOut('slow', function() {
        $('.about').fadeIn('slow');
        setTimeout(function(){
            $("#pulse").addClass("pulsing");
        }, 3000);
 
    });
}

function projectFade() {
    $('.about').fadeOut('slow', function() {
        $('.projects').fadeIn('slow');
    })
}

function resetHome() {
    $('#home').click(function() {
        $('.projects, .about, .contact').css('display', 'none');
        $('.homePage').fadeIn('slow');
    })
}

function contactPage() {
    $('#contact').click(function() {
        $('.projects, .about, .homePage').css('display', 'none');
        $('.contact').fadeIn('slow');
    })
}

function projectsPage() {
    $('#projects').click(function() {
        $('.contact, .about, .homePage').css('display', 'none');
        $('.projects').fadeIn('slow');
    })
}

function aboutPage() {
    $('#about').click(function() {
        $('.contact, .projects, .homePage').css('display', 'none');
        $('.about').fadeIn('slow');
        setTimeout(function(){
            $("#pulse").addClass("pulsing");
        }, 3000);
 
    })
}
function width(){
    $(window).on('resize', function() {
  var win = $(this);
  if (win.width() > 425) {
    console.log('i am less than 425px')
   $('.thumbs').removeClass('justify-content-around');

  }
  });
}


// Executions
$(document).ready(function(event) {
    $('.aboutSec').click(function() {
        firstFade();
    })
    $('.projSec').click(function() {
        projectFade();
    })
    resetHome();
    contactPage();
    aboutPage();
    projectsPage();
    width();

})