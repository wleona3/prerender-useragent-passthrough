var useragent = require('express-useragent');

module.exports = {
    onPhantomPageCreate: function(phantom, req, res, next) {
        req.prerender.page.run(req.headers['user-agent'], function(userAgent, resolve,reject) {
            this.settings.userAgent = userAgent;
            resolve();
        }).then(next);
    }
}
