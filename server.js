const express = require("express");
const path = require("path");
const fs = require ("fs");
//sets up and makes app to represent express server
const app = express();
const port = 3001;
// gives a path to folder containing our html
const htmlPath = path.join(__dirname, "/public");
// accesses all notes saved as JSON objects
const savedNotes = require("./db/db.json");
const exp = require("constants");
const req = require("express/lib/request");

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
} );

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})