var express = require('express');
var router = express.Router();
let reviewCtrl = require('../controllers/review');



router.get('/movies/:id/review/new', reviewCtrl.new)

router.post('/movies/:id/review/new', reviewCtrl.create)



module.exports = router;