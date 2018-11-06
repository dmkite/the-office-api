const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/theoffice.controllers')

router.get('/characters', ctrl.getAll)
router.get('/characters/:id', ctrl.getOne)
router.post('/characters/', ctrl.createOne)
router.put('/characters/:id', ctrl.editOne)
router.delete('/characters/:id', ctrl.deleteOne)

module.exports = router
