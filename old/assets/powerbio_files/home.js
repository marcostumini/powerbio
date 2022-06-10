(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('../../../vendors/deep-link.js/build/deep-link.js');

$(".city-content").hover(
    function () {
      $(this).addClass("animated shake");
    },
    function () {
      $(this).removeClass("animated shake");
    }
  );

;(function ($) {

  $(document).ready(function(){
    $('.slide-berlin').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      autoplay: true,
      autoplaySpeed: 1500,
      dots: false
    });
  });

  var lang = $('html').attr('lang'),
      spreadsheet = 'https://docs.google.com/spreadsheets/d/1jcA4kPgxxUNYYeFQ4NF-0mv4quE3eAwbI2nbDlBg0fA/edit#gid=1700743596';

  showSlides(spreadsheet, lang);

  function showSlides(spreadsheet, lang) {
    var query = 'select * where B = "size" or (B = "slider" and A = "' + lang + '")';

    $('.career-list').sheetrock({
      url: spreadsheet,
      query: query,
      rowTemplate: rowTemplate
    });

    function rowTemplate(row) {
      row.id = "job-position-" + row.num;
      var type = row.cells.type || null,
          template = _.template($('#slider-' + type + '-template').text());

      return template(row);
    }
  }

  function openJobDescription(positionId) {
    var info = $('#' + positionId);
    var modal = $('#modal-home-job');
    var template = _.template($('#modal-home-job-template').text());
  
    var modalContent = template({
      search: $('#' + positionId + '-search', info).text(),
      city: $('#' + positionId + '-city', info).text(),
      description: $('#' + positionId + '-description', info).html(),
      needs: $('#' + positionId + '-needs', info).html()
    });
    modal.html(modalContent);
    modal.modal('show');
  }
  
  window.openJobDescription = openJobDescription;
}(jQuery));

},{"../../../vendors/deep-link.js/build/deep-link.js":2}],2:[function(require,module,exports){
/*!
 * visibly - v0.7 Page Visibility API Polyfill
 * http://github.com/addyosmani
 * Copyright (c) 2011-2014 Addy Osmani
 * Dual licensed under the MIT and GPL licenses.
 *
 * Methods supported:
 * visibly.onVisible(callback)
 * visibly.onHidden(callback)
 * visibly.hidden()
 * visibly.visibilityState()
 * visibly.visibilitychange(callback(state));
 */

;(function () {

    window.visibly = {
        q: document,
        p: undefined,
        prefixes: ['webkit', 'ms','o','moz','khtml'],
        props: ['VisibilityState', 'visibilitychange', 'Hidden'],
        m: ['focus', 'blur'],
        visibleCallbacks: [],
        hiddenCallbacks: [],
        genericCallbacks:[],
        _callbacks: [],
        cachedPrefix:"",
        fn:null,

        onVisible: function (_callback) {
            if(typeof _callback == 'function' ){
                this.visibleCallbacks.push(_callback);
            }
        },
        onHidden: function (_callback) {
            if(typeof _callback == 'function' ){
                this.hiddenCallbacks.push(_callback);
            }
        },
        getPrefix:function(){
            if(!this.cachedPrefix){
                for(var l=0;b=this.prefixes[l++];){
                    if(b + this.props[2] in this.q){
                        this.cachedPrefix =  b;
                        return this.cachedPrefix;
                    }
                }    
             }
        },

        visibilityState:function(){
            return  this._getProp(0);
        },
        hidden:function(){
            return this._getProp(2);
        },
        visibilitychange:function(fn){
            if(typeof fn == 'function' ){
                this.genericCallbacks.push(fn);
            }

            var n =  this.genericCallbacks.length;
            if(n){
                if(this.cachedPrefix){
                     while(n--){
                        this.genericCallbacks[n].call(this, this.visibilityState());
                    }
                }else{
                    while(n--){
                        this.genericCallbacks[n].call(this, arguments[0]);
                    }
                }
            }

        },
        isSupported: function (index) {
            return ((this._getPropName(2)) in this.q);
        },
        _getPropName:function(index) {
            return (this.cachedPrefix == "" ? this.props[index].substring(0, 1).toLowerCase() + this.props[index].substring(1) : this.cachedPrefix + this.props[index]);
        },
        _getProp:function(index){
            return this.q[this._getPropName(index)]; 
        },
        _execute: function (index) {
            if (index) {
                this._callbacks = (index == 1) ? this.visibleCallbacks : this.hiddenCallbacks;
                var n =  this._callbacks.length;
                while(n--){
                    this._callbacks[n]();
                }
            }
        },
        _visible: function () {
            window.visibly._execute(1);
            window.visibly.visibilitychange.call(window.visibly, 'visible');
        },
        _hidden: function () {
            window.visibly._execute(2);
            window.visibly.visibilitychange.call(window.visibly, 'hidden');
        },
        _nativeSwitch: function () {
            this[this._getProp(2) ? '_hidden' : '_visible']();
        },
        _listen: function () {
            try { /*if no native page visibility support found..*/
                if (!(this.isSupported())) {
                    if (this.q.addEventListener) { /*for browsers without focusin/out support eg. firefox, opera use focus/blur*/
                        window.addEventListener(this.m[0], this._visible, 1);
                        window.addEventListener(this.m[1], this._hidden, 1);
                    } else { /*IE <10s most reliable focus events are onfocusin/onfocusout*/
                        if (this.q.attachEvent) {
                            this.q.attachEvent('onfocusin', this._visible);
                            this.q.attachEvent('onfocusout', this._hidden);
                        }
                    }
                } else { /*switch support based on prefix detected earlier*/
                    this.q.addEventListener(this._getPropName(1), function () {
                        window.visibly._nativeSwitch.apply(window.visibly, arguments);
                    }, 1);
                }
            } catch (e) {}
        },
        init: function () {
            this.getPrefix();
            this._listen();
        }
    };

    this.visibly.init();
})();
/*!
 * Deep-link.js
 * https://timseverien.com/projects/deep-link/
 *
 * Copyright 2014
 * Released under MIT license
 */

(function() {
	'use strict';
	
	/****************************************************************
	 * VARIABLES
	 ****************************************************************/
	
	var delay = 1200,
		OSs = {
			android: {
				store_prefix: 'https://play.google.com/store/apps/details?id=',
				test: /Android/i
			},
			
			iOS: {
				store_prefix: 'https://itunes.apple.com/en/app/id',
				test: /iPhone|iPad|iPod/i
			}
		};
	
	
	/****************************************************************
	 * FUNCTIONS
	 ****************************************************************/
	
	// Get user agent
	var getUserAgent = function() {
		var k;
		
		for(k in OSs) {
			if(navigator.userAgent.match(OSs[k].test)) return k;
		}
	};
	
	// Get current time in ms
	var getTime = function() {
		return new Date().getTime();
	};
	
	var open = function(url) {
		window.location.href = url;
	};
	
	// Parse a single element
	var parseElement = function(el) {
		var clicked, timeout,
			OS = getUserAgent(),
			
			href = el.getAttribute('href'),
			app = (
				el.getAttribute('data-app-' + OS) ||
				el.getAttribute('data-app')
			),
			store = (
				el.getAttribute('data-store-' + OS) ||
				el.getAttribute('data-store')
			);
		
		if(!app) return;
		if(!href) el.setAttribute('href', app);
		
		if(OS && app) {
			// Hijack click event
			el.onclick = function(e) {
				e.preventDefault();
				e.stopImmediatePropagation();
				
				var win;
				
				// Store start time
				var start = getTime();
				clicked = true;
				
				// Timeout to detect if the link worked
				timeout = setTimeout(function() {
					// Check if any of the values are unset
					if(!clicked || !timeout) return;
					
					// Get current time
					var now = getTime();
					
					// Reset things
					clicked = false;
					timeout = null;
					
					// Has the user left the screen? ABORT!
					if(now - start >= delay * 2) return;
					
					// Open store or original link
					if(store) open(OSs[OS].store_prefix + store);
					else if(href) open(href);
				}, delay);
				
				// Go to app
				win = open(app);
			};
		} else if(!href || href === '#') {
			// Apps are presumably not supported
			el.style.display = 'none';
		}
		
		// Triggered on blur
		visibly.onHidden(function() {
			if(!clicked || !timeout) return;
			
			// Reset everything
			timeout = clearInterval(timeout);
			clicked = false;
		});
	};
	
	
	/****************************************************************
	 * INITIALIZE
	 ****************************************************************/
		
	var elements = document.getElementsByTagName('a'),
		i = elements.length;
	
	while(i--) parseElement(elements[i]);
})();
},{}]},{},[1]);
