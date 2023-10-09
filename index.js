const http = require("http");
const port = process.env.PORT || 3000;
http
  .createServer((req,res) =>{
    res.write("hello world");
    res.end();
})
 .listen(port,()=>{
    console.log(`Server running on localhost:${port}`);
});