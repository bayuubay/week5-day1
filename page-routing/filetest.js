const fs = require("fs");
const str = "";
const fileName = ['bola.html', 'tren.html', 'health.html', 'food.html', 'edukasi.html', 'inspirasi.html', 'money.html', 'techno.html', 'lifestyle.html'];

function createHtmlFiles() {

    fs.mkdir('./html', (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log('folder successfully created!');

            for (let i = 0; i < fileName.length; i++) {
                
                fs.open(__dirname + '/html/' + fileName[i], "a", (err, fd) => {
                    if (err) {
                        console.log(err.message);
                    } else {
                        fs.write(fd, str, (err, bytes) => {
                            if (err) {
                                console.log(err.message);
                            } else {
                                console.log(bytes + ' bytes written');
                            }
                        })
                    }
                })
            }
        }
    })
}
createHtmlFiles();