
// // Function which gets the quotes from forismatic api

// var getQuote = function()
// {
// 	$.ajax({

// 		url:'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?',
// 		datatype: 'jsonp',
// 		method: 'GET',
// 		data: 
// 		{
//         	method: "getQuote",
//         	lang: "en",
//         	format: "jsonp",
//       	},
// 		// If the request is succesful
// 		success: function(data)
// 		{
// 			$('.quote-box').html(data.quoteText);

// 			//Appending the authors name if any
// 			if (data.quoteAuthor != '')
// 			{
// 				$('.author-name').html(data.quoteAuthor);
// 			}
// 			else
// 			{
// 				$('.author-name').html("Unknown");
// 			}
// 		},

// 		//To handle errors
// 		error: function(xhr, status, error)
// 		{
// 			$('.quote-box').html("I'm sorry but there was an error with the API request");
// 		}
// 	});
// };


// // Document Ready Function

// $(document).ready(function(){

// 	getQuote();

// 	$('button').on('click', function(){
// 		getQuote();
// 	});
// });




