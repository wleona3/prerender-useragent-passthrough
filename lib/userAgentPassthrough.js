var userAgentParser = require('express-useragent');

module.exports = {
    beforeSend: function(req, res, next) {
        const userAgent = req.headers['user-agent'];
        const ua = userAgentParser.parse(userAgent);
        req.prerender.page.run(userAgent, ua.isMobile, us.isBot, function(userAgent, isMobile, isBot, resolve, reject) {
            if (isMobile) {
                this.viewportSize = {
                    width: 375,
                    height: 667
                };
            }
            if (!isBot) {
                this.settings.userAgent = userAgent;
            }
            resolve();
        }).then(next);
    }
};
