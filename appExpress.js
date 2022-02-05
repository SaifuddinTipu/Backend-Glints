const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const cors = require("cors");

require("dotenv").config({
    path: path.join(__dirname, "./.env"),
});

const appExpress = express();

appExpress.use(bodyParser.json());
appExpress.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
appExpress.use(cors());

appExpress.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

module.exports = appExpress;