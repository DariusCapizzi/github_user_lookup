var gitApiToken = require('./../.env').gitApiToken;
var searchUser = require('./../js/scripts.js').searchUser;


$(function() {
  $.get("https://api.github.com/users/" + "DariusCapizzi" + "/repos?access_token=" + gitApiToken).then(function(response){
    var newUser = new searchUser(response);
    console.log(newUser.avatar);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
});
