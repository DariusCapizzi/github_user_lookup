var apiToken = require('./../.env').apiKey;
var parse = require('parse-link-header');


exports.BaseUser = function() {
};

SearchedUser = function(response, xhr) {
  this.avatar = response[0].owner.avatar_url;
	this.owner = response[0].owner.login;
	this.gitLink = response[0].owner.html_url;
	this.created_at = response[0].created_at;
  this.repos = response;
  this.pages = parse(xhr.getResponseHeader('link'));
};

exports.BaseUser.prototype.sendQuery = function (userQuery, callback, page) {
  $.get("https://api.github.com/users/" + userQuery + "/repos?page=" + page + "&per_page=5&access_token=" + apiToken).then(function(response, status, xhr){
    var searchedUser = new SearchedUser(response, xhr);
    callback(searchedUser);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
