const express = require('express')
const { getAllContact,getContact, addContact, deleteContact, updateContact } = require('../controllers/contactController')
const router = express.Router()

router.get('/', getAllContact )
router.post('/', addContact )
router.get('/:id', getContact )
router.delete('/:id', deleteContact )
router.put('/:id', updateContact )


module.exports = router