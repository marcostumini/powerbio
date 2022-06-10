(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "available_languages": ["en", "es"],
  "all_languages": ["ar", "ca", "da", "de", "el", "en", "es", "eu", "fi", "fr", "he", "is", "it", "ja", "ko", "nb", "nl", "pl", "pt", "ru", "sv", "tr", "zh"],
  "default_language": "en",
  "root_url": "/",
  "not_found_url": "404.php",
  "env": "prod",
  "map_style": {
    "id": "powerbio_style",
    "lat": -34.5651292,
    "lng": -58.493958,
    "styles": [
      {
        "featureType": "poi.business",
        "stylers": [{ "visibility": "off" }]
      }
    ]
  },
  "sections": [
    "pBiodiesel",
    "acercaDe",
    "infoOficina",
    "masInfo"
  ],
  "newsletter_subscription_path": "http://sendy.powerbio.com/subscribe"
}

},{}],2:[function(require,module,exports){
var config = require('../../compiled/config.json');

var powerbio = window.powerbio || {};

powerbio.config = config;
powerbio.lang = $('html').attr('lang');

window.powerbio = powerbio;

// To.top

!function(o){"use strict";o.fn.toTop=function(t){var i=this,e=o(window),s=o("html, body"),n=o.extend({autohide:!0,offset:420,speed:500,position:!0,right:15,bottom:30},t);i.css({cursor:"pointer"}),n.autohide&&i.css("display","none"),n.position&&i.css({position:"fixed",right:n.right,bottom:n.bottom}),i.click(function(){s.animate({scrollTop:0},n.speed)}),e.scroll(function(){var o=e.scrollTop();n.autohide&&(o>n.offset?i.fadeIn(n.speed):i.fadeOut(n.speed))})}}(jQuery);

$(document).ready(function(){

  $('.to-top').toTop({
    speed: 400
  });
});

// headroom

// grab an element
var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
var headroom = new Headroom(myElement, {
  "offset": 205,
  "tolerance": 5,
  "classes": {
    "initial": "headroom",
    "pinned": "headroom--pinned",
    "unpinned": "headroom--unpinned"
  }
});
// initialise
headroom.init();

$('.office').click( function(){
  if ( $(this).hasClass('animate-open') ) {
      $(this).removeClass('animate-open');
  } else {
      $('.office.animate-open').removeClass('animate-open');
      $(this).addClass('animate-open');
  }
});


//Navbar bg color switcher

function toggleFullMenu() {
  if ( $(".navbar").hasClass('bg-success') ) {
    setTimeout(function() {
      $(".navbar-nav").css({"visibility": "visible"});
      $(".navbar").removeClass('bg-success');
    }, 200);

  } else {
      $('.navbar.bg-success').removeClass('bg-success');
      $(".navbar").addClass('bg-success');
      $(".navbar-nav").css("visibility", "hidden");
  }
}

$('.navbar-toggler').click( function(){
  if ( $(this).hasClass('animate-close') ) {
      $(this).removeClass('animate-close');
  } else {
      $('.navbar-toggler.animate-close').removeClass('animate-close');
      $(this).addClass('animate-close');
  }
  toggleFullMenu();
});

$('.comercial-link').click( function(){
  $(".navbar-toggler").addClass('animate-close');
  toggleFullMenu();
});

$(document).ready(function(){
  $('.feed-slide').slick({
    arrows: false,
    infinite: false,
    slidesToShow: 2,
    dots: false,
    autoplay: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});

$(document).ready(function(){
  $('.slide-reasons-to-join').slick({
    arrows: false,
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
});

$(document).ready(function(){
  $('.members-slide').slick({
    infinite: false,
    slidesPerRow: 3,
    rows: 5,
    arrows: false,
    responsive: [
   {
     breakpoint: 1024,
     settings: {
       rows: 2,
       slidesPerRow: 2,
       dots: true
     }
   }
   // You can unslick at a given breakpoint now by adding:
   // settings: "unslick"
   // instead of a settings object
 ]
  });
});

$(document).ready(function () {
  new WOW().init();

  /* Initialize svg4everybody */
  svg4everybody();

  /* Initialize tooltips */
  // $('[data-toggle="tooltip"]').tooltip();

  /* Navbar on scroll */
  $(document).scroll(function () {
    var scroll = $(document).scrollTop();

    if (scroll >= 100) {
      $(".navbar-powerbio").addClass("inverse-bg");
    } else {
      $(".navbar-powerbio").removeClass("inverse-bg");
    }
  });
});

(function($) {
  $.fn.toTop = function(opt){

    //variables
    var elem = this;
    var win = $(window);
    var doc = $('html, body');

    //Extended Options
    var options = $.extend({
        autohide: true,
        offset: 420,
        speed: 500,
        position: true,
        right: 15,
        bottom: 30
    }, opt);

    elem.css({
        'cursor': 'pointer'
    });

    if(options.autohide){
        elem.css('display', 'none');
    }

    if(options.position){
        elem.css({
            'position': 'fixed',
            'right': options.right,
            'bottom': options.bottom,
        });
    }

    elem.click(function(){
        doc.animate({scrollTop: 0}, options.speed);
    });

    win.scroll(function(){
        var scrolling = win.scrollTop();

        if(options.autohide){
            if(scrolling > options.offset){
                elem.fadeIn(options.speed);
            }
            else elem.fadeOut(options.speed);
        }

    });
  };

})(jQuery);

jQuery.validator.addMethod('filesize', function(value, element, param) {
  return this.optional(element) || (element.files[0].size <= param) 
}); 

jQuery.validator.addMethod("extension", function (value, element, param) {
  param = typeof param === "string" ? param.replace(/,/g, '|') : "png|jpe?g|gif";
  return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"));
}, jQuery.format("Please enter a value with a valid extension."));

},{"../../compiled/config.json":1}]},{},[2]);
