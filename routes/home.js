module.exports = function(app){
    app.get('/', (req, res) => {
        res.send('welcome to word counter deluxe version 1.0');
        res.end();
    });
}