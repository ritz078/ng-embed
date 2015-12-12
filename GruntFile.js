module.exports = function (grunt) {

	require('load-grunt-tasks')(grunt);
	var babel = require('rollup-plugin-babel');

	grunt.initConfig({
		// Import package manifest
		pkg: grunt.file.readJSON("package.json"),

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
				externals    : ['regeneratorRuntime'],
				sourceMap    : true,
				useStrict    : true,
				sourceMapFile: 'src/embed.js',
				plugins      : [
					babel()
				]
			},
			files  : {
				src : 'src/lunar.js',
				dest: 'dist/lunar.js'
			}
		}


	});

	grunt.registerTask("default", ["eslint","rollup"]);
};
