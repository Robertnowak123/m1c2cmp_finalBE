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



$(document).on('page:change', function(event){
  
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







	// $("select").bind("change", function() {

	// 	// name = $(this).attr("name");
	// 	value_geography = $('#geography').val();
	// 	value_commission = $('#commission').val();
	// 	value_hyperlocal = $('#hyperlocal').val();
	// 	value_category = $('#category').val();
	// 	value_name = $('#name').val();
	// 	value_delivery = $('#delivery').val();
	// 	// selector = "[data-" + name + " = '" + value + "']";

	// 	selector_geography = "[data-geography = '" + value_geography + "']";
	// 	selector_commission = "[data-commission = '" + value_commission + "']";
	// 	selector_hyperlocal = "[data-name = '" + value_hyperlocal + "']";
	// 	selector_category = "[data-name = '" + value_category + "']";
	// 	selector_name = "[data-name = '" + value_name + "']";
	// 	selector_delivery = "[data-name = '" + value_delivery + "']";

 //    	var filters = $.map($(selector_geography, selector_commission, selector_hyperlocal, selector_category, selector_name, selector_delivery).toArray(), function(e){
 //        return $(e).val();
 //    	}).join(".");

	// 	$("div.large_rowBox").hide();

	// 	($(selector_geography).closest("div.large_rowBox")) && ($(selector_commission).closest("div.large_rowBox")).each(function(){
	// 			$(this).show();
	// 	}); 


	// 	console.log(selector_name);
	// 	console.log(selector_geography);
	// 	console.log(selector_commission);
	// 	console.log(selector_category);
	// 	console.log(selector_hyperlocal);
	// 	console.log(selector_delivery);
 //    });




	// $("select").on("change", function() {
	// 	name = $(this).attr("name");
	// 	value = $(this).val();
	// 	selector = "[data-" + name + "='" + value + "']";

	// 	$("div.large_rowBox").hide();
	// 	$(selector).closest("div.large_rowBox").each(function(){

	// 		$(this).show();
	// 	});
	// 	console.log(selector);
 //    });


	var filters = [];
	$("select").bind("change", function() {

		name = $(this).attr("name");
		value = $(this).val();
		selector = "[data-" + name + "='" + value + "']";

		
		// filters.push($(this).val());
		filters.push(value);
		var filtersum = filters.join(" ");


		$("div.large_rowBox").hide();		
		$(selector).closest("div.large_rowBox:contains('"+filtersum+"')").each(function(){
	
			$(this).show();	
		}); 

		console.log(selector);
		// console.log(filters);
		console.log(filtersum);
    });














	// $("select").on("change", function() {
	// 	name = $(this).attr("name");
	// 	value = $(this).val();
	// 	selector = "[data-" + name + "='" + value + "']";

	// 	$("div.large_rowBox").hide();
	// 	$(selector).closest("div.large_rowBox").each(function(){

	// 		$(this).show();
	// 	});
	// 	console.log(selector);
 //    });

	// $("#tag_hyperlocal").bind("change", function() {
	// 	$("[data-hyperlocal='true']").closest("div.large_rowBox").toggle();
 //    });








// });

// 	$("#tag_geography").bind("change", function() {
//     	$(".database_table_image:not(." + this.value + ")").each(function(){
//     	$(this).toggle();
//     });
// });	

// 	$("#tag_geography").bind("change", function() {
//     	$(".database_table_image:not(." + this.value + ")").toggle();
// });


 //    var exists = false;
	// $('#tag').click(function(){
	// 	$('.database_input').each(function({
 
 // 	var thevalue = 'value1';
	// var exists = 0 != $('#tag option[value='+thevalue+']').length;
	// var exists = false;
	// 	$('#tag option').each(function(){
 //    		if (this.value == 'bar') {
 //        	exists = true;
 //        	return false;
 //    	}
	// });


	// $('.database_table_image').click(function(){
	// 	$('.database_global').toggleClass('visible');
	// 	console.log('click');
	// });	

// Toggle for logos - end


});