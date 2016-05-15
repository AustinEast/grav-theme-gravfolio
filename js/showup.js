/*
 * Showup.js jQuery Plugin
 * http://github.com/jonschlinkert/showup
 *
 * Copyright (c) 2013 Jon Schlinkert, contributors
 * Licensed under the MIT License (MIT).
 */


(function( $ ) {
  $.fn.showUp = function(ele, options) {
    options = options || {};

    var target         = $(ele);
    var down           = options.down        || 'nav-up';
    var hideOffset     = options.offset      || 110;
    var previousScroll = 0;

    $(window).scroll(function () {
      // var currentScroll = $(this).scrollTop();
      if ($(this).scrollTop() > hideOffset) {
        if ($(this).scrollTop() > previousScroll) {
          // Action on scroll down
          target.addClass(down);
        } else {
          // Action on scroll up
          target.removeClass(down);
        }
      }
      previousScroll = $(this).scrollTop();
    });
  };
})( jQuery );

