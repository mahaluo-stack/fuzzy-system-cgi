const bodyParser = require('body-parser');
const path = require('path');

// function to find the most frequently used words
const { getFrequents } = require(path.join(__dirname, '..', 'util', 'frequenceCounter'));
// limit constants for number of serviceable clients per second and request body size
const { CLIENT, BODY_PARSER } = require(path.join(__dirname, '..', 'util', 'API_CONSTANTS'));
// middleware to limit requests
const limitRequestsMiddleware = require(path.join(__dirname, '..', 'rateLimiter', 'tokenBucketMiddleware'));

module.exports = function (app) {
    // bodyParse, handle text/plain and application/json content
    // limitRequestsMiddleware, limit the amount of serviceable clients per second
    app.post('/api/count', limitRequestsMiddleware(CLIENT, 10), bodyParser.text({ type: ['json', 'text'], limit: BODY_PARSER }), (req, res) => {
        if (!req.body || req.body.length === 0) {
            res.status(400).send('Request body needs some actual text in order to count words. \n');
        }
        else {
            // is the body a JSON object or raw text?
            try {
                let json = Object.values(JSON.parse(req.body));
                try {
                    res.send(getFrequents(JSON.stringify(json)));
                } catch (error) {
                    res.status(400).send(error);
                }
            } catch (error) {
                // error = req.body was raw text, "unexpected token in JSON~"
                try {
                    res.send(getFrequents(req.body));
                } catch (error) {
                    res.status(400).send(error);
                }
            }
        }
        res.end();
    });
}