const filename = process.argv.at(-1);

import { readFile } from "fs";

// on successfull read, err = null, data = the data
// on error             err = the error,  data = null
readFile(filename, 'utf-8', (err, data) => {
    if (err) console.log("Error!", err.message);
    else {
        console.log(data);
    }
});

console.log("after readfile line");