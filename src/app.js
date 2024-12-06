const express = require('express');
const app = express();

app.use('/hello',(req,res)=>{
    res.send('hellooo from the server')
});

app.listen(3000,()=>{
    console.log('server listening on port 3000')
});