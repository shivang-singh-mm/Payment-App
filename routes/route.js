const express = require('express')
const controller = require('../controller/controller')
const router = express.Router()

router.route('/')
.post(controller.getAllInfo)


router.route('/payment-route')
.post(controller.paymentControl)

router.route('/callback')
.get(controller.sucessPage)

module.exports = router