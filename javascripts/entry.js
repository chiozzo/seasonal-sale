require.config({
    baseUrl: './javascripts',

    paths: {
      'jquery': '../lib/bower_components/jquery/dist/jquery.min',
      'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
      "hbs": "../lib/bower_components/require-handlebars-plugin/hbs"
    },
    shim : {
    "bootstrap" : { "deps" :['jquery']},
    }
});

require(["jquery", "bootstrap"],function($) {
  console.log("require Working");

$.ajax({
    url: "../json/dog-food.json",
  }).done(function(dogFood) {

    console.log("dog-food JSON", dogFood);

    require(['hbs!../templates/dog-food'], function(foodTemplate) {
      $(foodTemplate(dogFood)).prependTo("#dog-food");
    });
  });

});
