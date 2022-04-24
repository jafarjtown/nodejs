const router = require('express').Router()
const { getAllCities, createCity, deleteCities } = require('../controllers/city')

router.route('/').get(getAllCities).post(createCity)
router.route('/delete').delete(deleteCities)


module.exports = router