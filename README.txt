META INFO:

This is a REST API project using Node.js (v18.12.1, https://nodejs.org/en/) created by Max Häggqvist Luotomäki (maxhaggqvist@gmail.com).
The service finds and returns the most used words in a string.

It uses NPM modules: 
Express v^4.18.2 (https://expressjs.com/)
Body-parser v^1.20.1 (https://www.npmjs.com/package/body-parser)
Helmet v^6.0.1 (https://helmetjs.github.io/)

The Node server listens on a defaulted port of 8080, unless you set an environment variable yourself.
It has the route /api/count that accepts json and text headers at a default size of 50kb, and at a default returns the 10 most used words in the text. 
The return format is a JSON object containing the most used words, and the number of times each word was used.
It uses a token bucket form of rate limiting to help create an even data flow and prevent flooding, it is set to 1000 clients per second as a default.

---

GETTING STARTED:

To run this program, Node.js (https://nodejs.org/en/download/) needs to be installed on the machine.

Clone the repository: 
git clone https://github.com/mahaluo-stack/fuzzy-system-cgi.git

Download the repository:
https://github.com/mahaluo-stack/fuzzy-system-cgi

Running the server: 
After installing Node.js and downloading the repository, open a terminal (command prompt) in the root folder of the project.

Windows: Open the project folder and press "alt + D" to focus on the adress bar, type cmd and press enter.
Mac: Open the project folder, if there is no path bar at the bottom of the Finder window, choose View -> Show Path Bar, ctrl click the folder and choose "open terminal".

Now run the command "node index.js" to run the Node server.

---

EXAMPLE USAGE TEST COMMANDS:

cURL with valid body example: 
curl -X POST -d '{"text": "$$$ — 2134 344 && hello world hello hello lorem ipsum world lorem lorem *"}' -H "Content-Type: application/json" http://localhost:8080/api/count

This will return a JSON object in the following format: 

{"hello":3,"lorem":3,"world":2,"ipsum":1}


cURL with invalid body example: 
curl -X POST -d '{"text": "$$$ — 2134 344 &&  *"}' -H "Content-Type: text/plain" http://localhost:8080/api/count

This will return the error response: 

"No words found in text."

This is because special characters and numbers alone are not considered.


cURL with invalid body example: 
curl -X POST -d '' -H "Content-Type: text/plain" http://localhost:8080/api/count 

This will return the error response: 

"Request body needs some actual text in order to count words."

This is because the data sent was an empty string, and no words could be counted.

---

API SPECIFICS:

Default client throttle is set to 5000 clients per second.
Default body size of a request is set to 50kb.
Default response array of most frequent words used is set to 10 words.
Default port is set to 8080, unless an environment variable exists, in which case it will be preferred.

To edit these default variables, find the file "API_CONSTANTS.js" in the util folder.

---