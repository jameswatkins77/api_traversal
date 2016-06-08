$("#submit").click(function(){
  $("#center_column").html("");
  var searchedMovie = $("#searchQuery").val();
    $.ajax({url: "http://www.omdbapi.com/?s="+`${searchedMovie}`, success: function(result){
        for (var i = 0; i < result.Search.length; i++) {
          var movieName = result.Search[i].Title;
          var indexPoster = result.Search[i].Poster;
          var noImage = "mockups/images/no_image.png";
          $("#center_column").append('<p>'+`${movieName}`+'</p>');
          if (indexPoster === "N/A") {
            $("#center_column").append('<img id="movie_poster" src='+'"'+noImage+'"'+' alt= '+'"'+`${movieName}`+'"'+'>');
          } else {
            $("#center_column").append('<img id="movie_poster" src='+'"'+`${indexPoster}`+'"'+' alt= '+'"'+`${movieName}`+'"'+'>');
          }
        }
    }});
});
