require.config({
    baseUrl: './javascripts',

    paths: {
      'jquery': '../lib/bower_components/jquery/dist/jquery.min',
      'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
      "material": "../lib/bower_components/bootstrap-material-design/dist/js/material.min",
      "hbs": "../lib/bower_components/require-handlebars-plugin/hbs"
    },
    shim : {
    "bootstrap" : { "deps" :['jquery']},
    "material": ["bootstrap"],
    }
});

require(["jquery", "bootstrap", "material"],function($) {
  console.log("require Working");

  $.material.init();

  $.ajax({
    url: "../json/dog-food.json",
  }).done(function(dogFood) {

    console.log("dog-food JSON", dogFood);

    require(['hbs!../templates/dog-food'], function(foodTemplate) {
      $(foodTemplate(dogFood)).prependTo("#dog-food");
    });
  });

  $.ajax({
    url: "../json/cat-food.json",
  }).done(function(catFood) {

    console.log("cat-food JSON", catFood);

    require(['hbs!../templates/cat-food'], function(foodTemplate) {
      $(foodTemplate(catFood)).prependTo("#cat-food");
    });
  });
});
