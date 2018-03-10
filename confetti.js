"use strict";
/*
 Tyler Green
 CISC 131
 9-15-2014
 Template
*/
window.onload=function()
{
	//var yep;
	//yep="yep"
	document.onclick=create;
	//document.onclick=makeConfettiFall;
	//window.alert(yep.charAt(7));
	//window.alert(isNaN("a"));
	//window.alert(getNumericPrefix("ab.12"));
	//window.alert(Number("12.34.54"));
	//window.alert(getRandomInteger(1));

};

function getNumericPrefix(data)
{
	var i;
	var result;
	var location;
	var trueorfalse;
	result="";
	i=0;
	location=-1;
	trueorfalse=true;
	if(data.charAt(0)==="-"||data.charAt(0)==="+" && data.length>1)
	{
		result=data.charAt(0);
		i=1;
	}
	while(i<data.length)
	{
	    if(data.charAt(i)>=0)
		{
		    result=result+data.charAt(i);
		}
		else
		{
			if(data.length>1 && data.charAt(i)==="." && trueorfalse)
			{
				result=result+ data.charAt(i);
				trueorfalse=false;
			}
			else
			{
				location=location+ 1
			}
		}
		i=i+1
	}
	result=Number(trim(result))
	return result;
}

function move(prefix , leftBoundary, rightBoundary, maxSideMovement, maxDownMovement)
{
	var element;
	var i;
	var top;
	var left;
	i=0;
	element=document.getElementById(prefix+i);

	while(element!==null)
	{
		left=Number(element.style.left.substring(0,element.style.left.length-2));
		top=Number(element.style.top.substring(0,element.style.top.length-2));

		left=left+((1-(2*(getRandomInteger(1))))*getRandomInteger(maxSideMovement));
		top=top+getRandomInteger(maxDownMovement);

		left=Math.min(left,rightBoundary-element.offsetWidth-4);
		left=Math.max(leftBoundary,left);

		element.style.left=left+"px";
		element.style.top=top+"px";

		i=i+1;
		element=document.getElementById(prefix+i);
	}
}

function makeConfettiFall()
{
	document.onclick=null;
	var container;
	var i;
	container=document.getElementById("container");
	container.style.borderBottom="0px";
	for(i=0;i<1000;i++)
	{
		window.setTimeout(function(){ move("bullet", 0, container.offsetWidth, 5, 3);},i*100);
	}

}

function create()
{
	createConfetti("container", 200);
	document.onclick=makeConfettiFall;
}

function createConfetti(containerId, howMany)
{
	var i;
	var element;
	var result;
	i=0;
	result="";

	while(i<howMany)
	{
	element=createHTMLElement("span", "bullet"+i, "confetti", "&bull;");
	result=result + element;
	i=i+1

    }
    document.getElementById(containerId).innerHTML=result;
    i=0;
    while(i<howMany)
    {
		element=document.getElementById("bullet"+i);
		element.style.color=getRandomRGB();
		element.style.top= getRandomInteger(document.getElementById("container").offsetHeight-4-element.offsetHeight) + "px";
		element.style.left= getRandomInteger(document.getElementById("container").offsetWidth-4-element.offsetWidth) + "px";
		i=i+1;
	}

    document.onclick=makeConfettiFall;
}

function createHTMLElement(elementType, id, classInfo, content)
{



	if(elementType===null)  //div or span
	{
		elementType="";
	}
	else
	{
		elementType=trim(elementType);
	}

	if(trim(id)===null)  //id
	{
		id="";
	}
	else
	{
		id=" id=" + '"' + trim(id)+ '"';
		if(trim(id).length===0)
		{
			id="";
		}
	}
	if(trim(classInfo)===null)   //classinfo
	{
		classInfo="";
	}
	else
	{
        classInfo=" class=" + '"' + trim(classInfo)+ '"';
		if(trim(classInfo).length===0)
		{
			classInfo="";
		}
	}
	if(content===null)     //content
    {
		content="";
	}
  //trim(classInfo).length===0




	return "<" + elementType + id + classInfo + ">" + content +"</" + elementType + ">";
}


function getRandomInteger(upperLimit)
{
	var result;
	return Math.floor(Math.random()*(upperLimit+1));
    return result;
}

function getRandomRGB()
{
	var red;
	var blue;
	var green;
	red= getRandomInteger(255);
	blue= getRandomInteger(255);
	green= getRandomInteger(255);


	return"rgb(" + red + "," + green + "," + blue + ")";
}

function trim(data)
{
	var whitespace;
	var start;
	var end;
	var result;
    if(typeof data==="string")   //first if
    {
		whitespace=" \n\r\t\f";
		start=0;
		while(start<data.length && whitespace.indexOf(data.charAt(start))>=0) //first while
		{
			start=start+1;
		}
		end=data.length-1;
		while(end>=0 && whitespace.indexOf(data.charAt(end))>=0)   //second while
		{
			end=end-1;
		}
		if(end<start)    //second if
		{
			result="";
		}
		else         //else to second if
		{
			result= data.substring(start,end+1);
		}

	}
	else
	{
		result=data;
	}
return result;
}

