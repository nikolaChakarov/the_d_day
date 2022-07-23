const router = require("express").Router();

router.use("/api/tunes", require("./routes/tunes"));

module.exports = router;
