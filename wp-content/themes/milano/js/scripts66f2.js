/**
 * fixim: default javascript
 * @license MIT
 */


jQuery(window).load(function(){
	jQuery( document ).ajaxComplete(function() {
		jQuery(document).find( 'input[name="update_cart"]' ).prop( 'disabled', false );
	});
		jQuery(document).find( 'input[name="update_cart"]' ).prop( 'disabled', false );


	var flv_select_val=jQuery('.woocommerce-ordering select.orderby').val();

	jQuery('.woocommerce-ordering select.orderby').on('change', function() {
		if(jQuery(this).val()!=flv_select_val)
		if(!window.location.hash) {
			var page_cur="";
			if(jQuery('body').hasClass('post-type-archive')){page_cur="post_type=product";}
			if(jQuery('body').hasClass('tax-product_cat')){var cat_cur=jQuery('body').attr('data-extra-set');page_cur="product_cat="+cat_cur;}
			if(jQuery('body').hasClass('tax-product_tag')){var tag_cur=jQuery('body').attr('data-extra-set');page_cur="product_tag="+tag_cur;}
        window.location = 'http://' + window.location.hostname + window.location.pathname + '?'+page_cur+'&orderby='+this.value;
    }
	});
	
	jQuery('.selectric-wrapper select').change( function(){ 
		var to_change=jQuery(this);
	jQuery('a.reset_variations').click(function(){ 
		to_change.prop('selectedIndex',0);
		to_change.selectric('init'); 
	})
	})
		
})
jQuery(document).ready(function() {
	
	jQuery('.woocommerce-cart .woocommerce.add_to_cart_inline a.ajax_add_to_cart').on('click', function (added_to_cart) {
    if ( added_to_cart.originalEvent === undefined ) {
      //  alert( 'triggered programmatically' );   
    } else {
      location.reload(); 
    }
}) 

	jQuery('select').selectric({
		disableOnMobile: false
	}); 
	if(jQuery('body').hasClass("single-product")){ 
	var param = document.URL.split('#')[1];
	if(window.location.href.indexOf("#comment-") > -1) {
		jQuery('a.reviews_tab').trigger('click');
		 jQuery('html, body').animate({
        scrollTop: jQuery("#"+param).offset().top
    }, 1000);
    }
   }
	jQuery('.woocommerce-review-link').click(function(){
		jQuery('a.reviews_tab').trigger('click');
		 jQuery('html, body').animate({
        scrollTop: jQuery(".reviews_tab").offset().top
    }, 1000);
	});
	jQuery('.flv_next_section').on("click", function(e){
		e.preventDefault();
		var scroll_to=jQuery(this).parents(".section-imp").next();
		
		jQuery('html, body').animate({
        scrollTop: scroll_to.offset().top-50
    }, 1000);
	});

	jQuery('.flv_next_page').on("click", function(e){
		e.preventDefault();
		jQuery.fn.fullpage.moveSectionDown();
	});
	
	jQuery('.flv_navi li a').click(function(event){
		
		var href=jQuery(this).attr("href");
		if(href.charAt(0)=="#"){
			event.preventDefault();
			jQuery("body").addClass("fade-in").removeClass("fade-out");
   }
	});
	
	jQuery('.flv_to').each(function(){
		var flv_to=jQuery(this).parent().prev();
		jQuery(this).appendTo(flv_to);
	})
	jQuery('.button.product_type_variable.add_to_cart_button').each(function(){
		jQuery(this).html('<span class="options-span">Select </span>Options');
		var backup=jQuery(this);
		jQuery(this).parent().empty().append(backup);
	})
	jQuery('.single-product .onsale.circile-hot').each(function(){
		jQuery(this).appendTo(jQuery(this).next());
	})
	jQuery('.woocommerce-checkout .woocommerce-info ').each(function(){
		jQuery(this).addClass("woocommerce-message");
	})
	
	
	
		/* contact form*/
jQuery("form#commentform").submit(function(e){
	e.preventDefault(); 
	var errors=0;
     if(jQuery('.flvcontactform .flvname').val()!=undefined)
	 if(jQuery('.flvcontactform .flvname').val()=='') {
	 	var hasClass=jQuery('.flvcontactform .flvname').parent().next().hasClass("error");
	 	if(!hasClass)
	 	   // jQuery('<label for="contactname" generated="true" class="error">Please enter your name</label>').insertAfter( jQuery('.flvcontactform .flvname').parent());	
	 	   var output='<div class="error-message"><p class="from">Please enter your name</p></div>';   jQuery("#result").hide().html(output).slideDown();
			jQuery('.flvcontactform .flvname').focus();
			errors++;
		}
		else
		if(jQuery('.flvcontactform .flvname').parent().next().hasClass("error"))jQuery('.flvcontactform .flvname').parent().next().remove();

		
		if(jQuery('.flvcontactform .flvemail').val()!=undefined)
		if(validate_email(jQuery('.flvcontactform .flvemail').val())==false ) {
		var hasClass=jQuery('.flvcontactform .flvemail').parent().next().hasClass("error");
	 	if(!hasClass)
	 	 // jQuery('<label for="contactname" generated="true" class="error">Please enter a valid email address</label>').insertAfter( jQuery('.flvcontactform .flvemail').parent());	
	 	  var output='<div class="error-message"><p class="from">Please enter a valid email address</p></div>';   jQuery("#result").hide().html(output).slideDown();
			jQuery('.flvcontactform .flvemail').focus();
			errors++;
		}
		else
		if(jQuery('.flvcontactform .flvemail').parent().next().hasClass("error"))jQuery('.flvcontactform .flvemail').parent().next().remove();
		

		if(jQuery('.flvcontactform .flvmessage').val()!=undefined)
		if(jQuery('.flvcontactform .flvmessage').val()==''){
		var hasClass=jQuery('.flvcontactform .flvmessage').parent().next().hasClass("error");
	 	if(!hasClass)
	 	   // jQuery('<label for="contactname" generated="true" class="error">Please enter a message</label>').insertAfter( jQuery('.flvcontactform .flvmessage').parent());
	 	     var output='<div class="error-message"><p class="from">Please enter a message</p></div>';   jQuery("#result").hide().html(output).slideDown();
			jQuery('.flvcontactform .flvmessage').focus();
			errors++;
		}
		else
		if(jQuery('.flvcontactform .flvmessage').parent().next().hasClass("error"))jQuery('.flvcontactform .flvmessage').parent().next().remove();
		
		if(jQuery('.flvcontactform .dzscapcha').val()!=undefined)
		if(jQuery('.flvcontactform .dzscapcha').val()<5 || jQuery('.flvcontactform .dzscapcha').val()>9 ){
		var hasClass=jQuery('.flvcontactform .dzscapcha').parent().next().hasClass("error");
	 	if(!hasClass)
	 	   //  jQuery('<label for="contactname" generated="true" class="error">Please enter a valid number</label>').insertAfter( jQuery('.flvcontactform .dzscapcha').parent());
	 	    var output='<div class="error-message"><p class="from">Please enter a valid number</p></div>';   jQuery("#result").hide().html(output).slideDown();
			jQuery('.flvcontactform .dzscapcha').focus();
			errors++;
		}
		else
		if(jQuery('.flvcontactform .dzscapcha').parent().next().hasClass("error"))jQuery('.flvcontactform .dzscapcha').parent().next().remove();

		if(errors==0) {
			
				var formInput = jQuery(this).serialize();
				$j.post(jQuery(this).attr('action'),formInput, function(data){
					jQuery('form#commentform').slideUp("fast", function() {		
						jQuery("#result").slideUp()	   
						jQuery(this).before('<div class="flv-msg success-message"><p class="seuccses">'+window.message+' </p></div>');
					});
				});
			}
			

		return false;
});


});

