const Router = require("express");
const router = new Router();
const placesController = require("../controller/places.controller");

router.post("/places", placesController.createPlace);
router.get("/places", placesController.getPlace);

module.exports = router;
