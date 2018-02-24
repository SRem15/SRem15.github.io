/*
		CIS166AA: handler.js 
		Author: Shane Remmers
		Date: 2/22/18
*/
			var milesInput = document.getElementById("distance");
			var messageElement = document.getElementById("answer");
	
	//checks to see if distance is positive number
	function positiveDistance() 
	{	
		try
		{
			var messageText = "";
			
			if (milesInput.value < 0)
			{
				throw "Please enter distance greater than zero.";
			}
		}
		
	
		catch(mileError)
		{
			messageText = mileError;
			
		}
	
		finally
		{
			messageElement.innerHTML = messageText;
		}
	}