/**************************************
 * TweetCool Settings
***************************************/

jQuery(document).ready(function() { "use strict";
        jQuery('#tweecool').tweecool({
        	//settings
        	 username : 'collis', 
           limit : 3	
        });
		return false;
		

});

jQuery(".tagcloud").addClass("w-clearfix");
/**************************************
 * Video Background Full Width
***************************************/

    jQuery(function () { "use strict";
  
  var outerDiv = jQuery('.video-wrapper')
  var videoTag = outerDiv.find('video')
  
  jQuery(window).resize(resize)
  resize()
  
  function resize() {
    var width = outerDiv.width()
    var height = outerDiv.height()
    var aspectW = 16
    var aspectH = 9
    var scaleX = width / aspectW
    var scaleY = height / aspectH
    var scale = Math.max(scaleX, scaleY)
    var w = Math.ceil(aspectW * scale)
    var h = Math.ceil(aspectH * scale)
    var x = 0
    var y = 0
    if (w > width) x = -(w - width) * 0.5
    if (h > height) y = -(h - height) * 0.5
     
    videoTag.css({
      width: w,
      height: h,
      top: y,
      left: x
    })
  }
  return false;
});

/**************************************
 * Typed jQurey
***************************************/

  jQuery(function(){ "use strict";
  jQuery(".element-border, .hello-element").typed({
    strings: ["Hello.", "Olá.", "¡Hola!", "Bonjour.", "Ciao." , "今日は." , "Goddag." , "Merhaba."],
        typeSpeed: 30, // typing speed
        backDelay: 500, // pause before backspacing
        loop: true, // loop on or off (true or false)
        loopCount: false, // number of loops, false = infinite
      });
	  return false;
});

   jQuery(function(){ "use strict";
        jQuery(".element, .element-border").typed({
          strings: ["awesome", "inspired", "incredible", "classy", "great", "proffesional", "popular"],
          typeSpeed: 250, // typing speed
          backDelay: 500, // pause before backspacing
          loop: false, // loop on or off (true or false)
          loopCount: false, // number of loops, false = infinite
        });
		return false;
    });
	
