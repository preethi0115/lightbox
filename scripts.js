// Loading Lightbox on intial page load
window.onload=function() {
   var lightbox = document.getElementById("overlay");
	lightbox.setAttribute('style',"'display: block");
 }
 
 // Make lightbox responsive on window scroll
window.onscroll= function() {	
	var lightbox = document.getElementById('overlay');
	
	// fetch viewport dimensions
	var elem = (document.compatMode === "CSS1Compat") ?  document.documentElement :  document.body;
	var initialWidth = (elem.clientWidth * 80)/ 100;
	var initialHeight = elem.clientHeight;
	
	//
	var finalWidth = initialWidth / 3;
	var diffWidth = initialWidth - finalWidth;
	
	var scrollFromTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	
	var newSize = initialWidth - (diffWidth * (scrollFromTop / initialHeight));
	
	// Condition to check the width of window - lightbox will have fixed width once the new width (responsive width on scroll) id equal or less that 1/3 of intial width
	if(newSize > finalWidth){
		lightbox.setAttribute('style','width: '+newSize+'px ;margin-top:'+ scrollFromTop + 'px; font-size:1.4vw; line-height:1.6vw');
	}else{
		lightbox.setAttribute('style','width: '+finalWidth+'px ;margin-top:'+ scrollFromTop + 'px; font-size:1.2vw;line-height:1.4vw');
	}
	
};

