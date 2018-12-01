var userAgentParser = require('express-useragent');

module.exports = {
    tabCreated: function(req, res, next) {
        const userAgent = req.headers['user-agent'];
        req.prerender.tab.Network.setExtraHTTPHeaders({
			headers: {
				'User-Agent': userAgent
			}
        });
        next();
    }
};
