// regex split found at:
// https://stackoverflow.com/a/70076559

const path = require('path');
const { RESPONSE_ARRAY } = require(path.join(__dirname, 'API_CONSTANTS'));

module.exports = {
    getFrequents: function (text) {
        let wordSplit;
        let res = {};
      
        // split the text into words, remove spaces, numbers and special characters, .match returns an array
        try {
            wordSplit = text.match(/[a-zA-Z]+'?[a-zA-Z]+/g);
        } catch (error) {
            return 'Matching regex expression failed. \n';
        }

        // sort the object unless null, return array of most used words
        if (wordSplit === null) {
            throw 'No words found in text. \n';
        }
        else { 

            // iterate through the words and increment their counters if it has been used already
            for (let i = 0; i < wordSplit.length; i++) { res[wordSplit[i]] = (res[wordSplit[i]] || 0) + 1 };
            
            // sortObj sorts the array, Object.assign turns the array into an object
            const result = Object.assign({}, ...sortObj(res).slice(0, RESPONSE_ARRAY));

            // return the result
            return result;
        }
    }
}

// object into array, sorted by value
function sortObj(obj) {
    let arr = [];
    for (var word in obj) { arr.push({ [word]: obj[word] } ) };
    arr.sort(function(a, b) { return Object.values(b) - Object.values(a) });
    return arr;
}