var installPolyfill = require('../../../../lib/installPolyfill');

module.exports = function() {
	installPolyfill(__dirname, 'array.prototype.findindex/implementation');
};
