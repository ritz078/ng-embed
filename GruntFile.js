module.exports = function (grunt) {

	require('load-grunt-tasks')(grunt);
	var babel = require('rollup-plugin-babel');

	grunt.initConfig({
		// Import package manifest
		pkg: grunt.file.readJSON("package.json"),

		projectName:"<%= pkg.name %>",

		// Banner definitions
		meta: {
			banner: "/*\n" +
			" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
			" *  <%= pkg.description %>\n" +
			" *  <%= pkg.homepage %>\n" +
			" *\n" +
			" *  Made by <%= pkg.author.name %>\n" +
			" *  Under <%= pkg.license %> License\n" +
			" */\n"
		},

		eslint: {
			target: ['src/**/*.js']
		},


		rollup: {
			options: {
				format       : 'umd',
				banner       : "<%= meta.banner %>",
				sourceMap    : true,
				useStrict    : true,
				sourceMapFile: 'dist/<%= projectName %>.js',
				plugins      : [
					babel()
				]
			},
			files  : {
				src : 'src/<%= projectName %>.js',
				dest: 'dist/<%= projectName %>.js'
			}
		},

		watch:{
			js:{
				files:["src/**/*.js"],
				tasks:["eslint","rollup","uglify"]
			}
		},

		uglify:{
			options: {
				banner: "<%= meta.banner %>",
				mangle: true,
				compress: {
					sequences    : true,
					dead_code    : true,
					conditionals : true,
					booleans     : true,
					unused       : true,
					if_return    : true,
					join_vars    : true,
					drop_console : true
				}
			},
			build: {
				files: {
					"dist/<%= projectName %>.min.js": "src/<%= projectName %>.js"
				}
			}
		}


	});

	grunt.registerTask("default", ["eslint","rollup"]);
	grunt.registerTask("build",["eslint","rollup","uglify"]);
};
