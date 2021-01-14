const fs=require("fs"); 
   
const str = "Hello world"; 
const filename = "input.txt"; 
   
fs.open(filename, "a", (err, fd)=>{ 
    if(err){ 
        console.log(err.message); 
    } else { 
        // console.log(fd)
        fs.write(fd, str, (err, bytes)=>{ 
            if(err){ 
                console.log(err.message); 
            }else{ 
                console.log(bytes +' bytes written'); 
            } 
        })         
    } 
}) 