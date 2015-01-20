/*
* Harsh Gruntfile
* url
* @author Harsh
*/
'use strict';


module.exports = function(grunt) {
  //Loading packages using matchdep package
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
    
    project : {
      app : 'app', 
      assets : '<%= project.app %>/assets',
      stylesheets : '<%= project.assets %>/sass'
    },

    'http-server': {

        'dev': {

            // the server root directory
            root: "app/",

            port: 8282,
            // port: function() { return 8282; }

            host: "127.0.0.1",

            //cache: '',
            showDir : true,
            autoIndex: true,

            // server default file extension
            ext: "html",

            // run in parallel with other tasks
            //runInBackground: true|false

        }

    }
  });

  grunt.registerTask('default', [
    //'sass:dev',
    //'htmlhint',
    //'watch'
    'http-server'
  ]);
};