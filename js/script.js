$(document).ready(function(){
 
     var owl = $("#owlCarouselWithArrows");

       // Custom Navigation Events
    $(".owl-carousel-arrows .next").click(function() {
        owl.trigger('owl.next');
    });
    
    $(".owl-carousel-arrows .prev").click(function() {
        owl.trigger('owl.prev');
    });



    $('.owl-carousel').owlCarousel({
        navText: [
      "<i class='glyphicon glyphicon-chevron-left icon-white' ></i>",
      "<i class='glyphicon glyphicon-chevron-right icon-white'></i>"
      ],
        nav:true,
        loop:true,
        lazyload: true,
        margin:50,
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }

 
  

});
});
