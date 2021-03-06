const router = require("express").Router();
const entryController = require("../../controllers/entryController");

// Matches with "/api/entry"
router.route("/")
  .get(entryController.findAll)
  .post(entryController.create);

// Matches with "/api/entry/:id"
router
  .route("/:id")
  .get(entryController.findById)
  .put(entryController.update)
  .delete(entryController.remove);

module.exports = router;
