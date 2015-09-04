'use strict';
module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            options: {
                mangle: true,
                compress: {},
                drop_console:true
            },
            target: {
                src: 'src/ng-embed.js',
                dest: 'dist/ng-embed.min.js'
            }
        },
        cssmin:{
            options:{
              report:'gzip'
            },
        	minify:{
        		src:'src/ng-embed.css',
        		dest:'dist/ng-embed.min.css'
        	}
        },
        clean:{
          build:'dist/'
        },
        copy:{
            main:{
                expand: true,
                cwd: 'src/',
                src:'images/**',
                dest:'dist/'
            }
        },
         jshint: {
            options: {
                eqeqeq: false,
                curly: true,
                undef: false,
                unused: true,
                loopfunc:true
            },
            target: {
                src: 'src/ng-embed.js'

            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['clean','jshint','uglify','cssmin','copy']);
};
