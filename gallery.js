function logout(){
		var confirmation=confirm("Do you want to logout?");
		if(confirmation==true){
				window.location="index.html";
		}
}

var xhttp2=new XMLHttpRequest();
xhttp2.onreadystatechange=function(){

	if (this.readyState == 4 && this.status == 200){
		var response=this.responseText;
		response=JSON.parse(response);
		for(var i=0;i<response.data.length;i++){

				var url=response.data[i].imageUrl ;
				var caption=document.createTextNode(response.data[i].caption);
				var element=document.createElement("div");
				element.className="container";

				var elem = document.createElement("img");
				elem.setAttribute("src", url);
				elem.setAttribute("height", "200");
				elem.setAttribute("width", "200");
				elem.setAttribute("alt", "IMAGE");
				
				
				document.getElementById("image").appendChild(element);
				element.appendChild(elem);
				element.appendChild(caption);
		}
				
	}

};
xhttp2.open("GET","https://exptest.herokuapp.com/api/imageGallery", true);
xhttp2.setRequestHeader('Content-type','application/x-www-form-urlencoded');
xhttp2.send();
  		
	

