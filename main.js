// JavaScript Document
/*------------------------------------------------------------------------------------------------------------------------

												Achiraya Thawin s279067
							
---------------------------------------------------------------------------------------------------------------------------*/
//
//
//
//
/*---------------------------------------------------------
					Button for sign up	& log In			
------------------------------------------------------------*/

var modal = document.getElementById('signup');

//  close login container
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var modalLogin = document.getElementById('login');

window.onclick = function(event) {
    if (event.target == modalLogin) {
        modal.style.display = "none";
    }
}
/*-----------------------------------------------------------------------
							slide show
------------------------------------------------------------------------*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
//loop through slides
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active__dot", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active__dot";
}


    $(document).ready(function(){
      $('.slider').slider();
    });     

// Pause slider
$('.slider').slider('pause');
// Start slider
$('.slider').slider('start');
// Next slide
$('.slider').slider('next');
// Previous slide
$('.slider').slider('prev');
     
/*-----------------------------------------------------------------------------------
									Email Validation
------------------------------------------------------------------------------------*/
function ValidateEmail(inputText)  
{  
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(inputText.value.match(mailformat))  
{  
document.form1.text1.focus();  
return true;  
}  
else  
{  
alert("invalid email! Please try again");  
document.form1.text1.focus();  
return false;  
}  
}  
/*-----------------------------------------------------------------------------------
									References
------------------------------------------------------------------------------------*/
								
/*
Sign up and Log in pop up
		w3schools.com,https://www.w3schools.com/howto/howto_css_login_form.asp
		George, S 2015,https://medium.com/swlh/creative-form-input-field-design-examples-bfe5dd50808a
----
Slideshow
		w3schools,n.d, https://www.w3schools.com/howto/howto_js_slideshow.asp
		Materialize,n.d,http://materializecss.com/media.html
---
Validatation
		w3Resorce, 2017,http://www.w3resource.com/javascript/form/email-validation.php
*/	

/* images
slides1 : https://www.cloudways.com/blog/a-guide-to-choosing-a-web-designer-for-your-website/
slides2 : https://www.clarizen.com/project-management-marketing-terms-you-should-know/
slides3 : http://weheartit.com/larabcg/collections/98400363-colorful
slides4 : https://www.nicedigitals.com/blog/
backgound image: http://designwoop.com/2012/03/20-free-subtle-textures-for-backgrounds/
