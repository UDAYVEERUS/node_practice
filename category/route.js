const express = require('express');
const {categoryAdd,categoriesGet} = require('./controller');

const router = express.Router();

router.post("/add" , categoryAdd);
router.get("/get", categoriesGet);

module.exports = router;