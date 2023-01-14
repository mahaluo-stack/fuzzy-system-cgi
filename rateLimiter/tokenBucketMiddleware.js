// token bucket function from 
// https://kendru.github.io/javascript/2018/12/28/rate-limiting-in-javascript-with-a-token-bucket/

const path = require('path');
const TokenBucket = require(path.join(__dirname, 'tokenBucketModel'));

module.exports = function (perSecond, maxBurst) {
    const buckets = new Map();

    // Return an Express middleware function
    return function limitRequestsMiddleware(req, res, next) {
        if (!buckets.has(req.ip)) {
            buckets.set(req.ip, new TokenBucket(maxBurst, perSecond));
        }

        const bucketForIP = buckets.get(req.ip);
        if (bucketForIP.take()) {
            next();
        } else {
            res.status(429).send('Client rate limit exceeded');
        }
    }
}