function validate()
{

	let tobj1 = document.getElementById("fname");
	let tobj2 = document.getElementById("lname");
	let tobj3 = document.getElementById("email");
	let tobj4 = document.getElementById("phone");
	let tobj5 = document.getElementById("inq");
	let tobj6 = document.getElementById("company");


	var name = tobj1.value;
	var lname1 = tobj2.value;
	var email = tobj3.value;
	var phone1 = tobj4.value;
	var inq = tobj5.value;
	var company = tobj6.value;


	if(name=="")
	{
		var sp1=document.getElementById("span1");

		tobj1.style.backgroundColor="red";
		sp1.style.color="red";
		sp1.innerHTML="Red Fields Compulsory";
		return false
	}


	if(lname1=="")
	{
		var sp1=document.getElementById("span1");

		tobj2.style.backgroundColor="red";
		sp1.style.color="red";
		sp1.innerHTML="Red Fields Compulsory";
		return false
	}

	if(email=="")
	{
		var sp1=document.getElementById("span1");

		tobj3.style.backgroundColor="red";
		sp1.style.color="red";
		sp1.innerHTML="Red Fields Compulsory";
		return false
	}









	if(phone1=="")
	{
		var sp1=document.getElementById("span1");

		tobj4.style.backgroundColor="red";
		sp1.style.color="red";
		sp1.innerHTML="Red Fields Compulsory";
		return false
	}


	if(inq=="")
	{
		var sp1=document.getElementById("span1");

		tobj5.style.backgroundColor="red";
		sp1.style.color="red";
		sp1.innerHTML="Red Fields Compulsory";
		return false
	}

	if(company=="")
	{
		var sp1=document.getElementById("span1");

		tobj6.style.backgroundColor="red";
		sp1.style.color="red";
		sp1.innerHTML="Red Fields Compulsory";
		return false
	}


	if(name=="" && lname1=="" && email=="" && inq=="" && company=="" ) 
	{
		var sp1=document.getElementById("span1");
		sp1.style.color="red";
		sp1.innerHTML="Red Fields Compulsory";

		
		return false;
	}


	
	else
	{
		return true;
	}

}

