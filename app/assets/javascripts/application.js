// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
// = require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$( document ).ready(function() {
  
	$('.hamburgermenu').on('click', function() {
    	$(this).next().toggleClass("active");
    	console.log('click');

	});

// Toggle for logos - start

	// $('.database_table_image').click(function(){
	// 	$('.database_global').toggleClass("visible");
	// 	console.log('click');
	// });	

	$('.database_table_image').click(function(){
		$(this).next('.rowBox').fadeToggle('visible');
		console.log('click');
	});	

    $(".database_table_image").mouseover(function(){
        $(this).css(
        	"border-color", "green");
    });
    $(".database_table_image").mouseout(function(){
        $(this).css({
        	"border-color": "white",	
        	"z-index": "1000",	
        	});
    });




	// $('.database_table_image').click(function(){
	// 	$('.database_global').toggleClass('visible');
	// 	console.log('click');
	// });	

// Toggle for logos - end


});