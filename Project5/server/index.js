const express = require("express");
const app = express();

app.use(express.json());

app.use('/api',require('./routes'));

app.listen(3000,()=>{
console.log("Servier is running on the port 3000");
});