var express = require("express");
var router = express.Router();
let userCtrl = require("../controllers/user");

/* GET users listing. */

router.get("/", userCtrl.index);

module.exports = router;
