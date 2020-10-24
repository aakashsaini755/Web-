const http=require('http')

const server=http.createServer((req,res)=>{
   
    res.setHeader('content-type','text/plain');
    res.end('Aakash saini From Rohtak from 20');
});
server.listen(80,'127.0.0.1',()=>{
    console.log('Server is running alright at http://127.0.0.1');
})