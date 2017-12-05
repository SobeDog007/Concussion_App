const router = require("express").Router();
const bookRoutes = require("./entry");

// Entry routes
router.use("/entry", entryRoutes);

module.exports = router;
