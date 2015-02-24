'use strict';
module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            options: {
                mangle: true,
                compress: true
            },
            target: {
                src: 'src/ng-emoticons.js',
                dest: 'dist/ng-emoticons.min.js'
            }
        },
        cssmin:{
        	minify:{
        		src:'src/ng-emoticons.css',
        		dest:'dist/ng-emoticons.min.css'
        	}
        },
         jshint: {
            options: {
                eqeqeq: false,
                curly: true,
                undef: false,
                unused: true
            },
            target: {
                src: 'src/ng-emoticons.js'

            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['jshint','uglify','cssmin']);
};
