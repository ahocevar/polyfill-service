var installPolyfill = require('../../lib/installPolyfill');

module.exports = function() {
	installPolyfill(__dirname, 'audio-context-polyfill/AudioContext.js');
};
