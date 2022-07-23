const express = require("express");
const cors = require("cors");
const router = require("../router");
const handleError = require("../middlewares/handleError");

const expressConfig = (app) => {
    app.use(
        cors({
            origin: "http://localhost:3000",
            credentials: true,
        })
    );

    app.use(express.json());

    app.use(router);

    app.use(handleError);
};

module.exports = expressConfig;
