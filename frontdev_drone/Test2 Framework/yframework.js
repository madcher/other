//Y test framework for Yandex intern_frontdev_drone
//Y("main").color("red") - change color
//Y("main").size("12px") - change fontSize in elements
//Y("main").align("center") - change textAlign in elements
//Y("main").off() - hide class elements
//Y("main").on() -show class elements
//Y("main").makemehappy - make you happy


(function(window){

function Y(selector)
{
	if(!selector){
		var id=document
	}
	var sel=selector+'';
	var id= (!!selector) ? document.getElementsByClassName(sel) : document.getElementsByTagName("body");

	id.color=function(color)
	{
		for(var i=0; i<id.length; i++){
			this[i].style.backgroundColor=color;
		}
		return this;
	}

	id.size=function(size)
	{
		for(var i=0; i<id.length; i++){
			this[i].style.fontSize=size;
		}
		return this;
	}

	id.align=function(align)
	{
		for(var i=0; i<id.length; i++){
			this[i].style.textAlign=align;
		}
		return this;
	}

	id.off=function()
	{
		for(var i=0; i<id.length; i++){
			this[i].style.display="none";
		}
		return this;
	}

	id.on=function()
	{
		for(var i=0; i<id.length; i++){
			this[i].style.display="";
		}
		return this;
	}

	id.makeMeHappy=function()
	{
		document.location.href = "https://www.youtube.com/watch?v=M-XtB0R3ri4";
	}

	return id;
}

window.Y=Y;
})(window);
