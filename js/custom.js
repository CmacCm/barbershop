$(function(){

	$('.div_for_slick').slick({
		dots:true,
		infinite: false,
		responsive: [
		    {
		      breakpoint: 2000,
		      settings: {
		      	infinite: true,
		        
		        
		      }
		    },
		    {
		      breakpoint: 1200,
		      settings: {
		        
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]

	});

})

$(function(){

	$('.about_bottom').slick({
		dots:true,
		infinite: false,
		arrows: false,
		responsive: [
		    {
		      breakpoint: 2000,
		      settings: 'unslick'
		    },
		    {
		      breakpoint: 768,
		      settings: 'slick'
		      
		      	
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]

	});

})