var userAgentParser = require('express-useragent');

module.exports = {
    onPhantomPageCreate: function(phantom, req, res, next) {
        const userAgent = req.headers['user-agent'];
        const ua = userAgentParser.parse(userAgent);
        req.prerender.page.run(userAgent, ua.isMobile, function(userAgent, isMobile, resolve, reject) {
            if (isMobile) {
                this.viewportSize = {
                    width: 375,
                    height: 667
                };
            }
            if (userAgent.indexOf('facebookexternalhit') === -1 && userAgent.indexOf('twitterbot') === -1) {
                this.settings.userAgent = userAgent;
            }
            resolve();
        }).then(next);
    }
};
