var newQuote = '';
var newAuthor = '';

$(document).ready(function() { 
					var colors = ["#aa77ff","#aeefed","#c6a6c3", "#9c38e3", "#325e89", "#eaea26", "#710d55", "#bb2377", "#828238", "#c54b2a", "#0bd748"];                
  				var rand = Math.floor(Math.random()*colors.length);   
					
  				$('body').css("background-color", colors[rand]);
  				$('.quote-container').css("color", colors[rand]);
	$('.button').css("background-color", colors[rand]);
	$.ajax({
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
        type: 'POST', // The HTTP Method
        data: {}, // Additional parameters here
        datatype: 'json',
        success: function (data) {
					var r = JSON.parse(data);
					newQuote = r.quote;
					newAuthor = r.author;
					
          $(".quote").html('<i class="fa fa-quote-left" aria-hidden="true"></i>' + "   " + newQuote + "   " + '<i class="fa fa-quote-right" aria-hidden="true"></i>');
					$(".author").html("- " + newAuthor);
					$("#twitter-button").attr("href", "https://twitter.com/intent/tweet?text=%22" + newQuote +"%22  -" + newAuthor);
					$('#tumblr-button').attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption='+ newAuthor +'&content=' + newQuote);
					
				
        },
        error: function (err) {
            alert(err);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "a7IVSt2riMmshJNZwa2wXIm7a1cSp1nOSLPjsnPQdJGctHxBDY"); // Enter here your Mashape key
        }
					
    });
});
$("#new_quote-button").click(function(){
					var colors = ["#aa77ff","#aeefed","#c6a6c3", "#9c38e3", "#325e89", "#eaea26", "#710d55", "#bb2377", "#828238", "#c54b2a", "#0bd748"];                
  				var rand = Math.floor(Math.random()*colors.length);   
					
  				$('body').css("background-color", colors[rand]);
  				$('.quote-container').css("color", colors[rand]);
					$('.button').css("background-color", colors[rand]);
	    $.ajax({
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
        type: 'POST', // The HTTP Method
        data: {}, // Additional parameters here
        datatype: 'json',
        success: function (data) {
					var r = JSON.parse(data);
					newQuote = r.quote;
					newAuthor = r.author;
					
          $(".quote").html('<i class="fa fa-quote-left" aria-hidden="true"></i>' + "   " + newQuote + "   " + '<i class="fa fa-quote-right" aria-hidden="true"></i>');
					$(".author").html("- " + newAuthor);
					$("#twitter-button").attr("href", "https://twitter.com/intent/tweet?text=%22" + newQuote +"%22  -" + newAuthor);
					 $('#tumblr-button').attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption='+ newAuthor +'&content=' + newQuote);
        },
        error: function (err) {
            alert(err);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "a7IVSt2riMmshJNZwa2wXIm7a1cSp1nOSLPjsnPQdJGctHxBDY"); // Enter here your Mashape key
        }
    });

	
});
