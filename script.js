function validation()
{
  var source = document.getElementById("source").value;
  var pipeline = document.getElementById("pipeline").value;
  var pname = document.getElementById("pname").value;
  var bname = document.getElementById("bname").value;
  var storage = document.getElementById("storage").value;
  var cred = document.getElementById("cred").value;
  var time = document.getElementById("time").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(source.length < 5){
    text = "Please Enter valid Source";
    error_message.innerHTML = text;
    return false;
  	}
   var iChars = "!`@#$%^&*()+=-[]\\\';,./{}|\":<>?~_";


    for (var i = 0; i < source.length; i++)
    {      
  	  if (iChars.indexOf(source.charAt(i)) != -1)
        {    
            text="Your string has special characters.These are not allowed.";
            error_message.innerHTML = text;
		 	return false;
         }
     }

  
  	if(pipeline.length < 5)
  	{
   		 text = "Please Enter valid input";
   		 error_message.innerHTML = text;
   		 return false;
    }
 

    for (var i = 0; i < pipeline.length; i++)
    {      
  	  if (iChars.indexOf(pipeline.charAt(i)) != -1)
        {    
            text="NO special characters allowed.";
            error_message.innerHTML = text;
		 	return false;
         }     
     }

     if(pname.length < 5)
  	{
   		 text = "Please Enter valid Project Name";
   		 error_message.innerHTML = text;
   		 return false;
    }
  

    for (var i = 0; i < pname.length; i++)
    {      
  	  if (iChars.indexOf(pname.charAt(i)) != -1)
        {    
            text="NO special characters allowed.";
            error_message.innerHTML = text;
		 	return false;
         }
       
     }


    if(bname.length < 5)
  	{
   		 text = "Please Enter valid bucket name";
   		 error_message.innerHTML = text;
   		 return false;
    }
  

    for (var i = 0; i < bname.length; i++)
    {      
  	  if (iChars.indexOf(bname.charAt(i)) != -1)
        {    
            text="NO special characters allowed.";
            error_message.innerHTML = text;
		 	return false;
         } 
       
     }

    if(storage.length < 5)
  	{
   		 text = "Please Enter valid Storage";
   		 error_message.innerHTML = text;
   		 return false;
    }
  

    for (var i = 0; i < storage.length; i++)
    {      
  	  if (iChars.indexOf(storage.charAt(i)) != -1)
        {    
            text="NO special characters allowed.";
            error_message.innerHTML = text;
		 	return false;
         } 
       
     }


    if(cred.length < 5)
  	{
   		 text = "Please Enter valid credential";
   		 error_message.innerHTML = text;
   		 return false;
    }
  

    for (var i = 0; i < cred.length; i++)
    {      
  	  if (iChars.indexOf(cred.charAt(i)) != -1)
        {    
            text="NO special characters allowed.";
            error_message.innerHTML = text;
		 	return false;
         } 
       
     }


     if(isNaN(time) || time.length <= 3)
     {
    text = "Please Enter valid time";
    error_message.innerHTML = text;
    return false;
  }


  alert("Form Submitted Successfully!");
  return true;


}



function clear()
{   
   document.getElementById("form").reset();
}

