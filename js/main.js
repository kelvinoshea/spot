(function ($) {
  $(document).ready(function(){
      
      var progressButton = $('.mobileExplanation .progressText').html();
      var guidanceButton = $('.mobileExplanation .guidanceText').html();


    // Initialise the carousel
    $('.iphone .screens').slick({
		
		prevArrow: progressButton,
		nextArrow: guidanceButton,
        infinite: true,
    	speed: 500,
    	fade: true,
    	cssEase: 'linear'
		
    });
      
      /** mobile UI controls **/
	  
	  $('#progress').hover(function(){
		  $('.iphone .screens').slick('slickGoTo', 0);
		  $(this).siblings().removeClass('active');
		  $(this).addClass('active');
	  });
      
      $('#guidance').hover(function(){
		  $('.iphone .screens').slick('slickGoTo', 1);
		  $(this).siblings().removeClass('active');
		  $(this).addClass('active');
	  });


      /** video background plugin init **/
      
      $('#videoBg').vide('video/SpotVideo');
      
      // wow.js init
      
      var wow = new WOW(
          {
              boxClass:     'wow',      // animated element css class (default is wow)
              animateClass: 'animated', // animation css class (default is animated)
              offset:       0,          // distance to the element when triggering the animation (default is 0)
              mobile:       false,       // trigger animations on mobile devices (default is true)
              live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
                },
        scrollContainer: null // optional scroll container selector, otherwise use window
     }
      );
      wow.init();
      
  });
	



	
})(jQuery);