(function($) {
    "use strict";
    
    
    $(document).ready(function(){
        
        /*----------------------------------------------------*/
        /*  Preloader
        /*----------------------------------------------------*/
        $(".preloader").fadeOut();

        /*----------------------------------------------------*/
        /*  Main Slider
        /*----------------------------------------------------*/
        $('.home_slider').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            autoplay:true,
            dots: false,
            navText: [
              "<span class='lnr lnr-chevron-left'></span>",
              "<span class='lnr lnr-chevron-right'></span>"
              ],
            items: 1,
            autoplaySpeed: 1600,
            navSpeed: 1600
        });

        // $(window).trigger('resize');

        // /*----------------------------------------------------*/
        // /*  Find Domain Form Dropdown
        // /*----------------------------------------------------*/
        // $('.domain_search_drop').on("click",function(){
        //     $(this).toggleClass('rotate')
        // });
        
		  /*----------------------------------------------------*/
        /*  Fix Navigation
        /*----------------------------------------------------*/
		
		$(".navbar-default").affix({
        offset: {
            top: $('.top_header').height()
        	}
    	});
		
        
        /*----------------------------------------------------*/
        /*  Project Slideshow
        /*----------------------------------------------------*/
        $('.pricing_plan').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            autoplay:true,
            navContainer: "#pricing_nav",
            navText: [
              "<span class='lnr lnr-arrow-left'></span>",
              "<span class='lnr lnr-arrow-right'></span>"
              ],
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    center: true
                },
                992:{
                    items:3,
                    center: true
                }
            }
        });
        
        
        /*----------------------------------------------------*/
        /*  Pricing Slider
        /*----------------------------------------------------*/        
        $('.pricing_slider').owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            dots: true,
            autoplay:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                700:{
                    items:2
                },
                992:{
                    items:3
                },
                1501:{
                    items:4
                }
            }
        });
        
        
        /*----------------------------------------------------*/
        /*  Testimonial Slider
        /*----------------------------------------------------*/        
        $('.testimonial_slider').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            navText: [
              "<span class='lnr lnr-arrow-left'></span>",
              "<span class='lnr lnr-arrow-right'></span>"
              ],
            autoplay:true,
            items: 1
        });      
        $('.testimonial_slider2').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            navText: [
              "<span class='lnr lnr-arrow-left'></span>",
              "<span class='lnr lnr-arrow-right'></span>"
              ],
            autoplay:true,            
            responsive:{
                0:{
                    items:1
                },
                800:{
                    items:2
                }
            }
        });
        
        /*----------------------------------------------------*/
        /*  Counter Up - Fun Facts
        /*----------------------------------------------------*/
        $('.fact strong').counterUp({
            delay: 10,
            time: 1000
        });
        
        /*----------------------------------------------------*/
        /*  Counter Up - Fun Facts
        /*----------------------------------------------------*/
        $('.we_used .progress-bar').each(function(){
            var $this = $(this);
            var width = $(this).data('skill');
            $this.css({
                'transition' : 'width 2s'
            });
            
            setTimeout(function() {
                $this.waypoint(function(direction) {
                    if( direction === 'down' ) {
                        $this.css({
                            'width' : width + '%'
                        })
                    }
                } , { offset: '100%' } )
            }, 500)
        });
        
        /*----------------------------------------------------*/
        /*  PopUps
        /*----------------------------------------------------*/
        $('.portfolio-link').magnificPopup({
            type: 'image'
        });

        $('.video').magnificPopup({
            type: 'iframe'
        });

        /*----------------------------------------------------*/
        /*  Contact Form Height
        /*----------------------------------------------------*/
        $('#success, #error').each(function(){
            var line_height = $(this).height();
            $(this).find('p').css( "line-height", function(){
                return line_height + 'px'
            })
        })
        
    })
    
})(jQuery)

