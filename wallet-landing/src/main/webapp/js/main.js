$(document).ready(function() {
	
	//initializing slick carousel
    $('#market-slider').slick({
      nextArrow: document.getElementById('market-next-arrow'),
      prevArrow: document.getElementById('market-prev-arrow'),
      centerMode: true,
      slidesToShow: 2,
      variableWidth:true,
      arrows:true,
      
    });

    $('#notification-slider').slick({
        nextArrow: document.getElementById('notification-next-arrow'),
        prevArrow: document.getElementById('notification-prev-arrow'),
        centerMode: true,
        variableWidth:true,
        slidesToShow: 2,
        arrows:true,
        
      });

    $('#multi-coin-slider').slick({
        nextArrow: document.getElementById('multi-coin-next-arrow'),
        prevArrow: document.getElementById('multi-coin-prev-arrow'),
        centerMode: true,
        variableWidth:true,
        slidesToShow: 2,
        /*infinite: false,*/
        arrows:true,
        
      });
    
    $('#card-slider').slick({
        nextArrow: document.getElementById('card-next-arrow'),
        prevArrow: document.getElementById('card-prev-arrow'),
        centerMode: true,
        variableWidth:true,
        slidesToShow: 2,
        
        arrows:true,
        
      });
    
    
    //navbar shadow on scroll
    var nav = $('.lunes-nav'); // Change to nav div
    var nav_class = 'lunes-nav-shadow'; // Change to class name
    var threshold = 100; // Change to pixels scrolled

    $(window).scroll(function () {
        var distance = $(this).scrollTop();
        if (distance > threshold) { // If scrolled past threshold
            nav.addClass(nav_class); // Add class to nav
        } else { // If user scrolls back to top
            if (nav.hasClass(nav_class)) { // And if class has been added
                nav.removeClass(nav_class); // Remove it
            }
        }
    });
   
    //smooth scroll
    $(".nav-link").on('click', function(event) {
    	  var target = this.hash;

    	  event.preventDefault();

    	  var navOffset = $('.lunes-nav').height();
    	  navOffset += 40;
    	  
    	  //we have to adjust for expanded nav
    	  if(navOffset > 150){
    		  navOffset = 52;
    	  }
    	  
			$('.nav-link').removeClass('active');
		    $(this).addClass('active');
    	  
    	  return $('html, body').animate({
    	    scrollTop: $(this.hash).offset().top - navOffset
    	  }, 500, function() {
    	    return window.history.pushState(null, null, target);
    	  });
    	});
    
    
    //replacing arrow images with svg data allow us to modify svg content and apply a drop shadow effect
    jQuery('img.arrow').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
    
  //initializing tooltip
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip({
        	container: 'body'
        }); 
    });
    
});

//manual carousel code on card
function slideCard(element, index){
	var slider = $( '#card-slider' );
	slider[0].slick.slickGoTo(index);
	
	$('.card-product').find('span').removeClass('card-active');
	$(element).addClass('card-active');
}
