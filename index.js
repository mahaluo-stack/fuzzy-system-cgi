const express = require('express');
const path = require('path');

const app = express();
require(path.join(__dirname, 'routes'))(app);

const { DEFAULT_PORT } = require(path.join(__dirname, 'util', 'API_CONSTANTS'));
const PORT = process.env.PORT || DEFAULT_PORT;

app.listen(PORT, () => {
    console.log(`express is listening at http://localhost:${PORT}`);
});