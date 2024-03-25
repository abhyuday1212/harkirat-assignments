## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

//using writeFile function

import fs from 'fs'

fs.writeFile("file2.txt", "Hello ji kaise ho sare", err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File written successfully.");
});


<!-- using append file function -->


import fs from 'fs'

fs.appendFile("file2.txt", "Hello ji kaise ho sare,original sentence k aagestating se chize add krega,123 vsd", err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File written successfully.");
});

// basically hr key press pe data enter kr rha h
