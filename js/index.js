$(document).ready( function(){
  $('.menu').click(function(e){
    e.stopPropagation();
    $('#main_nav').toggleClass('active');
  });
  $(document).click(function(){
        console.log('button clicked');
      $('#main_nav').removeClass('active');
  });
  $('.post').click(function(e){
    e.stopPropagation();
    console.log("clicked");
  });
  $(".post").click( function()
    {
      alert('button clicked');
    }
);
        $.ajax({
              url:'https://api.themoviedb.org/3/movie/now_playing?api_key=cfe422613b250f702980a3bbf9e90716',
              async: true,
              dataType: 'jsonp',
              success:function(data){
                console.log(data);
                $(".apiTitle").html(""+data.results[0].title+"");
                $(".featuredDescripton").html(""+data.results[0].overview+"");
                $(".featuredDate").html(""+data.results[0].release_date+"");
                $(".featured_image").attr("src","https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+data.results[0].poster_path+"");
                // $("#banner").css("background","url(https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+data.results[0].poster_path+")");

                for(var i =0;i < data.results.length-1;i++)
                  {
                    // $(".banner").css("background","url(https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+data.results[0].poster_path+")");
                    // console.log(data.results[i].title)
                    $(".movies").append("<div class='post'><img src='https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+data.results[i].poster_path+"'/><h3 class='title'>"+data.results[i].title+"</h3><p class='post_info'>Released : "+data.results[i].release_date+"</p></li></div>")
                  }
              }
        });
        $.ajax({
              url:'https://api.themoviedb.org/3/tv/popular?api_key=cfe422613b250f702980a3bbf9e90716',
              async: true,
              dataType: 'jsonp',
              success:function(tvdata){
                // console.log(tvdata);
                for(var i =13;i < tvdata.results.length-1;i++)
                  {
                    // console.log(tvdata.results[i].title)
                    $(".shows").append("<div class='post'><img src='https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+tvdata.results[i].poster_path+"'/><h3 class='title'>"+tvdata.results[i].name+"</h3><p class='post_info'>Rating : "+tvdata.results[i].vote_average+"/10</p></li></div>")
                  }
              }
        });



});
