const path = require("path");
const router = require("express").Router();
//const apiRoutes = require("./api/article");

// API Routes
const articlesController = require("../controllers/articlesController");

// Matches with "/api/articles"
router.route("/api/articles/")
  .get(articlesController.findAll)
  .post(articlesController.create);

// Matches with "/api/articles/:id"
router
  .route("/api/articles/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

router.get('/test/', (req, res) => {
  console.log("getting /test/");
  res.json({'test': 'data'})
})

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;