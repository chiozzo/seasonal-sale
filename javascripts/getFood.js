define(["jquery"], function($) {

return {
	dogFood: function() {
		$.ajax({
  	  url: "../json/dog-food.json",
	  }).done(function(dogFood) {

	    console.log("dog-food JSON", dogFood);

	    require(['hbs!../templates/dog-food'], function(foodTemplate) {
	      $(foodTemplate(dogFood)).prependTo("#dog-food");
	    });
	  });
	},
	catFood: function() {
	  $.ajax({
	    url: "../json/cat-food.json",
	  }).done(function(catFood) {

	    console.log("cat-food JSON", catFood);

	    require(['hbs!../templates/cat-food'], function(foodTemplate) {
	      $(foodTemplate(catFood)).prependTo("#cat-food");
	    });
	  });
	}
};

});