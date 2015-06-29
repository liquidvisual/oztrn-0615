/*
    SPLASH-SCREEN.JS - Last updated: 30.06.15

    - Notes -

    Uses jQuery Transit for animations
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------

var lvPage = $('.lv-page');
var splashScreen = $('.splash-screen');
var splashScreenViewed = localStorage.splashScreenViewed;
var splashScreenEnabled = $('.splash-screen-enabled').length;

var hasLocalStorage = typeof(Storage) != "undefined";

//-----------------------------------------------------------------
// Intro Animation
//-----------------------------------------------------------------

$(window).load(function() {
	if (hasLocalStorage && splashScreenEnabled) {
		if (!splashScreenViewed) {
			lvPage.css('visibility', 'visible');
			splashScreen.css('visibility', 'visible').transition({ opacity: 0, delay: 1500 }, 1000, function(){ $(this).remove();});
			localStorage.splashScreenViewed = true; // Store site visit
			return;
		}
	} else {
		// Reset it
		localStorage.removeItem("splashScreenViewed");
	}

	// If seen already
	lvPage.css('visibility', 'visible');
	splashScreen.remove();
});

//==================================================
//
//==================================================

// Reset
// localStorage.splashScreenViewed = "";