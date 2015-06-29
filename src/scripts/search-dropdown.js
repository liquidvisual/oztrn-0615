/*
    SEARCH-DROPDOWN.JS - Last updated: 26.06.15
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// Used in main navigation
//-----------------------------------------------------------------

$('.global-navigation .search a').click(function(event){
	event.preventDefault();
	$('.lv-page').toggleClass('search-enabled');
});

$('.global-search .close-btn').click(function(event){
	event.preventDefault();
	$('.lv-page').removeClass('search-enabled');
});

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------