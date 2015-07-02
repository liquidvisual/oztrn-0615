/*
    ANIMATION.JS - Last updated: 03.07.15

    - Notes -

    Uses jQuery Transit for animations
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------

var isHomepage = $('.home-theme').length;
var animationEnabled = $('.animation-enabled').length;

//-----------------------------------------------------------------
// Intro Animation
//-----------------------------------------------------------------

$(window).load(function() {

	if (isHomepage && animationEnabled) {
		$('.main-body').transition({ opacity: 100, delay: 0 }, 2000);
		$('.main-side-panel').transition({ opacity: 100, delay: 1500 }, 2000);
		$('.global-header, .sidebar').transition({ opacity: 100, delay: 2000 }, 2000);
	}
});

//==================================================
//
//==================================================