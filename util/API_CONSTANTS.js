module.exports = { 
    // number of clients to server per second
    CLIENT: 5000,
    // size of request body
    BODY_PARSER: '50kb',
    // size of array sent back (sends back the top 10 most used words)
    RESPONSE_ARRAY: 10,
    // port to listen to unless existing environment variable
    DEFAULT_PORT: 8080
}