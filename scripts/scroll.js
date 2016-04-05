var controller,
  wipeAnimation;


$(function () { // wait for document ready
		// init
		controller = new ScrollMagic.Controller();

		// define movement of panels
		// wipeAnimation = new TimelineMax();
    //
    // $('.slide').slice(1).each(function(index, slide) {
    //   console.log('sections',slide );
    //   wipeAnimation.fromTo(slide, 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})  // in from left
    // })
    //
    //
    //
    //
    // var height = ($('.slide').length-1) * 100;
		// // create scene to pin and link animation
		// new ScrollMagic.Scene({
		// 		triggerElement: "#slides",
		// 		triggerHook: "onLeave",
		// 		duration: height+"%"
		// 	})
		// 	.setPin("#slides")
    //   .on ('enter',function() {
    //     $('#section-name').hide();
    //
    //   })
    //   .on('leave',function() {
    //     $('#section-name').show();
    //   })
		// 	.setTween(wipeAnimation)
		// 	//.addIndicators() // add indicators (requires plugin)
		// 	.addTo(controller);


    new ScrollMagic.Scene({
      triggerElement: "#partners",
      duration: "100%"

    })
    .on ('enter',function() {
      $('#section-name').text('Partners')
    })
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#board",
      duration: "100%"

    })
    .on ('enter',function() {
      $('#section-name').text('Board')
    })
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);


    new ScrollMagic.Scene({
      triggerElement: "#projects",
      duration: "100%"

    })
    .on ('enter',function() {
      $('#section-name').text('Projects')
    })
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#news",
      duration: "100%"

    })
    .on ('enter',function() {
      $('#section-name').text('News')
    })

    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);






	});
