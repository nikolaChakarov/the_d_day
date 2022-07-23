require("dotenv").config();
const express = require("express");
const app = express();

const expressConfig = require("./config/expressConfig");
expressConfig(app);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`server is listening at port ${PORT}`);
});
