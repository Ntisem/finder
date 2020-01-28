 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

jQuery(document).ready(function($) {

	"use strict";

	

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	var siteMagnificPopup = function() {
		$('.image-popup').magnificPopup({
	    type: 'image',
	    closeOnContentClick: true,
	    closeBtnInside: false,
	    fixedContentPos: true,
	    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	     gallery: {
	      enabled: true,
	      navigateByImgClick: true,
	      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	    },
	    image: {
	      verticalFit: true
	    },
	    zoom: {
	      enabled: true,
	      duration: 300 // don't foget to change the duration also in CSS
	    }
	  });

	  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	    disableOn: 700,
	    type: 'iframe',
	    mainClass: 'mfp-fade',
	    removalDelay: 160,
	    preloader: false,

	    fixedContentPos: false
	  });
	};
	siteMagnificPopup();


	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 10,
		    margin: 30,
		    smartSpeed: 1000,
		    autoplay:true,
				autoplayTimeout:1000,
				autoplayHoverPause:false,

		    nav: true,
				navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">'],
		    responsive:{
	        600:{
	        	margin: 30,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 30,
	        	nav: true,
	          items: 3
	        },
	        1200:{
	        	margin: 30,
	        	nav: true,
	          items: 4
	        }
		    }
			});
		}

		$('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
			smartSpeed: 1000,
	    margin: 0,
	    autoplay: true,
	    pauseOnHover: false,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">'],
	  });
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
	    responsive: false,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
	  });
	};
	siteStellar();

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});
				
	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteRangeSlider = function() {

		$('input[type="range"]').rangeslider({
	    polyfill : false,
	    onInit : function() {
	        this.output = $( '<div class="range-output" />' ).insertAfter( this.$range ).html( this.$element.val() );
	    },
	    onSlide : function( position, value ) {
	        this.output.html( value );
	    }
		});

	};
	siteRangeSlider();
});
$(document).on('click', '#close-preview', function(){ 
    $('.image-preview').popover('hide');
    // Hover befor close the preview
    $('.image-preview').hover(
        function () {
           $('.image-preview').popover('show');
        }, 
         function () {
           $('.image-preview').popover('hide');
        }
    );    
});

