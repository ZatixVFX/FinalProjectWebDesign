// food items route
const express = require("express");
const router = express.Router();
const fooditems = require("../config/fooditems.json");

//@router       api/fooditems/beefburgers
//@desc         get chickenburgers
//access        Public

router.get("/beefburgers", (req, res) => {
  try {
    res.json(fooditems.beefburgers);
  } catch (err) {
    console.error(err.message), res.status(500).send("Server Error");
  }
});

//@router       api/fooditems/chickenburgers
//@desc         get chickenburgers
//access        Public

router.get("/chickenburgers", (req, res) => {
  try {
    res.json(fooditems["chicken-burgers"]);
  } catch (err) {
    console.error(err.message), res.status(500).send("Server Error");
  }
});

//@router       api/fooditems/gazelleburgers
//@desc         get gazelleburgers
//access        Public

router.get("/gazelleburgers", (req, res) => {
  try {
    res.json(fooditems["gazelle-burgers"]);
  } catch (err) {
    console.error(err.message), res.status(500).send("Server Error");
  }
});

//@router       api/fooditems/beverages
//@desc         get beverages
//access        Public

router.get("/beverages", (req, res) => {
  try {
    res.json(fooditems.beverages);
  } catch (err) {
    console.error(err.message), res.status(500).send("Server Error");
  }
});

//@router       api/fooditems/deserts
//@desc         get deserts
//access        Public

router.get("/deserts", (req, res) => {
  try {
    res.json(fooditems.deserts);
  } catch (err) {
    console.error(err.message), res.status(500).send("Server Error");
  }
});

//@router       api/fooditems/hot-drinks
//@desc         get hot-drinks
//access        Public

router.get("/hot-drinks", (req, res) => {
  try {
    res.json(fooditems["hot-drinks"]);
  } catch (err) {
    console.error(err.message), res.status(500).send("Server Error");
  }
});

//@router       api/fooditems/sides
//@desc         get sides
//access        Public

router.get("/sides", (req, res) => {
  try {
    res.json(fooditems.sides);
  } catch (err) {
    console.error(err.message), res.status(500).send("Server Error");
  }
});

module.exports = router;
