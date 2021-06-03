var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ success: true, message: "If you're reading this, it works" });
});

module.exports = router;
