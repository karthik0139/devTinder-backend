const express = require('express');
const app = express();

app.use((req, res) => {
    res.send("server is running ")
})

app.listen(8080,() => {
     console.log("server started")
})