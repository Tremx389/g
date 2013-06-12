
$(document).ready(function()
	{
		var canvas = $('canvas')[0].style;
		autoWindow(canvas)
	});

$(window).resize(function()
	{
		var canvas = $('canvas')[0].style;	
		autoWindow(canvas);
		alert("fck")
	});

function autoWindow(gWindow)
	{
		var ratio = 0.7;
		var margin = 10;

		var width = window.innerWidth - margin * 2;
		var height = window.innerHeight - margin * 2;
					
		
		if (height / width >= ratio)
			{
				gWindow.width = width + "px";
				gWindow.height = width * ratio + "px";
				
				gWindow.left = margin + "px";
				gWindow.top = height / 2 + margin + "px";
				
				gWindow.marginLeft = 0 + "px";
				gWindow.marginTop = -(width * ratio / 2) + "px";
			}
		else
			{
				gWindow.width = height / ratio;
				gWindow.height = height;
				
				gWindow.left = width / 2 + margin;
				gWindow.top = margin;
				
				gWindow.marginLeft = -(height / ratio / 2);
				gWindow.marginTop = 0;
				alert("y")
			}

	};