$(function() {
    // Create the close button
    var closebtn = $('<button/>', {
        type:"button",
        text: 'x',
        id: 'close-preview',
        style: 'font-size: initial;',
    });
    closebtn.attr("class","close pull-right");
    // Set the popover default content
    $('.image-preview').popover({
        trigger:'manual',
        html:true,
        title: "<strong>Preview</strong>"+$(closebtn)[0].outerHTML,
        content: "There's no image",
        placement:'bottom'
    });
    // Clear event
    $('.image-preview-clear').click(function(){
        $('.image-preview').attr("data-content","").popover('hide');
        $('.image-preview-filename').val("");
        $('.image-preview-clear').hide();
        $('.image-preview-input input:file').val("");
        $(".image-preview-input-title").text("Upload Image"); 
    }); 
    // Create the preview image
    $(".image-preview-input input:file").change(function (){     
        var img = $('<img/>', {
            id: 'dynamic',
            width:150,
            height:100
        });      
        var file = this.files[0];
        var reader = new FileReader();
        // Set preview image into the popover data-content
        reader.onload = function (e) {
            $(".image-preview-input-title").text("Change");
            $(".image-preview-clear").show();
            $(".image-preview-filename").val(file.name);            
            img.attr('src', e.target.result);
            $(".image-preview").attr("data-content",$(img)[0].outerHTML).popover("show");
        }        
        reader.readAsDataURL(file);
    });  
});
  // clients logo slider
  $('.client-logo-slider').click({
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	dots: false,
	arrows: false,
	responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

!function(e){var t=function(t,n){this.$element=e(t),this.type=this.$element.data("uploadtype")||(this.$element.find(".thumbnail").length>0?"image":"file"),
this.$input=this.$element.find(":file");if(this.$input.length===0)return;this.name=this.$input.attr("name")||n.name,
this.$hidden=this.$element.find('input[type=hidden][name="'+this.name+'"]'),this.$hidden.length===0&&(this.$hidden=e('<input type="hidden" />'),
this.$element.prepend(this.$hidden)),this.$preview=this.$element.find(".fileupload-preview");var r=this.$preview.css("height");
this.$preview.css("display")!="inline"&&r!="0px"&&r!="none"&&this.$preview.css("line-height",r),this.original={exists:this.$element.hasClass("fileupload-exists"),
preview:this.$preview.html(),hiddenVal:this.$hidden.val()},this.$remove=this.$element.find('[data-dismiss="fileupload"]'),
this.$element.find('[data-trigger="fileupload"]').on("click.fileupload",e.proxy(this.trigger,this)),this.listen()};t.prototype={listen:function(){
	this.$input.on("change.fileupload",e.proxy(this.change,this)),e(this.$input[0].form).on("reset.fileupload",e.proxy(this.reset,this)),
	this.$remove&&this.$remove.on("click.fileupload",e.proxy(this.clear,this))},change:function(e,t){if(t==="clear")return;var n=e.target.files!==undefined?e.target.files[0]:
	e.target.value?{name:e.target.value.replace(/^.+\\/,"")}:null;if(!n){this.clear();return}this.$hidden.val(""),this.$hidden.attr("name",""),this.$input.attr("name",this.name);
	if(this.type==="image"&&this.$preview.length>0&&(typeof n.type!="undefined"?n.type.match("image.*"):n.name.match(/\.(gif|png|jpe?g)$/i))&&typeof FileReader!="undefined")
	{var r=new FileReader,i=this.$preview,s=this.$element;r.onload=function(e){i.html('<img src="'+e.target.result+
	'" '+(i.css("max-height")!="none"?'style="max-height: '+i.css("max-height")+';"':"")+" />"),s.addClass("fileupload-exists").removeClass("fileupload-new")},
	r.readAsDataURL(n)}else this.$preview.text(n.name),this.$element.addClass("fileupload-exists").removeClass("fileupload-new")},clear:function(e){this.$hidden.val(""),
	this.$hidden.attr("name",this.name),this.$input.attr("name","");if(navigator.userAgent.match(/msie/i)){var t=this.$input.clone(!0);this.$input.after(t),this.$input.remove(),
	this.$input=t}else this.$input.val("");this.$preview.html(""),this.$element.addClass("fileupload-new").removeClass("fileupload-exists"),e&&(this.$input.trigger("change",["clear"]),
	e.preventDefault())},reset:function(e){this.clear(),this.$hidden.val(this.original.hiddenVal),this.$preview.html(this.original.preview),
	this.original.exists?this.$element.addClass("fileupload-exists").removeClass("fileupload-new"):this.$element.addClass("fileupload-new").removeClass("fileupload-exists")},
	trigger:function(e){this.$input.trigger("click"),e.preventDefault()}},e.fn.fileupload=function(n){return this.each(function(){var r=e(this),i=r.data("fileupload");i||r.data("fileupload",
	i=new t(this,n)),typeof n=="string"&&i[n]()})},e.fn.fileupload.Constructor=t,e(document).on("click.fileupload.data-api",'[data-provides="fileupload"]',function(t){var n=e(this);
		if(n.data("fileupload"))return;n.fileupload(n.data());var r=e(t.target).closest('[data-dismiss="fileupload"],[data-trigger="fileupload"]');r.length>0&&(r.trigger("click.fileupload"),
		t.preventDefault())})}(window.jQuery)
// var droppedFiles = false;
// var fileName = '';
// var $dropzone = $('.dropzone');
// var $button = $('.upload-btn');
// var uploading = false;
// var $syncing = $('.syncing');
// var $done = $('.done');
// var $bar = $('.bar');
// var timeOut;

// $dropzone.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
// 	e.preventDefault();
// 	e.stopPropagation();
// })
// 	.on('dragover dragenter', function() {
// 	$dropzone.addClass('is-dragover');
// })
// 	.on('dragleave dragend drop', function() {
// 	$dropzone.removeClass('is-dragover');
// })
// 	.on('drop', function(e) {
// 	droppedFiles = e.originalEvent.dataTransfer.files;
// 	fileName = droppedFiles[0]['name'];
// 	$('.filename').html(fileName);
// 	$('.dropzone .upload').hide();
// });

// $button.bind('click', function() {
// 	startUpload();
// });

// $("input:file").change(function (){
// 	fileName = $(this)[0].files[0].name;
// 	$('.filename').html(fileName);
// 	$('.dropzone .upload').hide();
// });

// function startUpload() {
// 	if (!uploading && fileName != '' ) {
// 		uploading = true;
// 		$button.html('Uploading...');
// 		$dropzone.fadeOut();
// 		$syncing.addClass('active');
// 		$done.addClass('active');
// 		$bar.addClass('active');
// 		timeoutID = window.setTimeout(showDone, 3200);
// 	}
// }

// function showDone() {
// 	$button.html('Done');
// }
// //jQuery plugin
// (function( $ ) {
   
// 	$.fn.uploader = function( options ) {
// 	  var settings = $.extend({
// 		MessageAreaText: "No files selected.",
// 		MessageAreaTextWithFiles: "File List:",
// 		DefaultErrorMessage: "Unable to open this file.",
// 		BadTypeErrorMessage: "We cannot accept this file type at this time.",
// 		acceptedFileTypes: ['pdf', 'jpg', 'gif', 'jpeg', 'bmp', 'tif', 'tiff', 'png', 'xps', 'doc', 'docx',
// 		 'fax', 'wmp', 'ico', 'txt', 'cs', 'rtf', 'xls', 'xlsx']
// 	  }, options );
   
// 	  var uploadId = 1;
// 	  //update the messaging 
// 	   $('.file-uploader__message-area p').text(options.MessageAreaText || settings.MessageAreaText);
	  
// 	  //create and add the file list and the hidden input list
// 	  var fileList = $('<ul class="file-list"></ul>');
// 	  var hiddenInputs = $('<div class="hidden-inputs hidden"></div>');
// 	  $('.file-uploader__message-area').after(fileList);
// 	  $('.file-list').after(hiddenInputs);
	  
// 	 //when choosing a file, add the name to the list and copy the file input into the hidden inputs
// 	  $('.file-chooser__input').on('change', function(){
// 		 var file = $('.file-chooser__input').val();
// 		 var fileName = (file.match(/([^\\\/]+)$/)[0]);
 
// 		//clear any error condition
// 		$('.file-chooser').removeClass('error');
// 		$('.error-message').remove();
		
// 		//validate the file
// 		var check = checkFile(fileName);
// 		if(check === "valid") {
		  
// 		  // move the 'real' one to hidden list 
// 		  $('.hidden-inputs').append($('.file-chooser__input')); 
		
// 		  //insert a clone after the hiddens (copy the event handlers too)
// 		  $('.file-chooser').append($('.file-chooser__input').clone({ withDataAndEvents: true})); 
		
// 		  //add the name and a remove button to the file-list
// 		  $('.file-list').append('<li style="display: none;"><span class="file-list__name">' + fileName + '</span><button class="removal-button" data-uploadid="'+ uploadId +'"></button></li>');
// 		  $('.file-list').find("li:last").show(800);
		 
// 		  //removal button handler
// 		  $('.removal-button').on('click', function(e){
// 			e.preventDefault();
		  
// 			//remove the corresponding hidden input
// 			$('.hidden-inputs input[data-uploadid="'+ $(this).data('uploadid') +'"]').remove(); 
		  
// 			//remove the name from file-list that corresponds to the button clicked
// 			$(this).parent().hide("puff").delay(10).queue(function(){$(this).remove();});
			
// 			//if the list is now empty, change the text back 
// 			if($('.file-list li').length === 0) {
// 			  $('.file-uploader__message-area').text(options.MessageAreaText || settings.MessageAreaText);
// 			}
// 		  });
		
// 		  //so the event handler works on the new "real" one
// 		  $('.hidden-inputs .file-chooser__input').removeClass('file-chooser__input').attr('data-uploadId', uploadId); 
		
// 		  //update the message area
// 		  $('.file-uploader__message-area').text(options.MessageAreaTextWithFiles || settings.MessageAreaTextWithFiles);
		  
// 		  uploadId++;
		  
// 		} else {
// 		  //indicate that the file is not ok
// 		  $('.file-chooser').addClass("error");
// 		  var errorText = options.DefaultErrorMessage || settings.DefaultErrorMessage;
		  
// 		  if(check === "badFileName") {
// 			errorText = options.BadTypeErrorMessage || settings.BadTypeErrorMessage;
// 		  }
		  
// 		  $('.file-chooser__input').after('<p class="error-message">'+ errorText +'</p>');
// 		}
// 	  });
	  
// 	  var checkFile = function(fileName) {
// 		var accepted          = "invalid",
// 			acceptedFileTypes = this.acceptedFileTypes || settings.acceptedFileTypes,
// 			regex;
 
// 		for ( var i = 0; i < acceptedFileTypes.length; i++ ) {
// 		  regex = new RegExp("\\." + acceptedFileTypes[i] + "$", "i");
 
// 		  if ( regex.test(fileName) ) {
// 			accepted = "valid";
// 			break;
// 		  } else {
// 			accepted = "badFileName";
// 		  }
// 		}
 
// 		return accepted;
// 	 };
//    }; 
//  }( jQuery ));
 
//  //init 
//  $(document).ready(function(){
//    $('.fileUploader').uploader({
// 	 MessageAreaText: "No files selected. Please select a file."
//    });
//  });
