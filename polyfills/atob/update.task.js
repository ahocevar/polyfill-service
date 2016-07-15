var installPolyfill = require('../../lib/installPolyfill');

module.exports = function() {
	installPolyfill(__dirname, 'Base64/base64.js');
};
