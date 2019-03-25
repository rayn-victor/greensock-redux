(() => {

console.log("javascript linked up");

	const 	badge		= document.querySelector('img'),
			headerText	= document.querySelector('h1');
			footerText	= document.querySelector('h3');

	function animImage() {
		TweenMax.to(badge, 1.2, { scaleX: 1, scaleY: 1, rotation: 50, ease:Elastic.easeOut, onComplete:animFooterText});
	}		

	function animFooterText() {
		TweenMax.to(footerText, 0.7, { scaleX: 2, scaleY: 2, ease:Bounce.easeOut})
	}

	badge.addEventListener('mouseover', animImage);

})();