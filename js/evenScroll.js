( function( $ ) {

	$.fn.evenScroll = function( slave ) {

		var master	= $(this),
			scroll 	= window.requestAnimationFrame ||
		              window.webkitRequestAnimationFrame ||
		              window.mozRequestAnimationFrame ||
		              window.msRequestAnimationFrame ||
		              window.oRequestAnimationFrame ||
		              function(callback){ window.setTimeout(callback, 100) };

		function position(){

		    var top = window.pageYOffset,
		    	mHeight = master.height(),
				sHeight = $(slave).height(),
				multi 	= mHeight / sHeight;

			if( mHeight > sHeight ) {
				$(slave).css({
			    	'-webkit-transform': 'translate3d(0,'+( top / multi )+'px,0)'
			    });
			} else {
				$(slave).css({
			    	'-webkit-transform': 'translate3d(0,-'+( top / multi )*multi+'px,0)',
			    });
			}

		    
		    
		    scroll( position )
		}

		position();
	};

})( jQuery );