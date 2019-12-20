
document.body.className ="loading";
jQuery(document).ready(function($){

    axios.get('http://csc225.mockable.io/movies').then(function(response){

        console.log(response.data);
        var moviesHtml = response.data.map(function(movie){
            //return $('<p>').addClass('movie').data('movie',movie.data).html(movie.title)
            //or
            return '<p class="movie" data-movie="' + movie.id +'">'+movie.title+'</p>'
        });
        
        //printing to console and document
        console.log(moviesHtml);
        $('#Mymovies').html(moviesHtml);
        document.body.className=""; 


    });



    //getting the movie url and id attached when movie is clicked on
    $('body').on('click','.movie',function(){

        var id  =$(this).data('movie');
        var url = 'https://csc225.mockable.io/movies/' + id;


        $('#current-movie').html('<img src="/loading3.gif">');
        axios.get(url).then(function(response){
            var movie=response.data;  
            var movieHtml = ' <p> Title: '+movie.title+'</p>';
            movieHtml +='<p> Director: ' + movie.director + '</p>';
            movieHtml +='<p> IdNo: '+movie.id+'</p>';
            movieHtml +='<p> Release Yr: '+movie.release+'</p>';
            movieHtml +='<img src="'+movie.poster +'" height="200" width="180"></img>';

            $('#current-movie').html(movieHtml);
            console.log(movieHtml);
           

        });
       

        
    });

});
