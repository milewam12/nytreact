const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema ({
title: { type: String, required: true},
date: { type: Date, default: Date.now },
url:{type: String, required: true} 

});

const Article = mongoose.model("Article" , articleSchema);

module.exports = Article;

// Using mongoose, then create an Article schema and model

// At a minimum, articles should have each of the following fields:

// title (Title of the stored article from nytimes.com)

// date (publish date and time of the article)

// url (URL of the article on nytimes.com)

// Creating documents in your articles collection similar to

// {
//   title: 'Ali Sells Jersey House And Moves to Chicago',
//   date: '1974-07-18T00:00:00Z',
//   url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
// }