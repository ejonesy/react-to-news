import axios from "axios";

const queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch/?q=";
const apiKey = "&api_key=f930e1537a054cd8b7590de0d3e5a985&limit=20";

export default {
  getArticles: function() {
    return axios.get("/api/articles/");
  },

  title: function(query) {
    return axios.get(queryUrl + query + apiKey);
  },
  // getArticle: function(id) {
  //   //return axios.get(corsProxy + queryUrl + apiKey + query.title)
  //   console.log("request handled", id);
  //   return axios.get("/api/articles" + id)
  //   .catch(function(error) {
  //     if (error.response) {
  //       //console.log(error.response.data);
  //       console.log(error.response.status);
  //     }
  //   })
  // },
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
