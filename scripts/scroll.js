var controller,
  wipeAnimation;


$(function () { // wait for document ready

  // $('#fullpage').fullpage({
  //     anchors:['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide', 'mainSection'],
  //     normalScrollElements: '#main',
  //     scrollOverflow: true,
  //
  //     onLeave: function(index, nextIndex, direction){
  //
  //       var color = $('#slide-' + nextIndex).data('color');
  //       $('#slide-dot-' + nextIndex).css( 'background-color', color);
  //       $('#slide-dot-' + index).css( 'background-color', 'rgba(255,255,255,.5)');
  //
  //       if(index == 4 && direction =='down'){
  //           $('#slide-dots').addClass('hidden');
  //       }
  //
  //       else if(index == 5 && direction == 'up'){
  //         $('#slide-dots').removeClass('hidden');
  //       }
  //     }
  //
  // });




		// init
		 var controller = new ScrollMagic.Controller();

     var slides = $('.slide');

     $.each(slides, function(index, value){

       var triggerElement = "#slide-" + (index + 1) + " .card";
       var backgroundImage = "linear-gradient(" + $(value).data('color') + ", " + $(value).data('color') + "), url('" + $(value).data('image') + "')";

       var scene = new ScrollMagic.Scene({
             triggerElement: triggerElement, duration: '100%'
           })
          //  .setTween("#background-image", 0.5, {backgroundImage: backgroundImage}) // trigger a TweenMax.to tween
           .addIndicators({name: "1 (duration: 0)"+backgroundImage}) // add indicators (requires plugin)
           .on("enter", function(){

             $("#background-image").css('background-image',backgroundImage );
             console.log(backgroundImage);
           })
           .addTo(controller);

     });

    //  var scene = new ScrollMagic.Scene({
    //        triggerElement: "#slide-2 .card"
    //      })
    //      .setTween("#background-image", 0.5, {backgroundImage: "linear-gradient(rgba(94,155,120,.5),rgba(94,155,120,.5)), url('/uploads/Girl_measured@2x.jpg')"}) // trigger a TweenMax.to tween
    //      .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    //      .addTo(controller);
     //
    //      var scene = new ScrollMagic.Scene({
    //            triggerElement: "#slide-3 .card"
    //          })
    //          .setTween("#background-image", 0.5, {backgroundImage: "linear-gradient(rgba(255,255,220,.5),rgba(255,255,220,.5)), url('/uploads/Girl_measured@2x.jpg')"}) // trigger a TweenMax.to tween
    //          .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    //          .addTo(controller);

        //  scene.on("enter", function (event) {
        //      console.log(event.target);
        //  });

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
