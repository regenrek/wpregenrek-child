// Gruntfile for child Theme (see grunt-hub)
'use strict';
module.exports = function (grunt) {

  grunt.initConfig({

     less: {
      dist: {
        files: {
          'assets/css/child.min.css': [
            'assets/less/app.less'
          ]
        },
        options: {
          compress: true
        }
      }
    }


  });

  //grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('build', [
    'less'
  ]);

};