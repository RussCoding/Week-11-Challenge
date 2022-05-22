const express = require("express");
const path = require("path");
const fs = require ("fs");
//sets up and makes app to represent express server
const app = express();
const port = 3001;
// gives a path to folder containing our html
const htmlPath = path.join(__dirname, "/public");
const notes = require("./db/db.json");
const exp = require("constants");

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());