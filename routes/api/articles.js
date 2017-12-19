const axios = require("axios");
const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
const authKey2 = "1d6ab8fe6cb546f78a25f7df1998ae01";
const queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey2 + "&q=";

//ReferenceError: path is not defined
router.route("/articles")
router.get("/articles", (req, res) => {
    axios
    .get(queryURLBase, { params: req.query})
    .then(({ data: { results } }) => res.json(results))
    console.log(results)
    .catch(err => res.status(422).json(err));
})

// router.route("/")
// .get("/", (req, res) => {
//     axios
//     .get(queryURLBase, { params: req.query})
//     .then(({ data: { results } }) => res.json(results))
//     console.log(results)
//     .catch(err => res.status(422).json(err));
// })

router.route("api/articles")
// /api/articles (post) - your components will use this to save an article to the database
.get(articlesController.create)
// /api/articles (delete) - your components will use this to delete a saved article in the database
.post(articlesController.remove)

// /api/articles (get) - your components will use this to query MongoDB for all saved articles


// * (get) - will load your single HTML page (with ReactJS) in client/build/index.html. Make sure you put this after all other GET routes

router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
module.exports = router;


// router.get("/articles", (req, res) => {
//     axios
//     .get(queryURLBase, { params: req.query})
//     .then(({ data: { results } }) => res.json(results))
//     console.log(results)
//     .catch(err => res.status(422).json(err));
// })






