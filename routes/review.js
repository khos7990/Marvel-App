var express = require('express');
var router = express.Router();
let reviewCtrl = require('../controllers/review');
const review = require('../models/review');



router.get('/:id/review/new', reviewCtrl.new)

router.delete('/:id/review', reviewCtrl.delete)


router.post('/:id/review', reviewCtrl.create)

router.get('/:id/review/edit',reviewCtrl.edit)


router.put('/:id/review', reviewCtrl.update)



module.exports = router;