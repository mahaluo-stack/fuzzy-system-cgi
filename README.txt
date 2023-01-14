This is a rest API project using Node.js (v18.12.1, https://nodejs.org/en/) created by Max Häggqvist (maxhaggqvist@gmail.com).
The service returns the most used words in a string.

It uses NPM modules: 
Express v^4.18.2 (https://expressjs.com/)
Body-parser v^1.20.1 (https://www.npmjs.com/package/body-parser)

GETTING STARTED:
To run this program, Node.js (https://nodejs.org/en/download/) needs to be installed on the machine.

Clone the repository: 

After installing Node.js, open a terminal in the root folder of the project and run 'node index.js' to run the program.

The Node server has the route /api/count that accepts json and text headers, and returns the most used words in the text. 
The return format is an array of the most used words, and the number of times each word was used.

Example usage: 

Valid body example: 
curl -X POST -d '{"text": "$$$ — 2134 344 && hello world hello hello lorem ipsum world lorem lorem *"}' -H "Content-Type: application/json" http://localhost:8080/api/count

This will return a JSON object in the following format: 

{"hello":3,"lorem":3,"world":2,"ipsum":1}


Invalid body example: 
curl -X POST -d '{"text": "$$$ — 2134 344 &&  *"}' -H "Content-Type: text/plain" http://localhost:8080/api/count

This will return the error response: 

"No words found in text."

This is because special characters alone and numbers are not considered.



Invalid body example: 
curl -X POST -d '' -H "Content-Type: text/plain" http://localhost:8080/api/count 

This will return the error response: 

"Request body needs some actual text in order to count words."

This is because the data sent was an empty string, and no words could be counted.



API Specifics
Default client throttle is set to 5000 clients per second
Default body size of a request is set to 50kb
Default response array of most frequent words used is set to 10 words
Default port is set to 8080, unless an environment variable exists, in which case it will be preferred