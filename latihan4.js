const fs = require('fs');

fs.rmdir('testing', (err) => {
    if (err) {
        console.error
    } else {
        console.log('succeed')
    }
})