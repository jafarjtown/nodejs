const router = require("express").Router();
const {
  getAllApartments,
  createApartment,
  getApartmentById,
  getAllOpenApartments,
  getAllRentedApartments,
  getApartmentsByCityName,
  getAllEmptyApartments,
  getAllReservedApartments,
  deleteApartments,
  bookApartments,
} = require("../controllers/apartment");

router.route("/").get(getAllApartments).post(createApartment);
router.route("/open").get(getAllOpenApartments);
router.route("/empty").get(getAllEmptyApartments);
router.route("/delete").delete(deleteApartments);
router.route("/rented").get(getAllRentedApartments);
router.route("/reserved").get(getAllReservedApartments).post(bookApartments);
router
  .route("/city/:city_id")
  .get(getApartmentsByCityName)
  .delete(deleteApartments);
router.route("/id/:id").get(getApartmentById);

module.exports = router;
