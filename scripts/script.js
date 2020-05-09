// Variables



// Functions
// 

function firstFade() {
    event.preventDefault();
    $('.homePage').fadeOut('slow', function() {
        $('.about').fadeIn('slow');
    });
}

function projectFade() {
    $('.about').fadeOut('slow', function() {
        $('.projects').fadeIn('slow');
    })
}

function resetHome() {
    $('#home').click(function() {
        $('.projects').css('display', 'none');
        $('.about').css('display', 'none');
        $('.contact').css('display', 'none');
        $('.homePage').fadeIn('slow');
    })
}

function contactPage() {
    $('#contact').click(function() {
        $('.projects').css('display', 'none');
        $('.about').css('display', 'none');
        $('.homePage').css('display', 'none');
        $('.contact').fadeIn('slow');
    })
}

function projectsPage() {
    $('#projects').click(function() {
        $('.contact').css('display', 'none');
        $('.about').css('display', 'none');
        $('.homePage').css('display', 'none');
        $('.projects').fadeIn('slow');
    })
}
// SOMETHING IS UP WITH THIS FUNCTION!!!!!!!!
function aboutPage() {
    $('#about').click(function() {
        $('.contact').css('display', 'none');
        $('.projects').css('display', 'none');
        $('.homePage').css('display', 'none');
        $('.about').fadeIn('slow');
    })
}

// modal animation
function animate(){
$(".modal").each(function(l) {
    $(this).on("show.bs.modal", function(l) {
        var o = $(this).attr("data-easein");
        "shake" == o ? $(".modal-dialog").velocity("callout." + o) : "pulse" == o ? $(".modal-dialog").velocity("callout." + o) : "tada" == o ? $(".modal-dialog").velocity("callout." + o) : "flash" == o ? $(".modal-dialog").velocity("callout." + o) : "bounce" == o ? $(".modal-dialog").velocity("callout." + o) : "swing" == o ? $(".modal-dialog").velocity("callout." + o) : $(".modal-dialog").velocity("transition." + o)
    })
});
};






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
    animate();

})