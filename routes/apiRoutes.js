const axios = require("axios");
const router = require("express").Router();

// var APIKey = "9b3adf57854f4a19b7b5782cdd6e427a";

router.get("/articles", (req, res) => {
  
  axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=9b3adf57854f4a19b7b5782cdd6e427a", { 
      
    params: {
      "q": req.query
    }

  })
    .then( function (results) {
      console.log("Axios Results", results.data.response);
      return results.data.response;
    })
  // I cannot Display in the browser the data I'm getting from NTY API. I believe my problem is how I'm passing the JSON . I  got the TypeError: Converting circular structure to JSON" I looked and tried several solutions I found online without luck ---
    .catch(err => res.status(422).json(err));
  
   
});

module.exports = router;


