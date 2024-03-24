const { Console } = require('console');
const expres = require('express');
const app = expres();

const port = 8005;

app.listen(port,()=>{
    console.log(`server is running on port number ${port}`)
})