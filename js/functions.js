$(function () {

    // Instantiate MixItUp:

    $('.portfolio').mixItUp({
        animation: {
                    animateResizeContainer: false
	            },
        selectors: {
            target: 'article',
            filter: 'li'
        }
    });
    $().showUp('nav', {
        downClass: 'nav-up'
      });


});