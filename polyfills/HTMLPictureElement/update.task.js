var installPolyfill = require('../../lib/installPolyfill');

module.exports = function() {
	installPolyfill(__dirname, 'picturefill/dist/picturefill.min.js');
	installPolyfill(__dirname, 'picturefill/dist/plugins/mutation/pf.mutation.min.js');
};
