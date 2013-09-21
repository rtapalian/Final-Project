//Richard Tapalian
//SE240
//Final Project
//September 25, 2013


//These are the two event listeners for the two documents.
	var agreeLink1 = document.getElementById('agreeLink1');
		agreeLink1.addEventListener("click",Document1);
	
	var agreeLink2 = document.getElementById('agreeLink2');
		agreeLink2.addEventListener("click",Document2);
	
	//These are our bools to track if either document is looked at.
	var doc1 = false;
	var doc2 = false;
	
	//When document 1 is clicked an output is produced depending on whether document 2 has been clicked.
	function Document1 ()
	{
		if (doc2 == false)
		{
			alert("You have clicked on Document 1, thank you and proceed to Document2");
			doc1 = true;
		}
		else
		{
			alert("You have looked at both documents, please proceed to the scroll portion of the form");
			doc1 = true;
		}
	}
	//When document 2 is clicked an output is produced depending on whether document 1 has been clicked.
	function Document2 () 
	{
		if (doc1 == false)
		{
			alert("You have clicked on Document 2, thank you and proceed to Document1");
			doc2 = true;
		}
		else
		{
			alert("You have looked at both documents, please proceed to the scroll portion of the form");
			doc2 = true;
		}
	}
	//If the user has clicked on both documents it checks to see if the user scrolled to the bottom of the terms section
	//If the user scrolls to the bottom the radio buttons are enabled.
	function DocScroll () 
	{
		if (doc1 == true && doc2 == true)
		{
			if(objDiv.scrollTop == (objDiv.scrollHeight-objDiv.offsetHeight))
			{
				document.getElementById('agree').disabled=false;
				document.getElementById('notagree').disabled=false;
			}
		}
	}
	//When continue is pressed an output is produced depending on if you agree or disagree.
	function submitButt()
	{
			if(document.getElementById('agree').checked) 
			{
				alert("Thank you for your submission you are cleared for full access");
  
			}
			else if(document.getElementById('notagree').checked)
			{
				alert("I'm sorry but you will have to agree to terms to continue");
			}
	}
	
	
//This is the scroll event listener	
	var objDiv = document.getElementById("agreeScroll");
	objDiv.addEventListener("scroll",DocScroll);
//This is the continue button event listener
	var subMit = document.getElementById("submitAgreement");
	subMit.addEventListener("click", submitButt);
	
	

	
	
	
