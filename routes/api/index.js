const router = require("express").Router();
const courseRoutes = require("./courses");

// Book routes
router.use("/courses", courseRoutes);

module.exports = router;
