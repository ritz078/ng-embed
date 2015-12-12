var babel = require('rollup-plugin-babel');

var config = {
	entry: 'test/index.test.js',
	dest: 'test/bundle.test.js',
	format: 'cjs',
	plugins: [
		babel()
	]
};

module.exports = config;