/**************************************
 * Hamburger Icon
***************************************/

    jQuery(function() { "use strict";
    var toggles = document.querySelectorAll(".c-hamburger");
    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };
    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
    }
  });

/**************************************
 * fullPage jQuery
***************************************/

     jQuery(document).ready(function() { "use strict";
   
        jQuery('#fullpage').fullpage({
            //Navigation
            menu: '#menu',
            lockAnchors: false,
            anchors:['slide1', 'slide2', 'slide3','slide4', 'slide5', 'slide6','slide7', 'slide8', 'slide9', 'slide10'],
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: [''],
            showActiveTooltip: true,
            slidesNavigation: true,
            slidesNavPosition: 'top',
            //Scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            scrollBar: false,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            normalScrollElements: '#element1, #element2, #element3, #element4, #element5, #element6, #element6, #element7, #element8, #element9, #element10, #element11',
            scrollOverflow: false,
            touchSensitivity: 15,
            normalScrollElementTouchThreshold: 5,
            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,
            //Design
            controlArrows: true,
            verticalCentered: true,
            resize : false,
            sectionsColor : ['#ccc', '#eee'],
            paddingTop: '3em',
            paddingBottom: '10px',
            fixedElements: '#header, .footer',
            responsiveWidth: 1100,
            responsiveHeight: 0,
            //Custom selectors
            sectionSelector: '.section',
            slideSelector: '.slide',
            //events
            onLeave: function(index, nextIndex, direction){},
            afterLoad: function(anchorLink, index){},
            afterRender: function(){},
            afterResize: function(){},
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
            onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
        });
		return false;
    });
	
/**************************************
 * isotope jQuery
***************************************/


jQuery(document).ready( function() {
  // init Isotope
 jQuery('.grid').each( function() {
  var $grid = jQuery(this).isotope({
    itemSelector: '.item'
  });
  
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  }); 

  // store filter for each group
  var filters = {};

   jQuery(this).prev().find('.filters').on( 'click', '.button', function() { 
    var $this = jQuery(this);
  $this.parent().find('.button').removeClass('is-checked');  
  $this.addClass('is-checked');
  
     var $this_grid = jQuery(this).parents(".filter-cont").next();
    // get group key
    var $buttonGroup = $this.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    filters[ filterGroup ] = $this.attr('data-filter');
    // combine filters
    var filterValue = concatValues( filters );
    // set filter for Isotope
   $grid.isotope({ filter: filterValue });
  $this_grid.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
   jQuery(this).prev().find('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = jQuery( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() { 
      $buttonGroup.find('.is-checked').removeClass('.is-checked');
      jQuery( this ).addClass('.is-checked');
    });
  });
  });
});

// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}
  
/**************************************
 * Royal Preloader jQuery
***************************************/

Royal_Preloader.config({
                mode:       'line',
                timeout:    10,
                background: '#111'
});
	
/**************************************
 * fancybox jQuery
***************************************/

	jQuery(document).ready(function() { "use strict";
		jQuery(".fancybox").fancybox({ helpers: {   overlay: {  locked: false   } } }	);
		return false;
	});
	
/**************************************
 * Wow jQuery
***************************************/

new WOW().init();

/**************************************
 * Scroll To Top
***************************************/

jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = jQuery('.cd-top');

	//hide or show the "back to top" link
	jQuery(window).scroll(function(){
		( jQuery(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( jQuery(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		jQuery('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});

/**************************************
 * Coming Soon
**************************************

jQuery(function () {
            var $section = jQuery('cooming');
            jQuery(window).on("resize", function () {
                var dif = Math.max(jQuery(window).height() - $section.height(), 0);
                var padding = Math.floor(dif / 2) + 'px';
                $section.css({ 'padding-top': padding, 'padding-bottom': padding });
            }).trigger("resize");
            jQuery('#myCounter').mbComingsoon({ expiryDate: new Date(2016, 3, 5, 9, 30), speed:100 });
            setTimeout(function () {
                jQuery(window).resize();
            }, 200);
});
*/
/**************************************
 * Photoswipe Gallery
***************************************/

   var initPhotoSwipeFromDOM = function(gallerySelector) { 
    // parse slide data (url, title, size ...) from DOM elements 
    // (children of gallerySelector)
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            childElements,
            linkEl,
            size,
            item;
        for(var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes 
            if(figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0]; // <a> element
            size = linkEl.getAttribute('data-size').split('x');
            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };
            if(figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML; 
            }
            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }
        return items;
    };
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });
        if(!clickedListItem) {
            return;
        }
        // find index of clicked item
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;
        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) { 
                continue; 
            }
            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }
        if(index >= 0) {
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };
    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};
        if(hash.length < 5) {
            return params;
        }
        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }
        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        if(!params.hasOwnProperty('pid')) {
            return params;
        }
        params.pid = parseInt(params.pid, 10);
        return params;
    };
    var openPhotoSwipe = function(index, galleryElement, disableAnimation) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        options = {
            index: index,
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of docs for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 
                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            },
           history: false,
           focus: false 
        };
        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }
        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
    var galleryElements = document.querySelectorAll( gallerySelector );
    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if(hashData.pid > 0 && hashData.gid > 0) {
        openPhotoSwipe( hashData.pid - 1 ,  galleryElements[ hashData.gid - 1 ], true );
    }
    };
  if(!jQuery('.my-simple-gallery').hasClass('no-zoom')){ initPhotoSwipeFromDOM('.my-simple-gallery');}


/**************************************
 * Page Load
***************************************/
				 
	   if(jQuery(".animsition").length){
	   jQuery(".animsition").animsition({
		inClass               :   'fade-in',
		outClass              :   'fade-out',
		inDuration            :    800,
		outDuration           :    800,
		linkElement           :   '.animsition-link',
		   // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
		loading               :    true,
		loadingParentElement  :   'body', 
		unSupportCss          : [ 'animation-duration',
								  '-webkit-animation-duration',
								  '-o-animation-duration'
								],
		overlay               :   false,

		overlayClass          :   'animsition-overlay-slide',
		overlayParentElement  :   'body'
	  });
	}
	
function validate_email(address) {
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   if(reg.test(address) == false) {
      return false;
   }
   else
   return true;
}