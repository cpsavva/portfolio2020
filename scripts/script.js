// Variables
// Functions
function firstFade() {
    event.preventDefault();
    $('.homePage').fadeOut('slow', () => {
        $('.about').fadeIn('slow');
        setTimeout(() => {
            $("#pulse").addClass("pulsing");
        }, 3000);
 
    });
}

function projectFade() {
    $('.about').fadeOut('slow', () => {
        $('.projects').fadeIn('slow');
    })
}

function resetHome() {
    $('#home').click(() => {
        $('.projects, .about').css('display', 'none');
        $('.homePage').fadeIn('slow');
    })
}


function projectsPage() {
    $('#projects').click(() => {
        $('.about, .homePage').css('display', 'none');
        $('.projects').fadeIn('slow');
    })
}

function aboutPage() {
    $('#about').click(() => {
        $('.projects, .homePage').css('display', 'none');
        $('.about').fadeIn('slow');
        setTimeout(() => {
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
$(document).ready((event) => {
    $('.aboutSec').click(() => {
        firstFade();
    })
    $('.projSec').click(() => {
        projectFade();
    })
    resetHome();
    aboutPage();
    projectsPage();
    width();
})