
// Slider comments

 var $status = $('.pagingInfo');
 var $slickElement = $('.comment__cont');

 $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
     //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
     var i = (currentSlide ? currentSlide : 0) + 1;
     $status.text(i + '/' + slick.slideCount);
 });

 $slickElement.slick({
     slidesToShow: 3,
     responsive: [
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }},
         {
        breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }}
    ]
 });



// Header scroll

$(window).scroll(function(event) {
    if($(this).scrollTop() > 100) {
        $(".menu").addClass('go')
        $(".face").addClass('face__go')
        return false;
    }
    else {
        $(".menu").removeClass('go')
        $(".face").removeClass('face__go');
    }
}); 

// Menu Open
    $('.menu__burger').click(function() {
        $('.menu__fon').addClass('d-block');

    })
    $('.menu__close').click(function() {
          $('.menu__fon').removeClass('d-block');
        })