const express = require("express");
const bodyParser = require("body-parser")
const fs = require("fs");
const path = require("path");
const cors = require("cors")

const app = express();

app.use(bodyParser.json())
app.use(cors())

app.use("*", (req, res, next) => {
    const directory = path.join(process.cwd(), "data/Output/json");
    const jsonFile = fs.readFile(path.join(directory, "data.json"), () => {
        const payload = JSON.parse(jsonFile)
        res.json(payload)
    })
})

app.listen(3500, () => { console.log("Server launhed"); })