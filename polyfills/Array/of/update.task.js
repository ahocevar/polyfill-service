var installPolyfill = require('../../../lib/installPolyfill');

module.exports = function() {
	installPolyfill(__dirname, 'array.of/array-of.js');
};
