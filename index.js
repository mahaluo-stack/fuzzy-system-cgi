const express = require('express');
const path = require('path');
const helmet = require('helmet');

const app = express();
require(path.join(__dirname, 'routes'))(app);

// helmet sets various headers for slightly increased security
app.use(helmet());

// slightly reduce the chance of evil hackers finding out what software we are running by disabling software fingerprinting 
app.disable('x-powered-by');


const { DEFAULT_PORT } = require(path.join(__dirname, 'util', 'API_CONSTANTS'));
const PORT = process.env.PORT || DEFAULT_PORT;

app.listen(PORT, () => {
    console.log(`express is listening at http://localhost:${PORT}`);
});

app.use((req, res, next) => {
    res.status(404).send("That did not work out!");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!')
})