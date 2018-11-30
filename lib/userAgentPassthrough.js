var userAgentParser = require('express-useragent');

module.exports = {
    requestRecieved: function(req, res, next) {
        const userAgent = req.headers['user-agent'];
        req.prerender.userAgent = userAgent;
        next();
    }
};
