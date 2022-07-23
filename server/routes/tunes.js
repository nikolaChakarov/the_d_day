const router = require("express").Router();
const { getTunes } = require("../controllers/tunesController");

router.get("/", getTunes);

module.exports = router;
