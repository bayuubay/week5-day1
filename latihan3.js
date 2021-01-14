const fs = require("fs"); 

fs.mkdir('testing', (err) => {
    if (err) {
        console.error
    } else {
        console.log('sukses membuat folder');
    }
})