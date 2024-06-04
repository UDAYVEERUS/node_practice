const express = require('express');
const {ProductsAdd, ProductsGet} = require('./controller');

const router = express.Router();

router.post("/add", ProductsAdd);
router.get("/get", ProductsGet);

module.exports = router;