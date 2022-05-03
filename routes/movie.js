var express = require('express');
var router = express.Router();
let movieCtrl = require('../controllers/movie')



router.get('/', movieCtrl.index)
    
router.get('/:id', movieCtrl.show)


module.exports = router;
