var express = require("express");
var router = express.Router();
let reviewCtrl = require("../controllers/review");
const review = require("../models/review");

router.get("/:id/review/new", reviewCtrl.new);

router.delete("/review/:id", reviewCtrl.delete);

router.post("/:id/review", reviewCtrl.create);

router.get("/review/:id/edit", reviewCtrl.edit);

router.put("/review/:id", reviewCtrl.update);

module.exports = router;
