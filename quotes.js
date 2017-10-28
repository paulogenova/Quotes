$(document).ready(function () {

  
    
    /*    var images = [
            'img/road.jpeg',
            'img/autumn-road.jpeg',
            'img/landscape.jpeg',
            'img/nightsky.jpeg',
            'img/raindrops.jpeg', // This seems to not be a valid image, but meh
        ];

        index = 0;

        $('button').click(function(){
            if (index < (images.length-1)) { // This uses length-1 because the array is 0-indexed.
                index++;
            } else {
                index = 0;
            }
            $('.cover').css({
                'background-image' : "radial-gradient(#808080, transparent 50%, #fff 97%)," + "url(" + images[index] + ")",
            });
            
        });*/
    
    $('button').click(function () {        
        var API = 'https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&jsonp=?&lang=en';


        $.getJSON(API, getQuote);

        function getQuote(data) {
            var quote = data.quoteText;
            var author = data.quoteAuthor;
            $('p').html(quote);
            $('em').html(author);

        }
   
    });
});
