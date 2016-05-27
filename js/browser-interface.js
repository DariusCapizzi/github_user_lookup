var BaseUser = require('./../js/scripts.js').BaseUser;

$(function() {
  $("#search-user").submit(function(e){
    e.preventDefault();
    $('#user-image, #owner-info, .repositories, .repo').empty();


		var userQuery = $('#user-query').val();
    var baseUser = new BaseUser();

    baseUser.sendQuery(userQuery, function(searchedUser){
      $("#user-image").append('<img class="avatar-img" src=' + searchedUser.avatar + '>')
      $('#owner-info').append('<a href=' + searchedUser.gitLink  + ">" + searchedUser.owner + "</a>");
      for (i=0;i<searchedUser.repos.length;i++){
        $(".repositories").show();
        $('.repositories').append('<div class="repo"><a href=' + searchedUser.repos[i].html_url + ">" + searchedUser.repos[i].name + "</a></div>");
      }


      for (i=1; i < (parseInt(searchedUser.pages.last.page) + 1); i++) {
        $("#page-numbers").append("<li><a class='page'>" + i + "</a></li>");
      }

      console.log(searchedUser.pages.last.page);

      $(".page").click(function(e){
        e.preventDefault();
        console.log(this.innerHTML)
        baseUser.sendQuery(userQuery, function(searchedUser){
          $('.repositories, .repo').empty();
          for (i=0;i<searchedUser.repos.length;i++){
            $(".repositories").show();
            $('.repositories').append('<div class="repo"><a href=' + searchedUser.repos[i].html_url + ">" + searchedUser.repos[i].name + "</a></div>");
          }
        }, this.innerHTML);
      });
    }, 1);

    $("#user-query").val("");
  })



});
