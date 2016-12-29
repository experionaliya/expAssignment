function validate(){
	var userName=document.getElementById("username").value;
	var password=document.getElementById("password").value;
	//validating fields cannot be empty
	if(userName==""||password==""){

		alert("FIELDS CANNOT BE EMPTY");
		window.location="index.html";
		return false;
	}

	//validating the email address format
	if (/^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/.test(userName)){

		var xhttp=new XMLHttpRequest();
		xhttp.onreadystatechange=function(){
			 if (this.readyState == 4 && this.status == 200){
				 	 var response=this.responseText;
				 	 response=JSON.parse(response);

				 	 if(response.status==200){
				 	 		window.location="gallery.html";
					 }
			 	 	else{
					 	 	alert(response.message);
					 	 	window.location="index.html";
					 }
			 }

		};
		xhttp.open("POST", "https://exptest.herokuapp.com/api/login", true);
		xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
  		xhttp.send('userName='+userName +'&password='+password);
		return false;
	}
	//Invalid email id.
	else{

		alert("PLEASE ENTER A VALID EMAIL ID!");
		window.location="index.html";
		return false;
	}
}





