const express = require("express");

const app = express();



let port = 8080;

app.listen(port,()=> {
    console.log("App is listining on 8080")
})


app.get("/",(req,res) => {
    res.send("you contacted root path")
})


app.get("/:username",(req,res) => {
    console.log(req.params)
    res.send("you contacted root path")
})