var controller,
  wipeAnimation;


$(function () { // wait for document ready

  $('.navbar-toggler').click( function(){

    if($(this).hasClass('nav-visible')) {
      $('#full-nav').velocity("fadeOut", { duration: 500 });
      $(this).removeClass('nav-visible');
      $('.nav-item').removeClass('visible');
    } else {
      $('#full-nav').velocity("fadeIn", { display: "flex", duration: 500 });
      $(this).addClass('nav-visible');
      $('.nav-item').addClass('visible');
    }

  });

  $('.nav-item').click( function(){

    // $.scrollify.disable();

    $('#slide-dots').addClass('hidden');
    $('.slide-dot').css( 'background-color', 'rgba(255,255,255,.5)');
    $('.nav-item.active').removeClass('active');
    $(this).addClass('active');
    $('.navbar-toggler').removeClass('nav-visible');
    $('#full-nav').velocity("fadeOut", { duration: 500 });

    // setTimeout(function(){
    //   $.scrollify.enable();
    // }, 500);
  });

  var controller = new ScrollMagic.Controller();

  var wipeAnimation = new TimelineMax()
    // animate to second panel
    //.fromTo("#slide-1", 1, {y: "0%"}, {y: "0%", ease: Linear.easeNone})  // in from left
		.fromTo("#slide-2",    1, {y:  "100%", z:"0%"}, {y: "0%",z:"-50%", ease: Linear.easeNone})  // in from right



    new ScrollMagic.Scene({
  				triggerElement: "#slides",
  				triggerHook: "onLeave",
  				duration: "100%"
  			})
  			.setPin("#slides")
  			.setTween(wipeAnimation)
  			.addTo(controller);

  // $.scrollify({
  //   section : ".slide",
  //   sectionName: false,
  //   setHeights:false,
  //   standardScrollElements:'#main-content'
  //   // before:function(index) {
  //   //   // console.log(index);
  //   //
  //   //   var color = $('#slide-' + (index + 1)).data('color');
  //   //   // $('#slide-dot-' + (index + 1)).css( 'background-color', color);
  //   //   // $('#slide-dot-' + index).css( 'background-color', 'rgba(255,255,255,.5)');
  //   //   // $('#slide-dot-' + (index + 2)).css( 'background-color', 'rgba(255,255,255,.5)');
  //   //
  //   //   if(index == 4){
  //   //     $('#slide-dots').addClass('hidden');
  //   //     $('#section-name').addClass('visible');
  //   //     $('.navbar-toggler').addClass('in-main');
  //   //     $('#logo').addClass('hidden');
  //   //   } else {
  //   //     $('#slide-dots').removeClass('hidden');
  //   //     $('#section-name').removeClass('visible');
  //   //     $('.nav-item.active').removeClass('active');
  //   //     $('.navbar-toggler').removeClass('in-main');
  //   //     $('#logo').removeClass('hidden');
  //   //   }
  //   //
  //   // }
  // });

//   $('body').scrollspy({ target: '#full-nav' });
//
//   $('body').on('activate.bs.scrollspy', function (event) {
//   // do something…
//   console.log('activated', event)
// })


  // $( "#main-content .section-full" ).each(function( index ) {
  //   var sectionTitle = $(this).data('title');
  //   $(window).scroll(function() {
  //     if (sectionPosition - $(window).scrollTop() <= 0) {
  //       $('#section-name').text(sectionTitle);
  //       $('.nav-item.active').removeClass('active');
  //       $('#nav-item-' + sectionTitle).addClass('active');
  //     }
  //
  //   });
  // });
  //




  //

  var activeSection = '';


  $(window).scroll(function() {


    var scrollPosition= $(document).scrollTop();

    var scrollPositionSection = scrollPosition + 172;




    $( ".js-section" ).each(function( index ) {
      var sectionTitle = $(this).data('title');

      var element = $(this);


			if (element.position().top <= scrollPositionSection && element.position().top + element.height() > scrollPositionSection && activeSection != sectionTitle) {
        console.log('Section:', sectionTitle);

        activeSection = sectionTitle;

        if (sectionTitle ) {
          $('.nav-item.active').removeClass('active');
          $('#nav-item-' + sectionTitle).addClass('active');
          $('#section-name').text(sectionTitle);
          $('#section-name').addClass('visible');
          $('#logo').addClass('hidden');

          $('.navbar-toggler').addClass('in-main');


        } else {
          $('#section-name').text('');
          $('#section-name').removeClass('visible');
          $('#logo').removeClass('hidden');
          $('.navbar-toggler').removeClass('in-main');



        }



			}
    });

  });


  // $(window).scroll(function() {
  //   console.log("Board: " + $("#board").offset().top);
  //   console.log("Window:" + $(window).scrollTop());
  //
  // });


  // var controller = new ScrollMagic.Controller();
  //
  // var scene = new ScrollMagic.Scene({
  //       triggerElement: '#main-content',
  //       triggerHook: 0
  //     })
  //     // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
  //     .on('enter', function(){
  //
  //     })
  //     .on('leave', function(){
  //
  //     })
  //     .addTo(controller);


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


    // new ScrollMagic.Scene({
    //   triggerElement: "#partners",
    //   duration: "100%"
    //
    // })
    // .on ('enter',function() {
    //   $('#section-name').text('Partners')
    // })
    // // .addIndicators() // add indicators (requires plugin)
    // .addTo(controller);
    //
    // new ScrollMagic.Scene({
    //   triggerElement: "#board",
    //   duration: "100%"
    //
    // })
    // .on ('enter',function() {
    //   $('#section-name').text('Board')
    // })
    // // .addIndicators() // add indicators (requires plugin)
    // .addTo(controller);
    //
    //
    // new ScrollMagic.Scene({
    //   triggerElement: "#projects",
    //   duration: "100%"
    //
    // })
    // .on ('enter',function() {
    //   $('#section-name').text('Projects')
    // })
    // // .addIndicators() // add indicators (requires plugin)
    // .addTo(controller);
    //
    // new ScrollMagic.Scene({
    //   triggerElement: "#news",
    //   duration: "100%"
    //
    // })
    // .on ('enter',function() {
    //   $('#section-name').text('News')
    // })
    //
    // // .addIndicators() // add indicators (requires plugin)
    // .addTo(controller);

});
