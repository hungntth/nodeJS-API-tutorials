const router = require('express').Router()
const product = require('./../controllers/product')

router.get('/', product.getAllProduct)

module.exports = router