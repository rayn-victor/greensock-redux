(() => {

console.log("javascript linked up");

	let myTl = new TimelineLite();

	myTl.to("#background", 0.5, {rotation: 180, scaleX: 1.05, scaleY: 1.05, transformOrigin: "50% 50%"}).to("#small_type", 1, {rotation: -360, transformOrigin: "50% 50%"}).to("h3", 1.5, { scaleX: 2, scaleY: 2, ease: Elastic.easeOut});

})();