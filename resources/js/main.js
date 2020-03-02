$(document).ready(function(){
    //sticky menu
    $(".js--services-section").waypoint(function(direction){
        if (direction == "down"){
            $("nav").addClass("sticky");

        } else {
            $("nav").removeClass("sticky");

        }

    }); 

    //mixitup (portfolio)
    var mixer = mixitup ('.content-work')
    
    //Smooth Scroll for IE/Edge/Safari

    $("a").on('click', function(event){

        if (this,hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
            window.location.hash = hash;
        });
    }
});

});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
