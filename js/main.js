//Function which gets the random quotes

var getQuote = function()
{
	$.ajax(
	{

		url:'http://quotes.stormconsultancy.co.uk/random.json?callback?',
		dataType: 'jsonp',
		type: 'GET',
		jsonp: 'jsonp',
		xhrFields: 
		{
       		withCredentials: true,
    	},

		//If the request is succesful!!
		success: function(data)
		{	
			//console.log(data);
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
	})
});