const express = require('express');
const {ProductsAdd, ProductsGet, ProductsUpdate, ProductsGetHome} = require('./controller');

const router = express.Router();

router.post("/add", ProductsAdd);
router.get("/get", ProductsGet);
router.patch("/update/:id", ProductsUpdate);
router.get("/onhome", ProductsGetHome);
module.exports = router;