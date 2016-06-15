//Function which gets the random quotes

var getQuote = function()
{
	$.ajax(
	{

		url:'http://quotes.stormconsultancy.co.uk/random.json',
		dataType: 'json',
		type: 'GET',
		xhrFields: 
		{
       		withCredentials: false,
    	},

		//If the request is succesful!!
		success: function(data)
		{	
			//console.log(data);

			// Adding the quote in the quote box
			$('#qt-box').fadeOut(750, function()
			{
				$('#qt-box').html('"' + data.quote + '"').fadeIn(750);
			})

			// Adding the author name

			if (data.author != '')
			{
				$('#author-box').fadeOut(750, function()
				{
					$('#author-box').html('-' + data.author).fadeIn(750);
				})
			}
			else
			{	
				$('author-box').fadeOut(750, function()
				{
					$('#author-box').html('-' + 'Unknown');

				})
			}
		},

		error: function()
		{	
			//console.log(data);

			$('#qt-box').html("There was a problem with the API request");
		}
	});
};

//Document Ready Function

$(document).ready(function()
{
	$('#button').on('click', function(){
		getQuote();
		// getQuote();
	})
});