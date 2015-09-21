module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['../javascripts/**/*.js']
    },
    watch: {
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint']
      },
      sassy: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      }
    },
    sass: {
      dist: {
        files: {
          '../styles/main.css': '../sass/main.scss',
        }
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'watch']);
};