# prerender-useragent-passthrough [![npm version](https://badge.fury.io/js/prerender-useragent-passthrough.svg)](https://badge.fury.io/js/prerender-useragent-passthrough)
A plugin for [Prerender](https://github.com/prerender/prerender) which makes it pass through the request user-agent instead of masking it.
This is intended for sites that serve different content based on the request user agent.

## Usage
Add this to your Prerender server.js:
```
server.use(require('prerender-useragent-passthrough'));
```
