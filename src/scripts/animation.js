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

//-----------------------------------------------------------------
// Intro Animation
//-----------------------------------------------------------------

$(window).load(function() {

	if (typeof(Storage) != "undefined" && splashScreenEnabled) {

		// Reset
		// localStorage.splashScreenViewed = "";

		if (!splashScreenViewed) {
			lvPage.css('visibility', 'visible');
			splashScreen.css('visibility', 'visible').transition({ opacity: 0, delay: 1500 }, 1000, function(){ $(this).remove();});

			// Store site visit
			localStorage.splashScreenViewed = true;
			return;
		}
	}

	// Reset it
	localStorage.splashScreenViewed = "";

	lvPage.css('visibility', 'visible');
	splashScreen.remove();
});

//==================================================
//
//==================================================