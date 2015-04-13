var state;
document.getElementById("links2").onmouseover = function() {
	document.getElementById("shown").style.display = "block";
}

document.getElementById("shown").onmouseover = function() {
	document.getElementById("shown").style.display = "block";
}

document.getElementById("links2").onmouseout = function() {
	document.getElementById("shown").style.display = "none";
}

document.getElementById("shown").onmouseout = function() {
	document.getElementById("shown").style.display = "none";
}

var i = 0;
var path = new Array();
// LIST OF IMAGES
path[0] = "photos/stock/1.jpg";
path[1] = "photos/stock/5.jpg";
path[2] = "photos/stock/6.jpg";
path[3] = "photos/stock/7.jpg";
path[4] = "photos/stock/8.jpg";
path[5] = "photos/stock/9.jpg";
path[6] = "photos/stock/10.jpg";

function swapImage()
{
   document.slide.src = path[i];
   if(i < path.length - 1) {
   	var a  = path.length -1;
   	i++;
   }
   	 else {
   	  i = 0;
   	}
   setTimeout("swapImage()",1500);
}
window.onload=swapImage;
