const express = require("express");
const path = require("path");
const app = express();
const instaData = require("./data.json");

const port = 8080;
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"))

app.listen(port,()=> {

    console.log(`Port at ${port}`)

})

app.get("/ig/:username",(req,res) =>{
    let { username } = req.params;
    console.log(instaData);
    res.render("instagram.ejs", { data:instaData[username] })
    
});

app.get("/",(req,res) => {
    res.render("home.ejs")
})

app.get("/hello", (req,res) => {
    res.send("hello page")
})

app.get("/rollDise", (req,res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rollDise.ejs", {
        num: diceVal
    })
})