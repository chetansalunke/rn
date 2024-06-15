require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT;

// MIDDELWARES
app.use(express.json()); 
 
app.use("/api",require('./routes/router'));
app.listen(PORT,()=>{
console.log(`The server is started running on the port ${PORT}`);
});