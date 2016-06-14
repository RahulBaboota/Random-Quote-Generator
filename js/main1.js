//Function which gets the random quotes

var getQuote = function()
{
	$.ajax({

		url:'http://quotes.stormconsultancy.co.uk/random.json',
		datatype: 'jsonp',
		type: 'GET',

		//If the request is succesful!!
		success: function(data)
		{	
			// Adding the quote in the quote box
			$('#qt-box').html(data.quote);

			// Adding the author name
			if (data.author != '')
			{
				$('#author-box').html(data.author);
			}
			else
			{
				$('#author-box').html('Unknown');
			}
		},

		error: function()
		{
			$('#qt-box').html("There was a problem with the API request");
		}
	});
};

//Document Ready Function

$(document).ready(function()
{
	$('#button').on('click', function(){
		getQuote();
	})
});