$( function() {
    $( ".logotype" ).mgGlitch({
      // set 'true' to stop the plugin
              destroy : false, 
      // set 'false' to stop glitching
      glitch: true, 
      // set 'false' to stop scaling
      scale: true, 
      // set 'false' to stop glitch blending
      blend : true, 
      // select blend mode type
      blendModeType : 'hue',
      // set min time for glitch 1 elem
      glitch1TimeMin : 200, 
      // set max time for glitch 1 elem
      glitch1TimeMax : 400,
      // set min time for glitch 2 elem
      glitch2TimeMin : 10, 
      // set max time for glitch 2 elem
      glitch2TimeMax : 100, 
    });
});


// open discord
$('#btn-discord').on('click', function (){
  $('#pop-up-discort').addClass('pop-up-wrapper_active');
});

// open twitter
$('#btn-twitter').on('click', function (){
  $('#pop-up-twitter').addClass('pop-up-wrapper_active');
});

// open whitepaper
$('#btn-whitepaper').on('click', function (){
  $('#pop-up-whitepaper').addClass('pop-up-wrapper_active');
});

// open operetion_plan
$('#operetion_plan').on('click', function (){
  $('#pop-up-operetion_plan').addClass('pop-up-wrapper_active');
});

// open hackers_ID
$('#hackers_ID').on('click', function (){
  $('#pop-up-hackers_ID').addClass('pop-up-wrapper_active');
});

// open spam
$('#spam').on('click', function (){
  $('#pop-up-spam').addClass('pop-up-wrapper_active');
});

// open cube
$('#cube').on('click', function (){
  $('#pop-up-cube').addClass('pop-up-wrapper_active');
});

// open hack
$('#hack').on('click', function (){
  $('#pop-up-hack').addClass('pop-up-wrapper_active');
});



// close discord
$('.pop-up-header__close').on('click', function (){
  $('.pop-up-wrapper').removeClass('pop-up-wrapper_active');
});