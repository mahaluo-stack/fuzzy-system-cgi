const express = require('express');
const path = require('path');
const helmet = require('helmet');

const app = express();
require(path.join(__dirname, 'routes'))(app);

// helmet sets various headers for slightly increased security
app.use(helmet());

// slightly reduce the chance of evil hackers finding out what software we are running by disabling software fingerprinting 
app.disable('x-powered-by');

// set the port, it will default to the variable set in /util/API_CONSTANTS (8080) if there is no environment variable
const { DEFAULT_PORT } = require(path.join(__dirname, 'util', 'API_CONSTANTS'));
const PORT = process.env.PORT || DEFAULT_PORT;

app.listen(PORT, () => {
    console.log(`express is listening at http://localhost:${PORT}`);
});

// handle unexpected 404 error
app.use((req, res, next) => {
    res.status(404).send("That did not work out!");
});

// handle unexpected 500 error
app.use((err, req, res, next) => {
    res.status(500).send('Something broke!')
});