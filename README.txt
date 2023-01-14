META INFO:

This is a REST API project using Node.js (v18.12.1, https://nodejs.org/en/) created by Max Häggqvist Luotomäki (maxhaggqvist@gmail.com).
The service finds and returns the most used words in a string.

The project uses NPM (https://www.npmjs.com/) dependencies: 
Express v^4.18.2 (https://expressjs.com/).
Body-parser v^1.20.1 (https://www.npmjs.com/package/body-parser).
Helmet v^6.0.1 (https://helmetjs.github.io/).

The Node server listens on a defaulted port of 8080, unless you set an environment variable yourself.
It has the route /api/count that accepts json and text headers at a default size of 50kb, and at a default returns the 10 most used words in the text. 
The return format is a JSON object containing the most used words, and the number of times each word was used.
It uses a token bucket form of rate limiting to help create an even data flow and prevent flooding, it is set to 1000 clients per second as a default.

---

LICENSING:

This project is ISC licensed.
Express is MIT licensed.
Body-parser is MIT licensed.
Helmet is MIT licensed.

Read more about the ISC license at https://opensource.org/licenses/ISC.
Read more about the MIT license at https://opensource.org/licenses/MIT.

---

GETTING STARTED:

This guide requires running commands in a terminal (command prompt), often in a specific folder.

Windows: Open the project folder and press "alt + D" to focus on the adress bar, type cmd and press enter.
Mac: Open the project folder, if there is no path bar at the bottom of the Finder window, choose View -> Show Path Bar, then ctrl click the folder at the bottom and choose "open terminal".

To run the program, Node.js (https://nodejs.org/en/download/) also needs to be installed on the machine.

The project uses NPM dependencies that will need to be installed before it can run. 
To get started with NPM, see https://docs.npmjs.com/getting-started.

To clone the repository using git:
See https://docs.github.com/en/get-started/getting-started-with-git.
Create a folder to clone the project into, open a terminal in the folder and run the command "git clone https://github.com/mahaluo-stack/fuzzy-system-cgi.git".

To download the repository:
https://github.com/mahaluo-stack/fuzzy-system-cgi Press "Code" and "Download ZIP". Unzip the downloaded file.

Running the server: 
After installing Node.js and cloning or downloading the repository, open a terminal in the root folder of the project.

To install dependencies, run the command "npm install".
To start the server, run the command "node index.js".

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

Default client throttle is set to 1000 clients per second.
Default body size of a request is set to 50kb.
Default response array of most frequent words used is set to 10 words.
Default port is set to 8080, unless an environment variable exists, in which case it will be preferred.

To edit these default variables, find the file "API_CONSTANTS.js" in the util folder and change the values.

---

MAINTENANCE: 

For setting environment variables, you can use the NPM package dotenv (https://www.npmjs.com/package/dotenv).
It is highly recommended to use environment variables for API keys and tokens that are secret. 
Also make sure to add the ".env" file to the .gitignore list, so it does not get uploaded to your repository.

Make sure to keep Node.js updated at https://nodejs.org/en/download/.
To check what version you have installed, open a terminal anywhere and run the command "node -v".

Always make sure to run the latest version of Express (https://expressjs.com/).
Stay updated on security issues at https://expressjs.com/en/advanced/security-updates.html.

Make sure to update and run the latest versions of all NPM dependencies. 
See "dependencies" in the file "package.json" in the root folder of the project.
Open a terminal in the root folder of the project and run the command "npm audit" to scan the dependencies for vulnerabilities.

You may also consider using Snyk (https://snyk.io/) for managing dependencies.
Read more about using Snyk to maintain NPM dependencies at https://snyk.io/blog/how-to-maintain-npm-dependencies-in-your-project/.

Consider installing Nodemon (https://www.npmjs.com/package/nodemon) on your machine for a more pleasant developer environment when working on the project.

---