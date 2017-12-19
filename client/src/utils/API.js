import axios from "axios";

// It accepts a "query" or term to search the recipe api for
export default {
  getArticles: function(query) {
    return axios.get("/api/articles", { params: { q: query}});
  },
  // Saves an article to the database
  deleteArticle: function (id) {
    return axios.get("/api/articles" +id);
  },
  // Saves an article to the database
  saveArticle: function (articleData) {
    return axios.post("/api/articles", articleData);
  }

};

