var slideshow_container =  document.createElement("div");
slideshow_container.style.maxWidth = '1000px';
slideshow_container.style.position = "relative";
slideshow_container.style.margin = "auto";

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  

function showSlides(n) {
    var i;
    var sliders = document.getElementsByClassName('mySlides');
   
  //   var dots = document.getElementsByClassName('dot');
  //   if (n > sliders.length) {slideIndex = 1}    
  //   if (n < 1) {slideIndex = sliders.length}
  //   for (i = 0; i < sliders.length; i++) {
  //       sliders[i].style.display = "none";  
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //       dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   sliders[slideIndex-1].style.display = "block";  
  //  dots[slideIndex-1].className += " active";
  }


document.body.appendChild(slideshow_container);
var mySlides1 =  document.createElement("div");
mySlides1.className = "mySlides";
var mySlides2 =  document.createElement("div");
mySlides2.className = "mySlides";
var mySlides3 =  document.createElement("div");
mySlides3.className = "mySlides";
document.getElementsByClassName("mySlides").display = "none";


var bottomDot =  document.createElement("div");
bottomDot.style.textAlign = "center";
var dot1 =  document.createElement("span");
dot1.className = "dot";
dot1.addEventListener("click",currentSlide(1));
var dot2 =  document.createElement("span");
dot2.className = "dot";
dot2.addEventListener("click",currentSlide(2));
var dot3 =  document.createElement("span");
dot3.className = "dot";
dot3.addEventListener("click",currentSlide(3));
var dot = document.querySelectorAll(".dot");
dot.cursor = "pointer";
dot.heigh = "15px";
dot.width = "15px";
dot.margin = "0 2px";
dot.backgroundColor = "#bbb";
dot.borderRadius = "50%";
dot.display = "inline-block";
dot.transition = "background-color 0.6s ease";

bottomDot.appendChild(dot1);
bottomDot.appendChild(dot2);
bottomDot.appendChild(dot3);


var prev =  document.createElement("a");
prev.innerHTML = "&#10094";
prev.style.cursor = "pointer";
prev.style.position = "absoulute";
prev.style.top = "50%";
prev.style.width = "auto";
prev.style.padding= "16px";
prev.style.marginTop= "-22px";
prev.style.color= "white";
prev.style.fontWeight= "bold";
prev.style.fontSize= "18px";
prev.style.transition= "0.6s ease";
prev.style.borderRadius= "0 3px 3px 0";
prev.style.userSelect= "none";
prev.addEventListener("hover",function(){
    next.style.borderBlockColor=rgba(0,0,0,0.8);
});
prev.addEventListener("click",plusSlides(-1));


var next =  document.createElement("a");
next.innerHTML = "&#10095";
next.style.cursor = "pointer";
next.style.position = "absoulute";
next.style.top = "50%";
next.style.width = "auto";
next.style.padding= "16px";
next.style.marginTop= "-22px";
next.style.color= "white";
next.style.fontWeight= "bold";
next.style.fontSize= "18px";
next.style.transition= "0.6s ease";
next.style.borderRadius= "0 3px 3px 0";
next.style.userSelect= "none";
next.style.right = 0;
next.style.borderRadius = "3px 0 0 3px";
next.addEventListener("hover",function(){
    next.style.borderBlockColor=rgba(0,0,0,0.8);
});
next.addEventListener("click",plusSlides(1));


slideshow_container.appendChild(mySlides1);
slideshow_container.appendChild(mySlides2);
slideshow_container.appendChild(mySlides3);
slideshow_container.appendChild(prev);
slideshow_container.appendChild(next);

document.body.appendChild(bottomDot);

var img1 = document.createElement("img");
img1.src = "image1.jpg";
img1.style.height = "300px";
img1.style.width = "100%";
mySlides1.appendChild(img1);

var img2 = document.createElement("img");
img2.src = "image2.jpg";
img2.style.height = "300px";
img2.style.width = "100%";
mySlides2.appendChild(img2);


var img3 = document.createElement("img");
img3.src = "image3.jpg";
img3.style.height = "300px";
img3.style.width = "100%";
mySlides3.appendChild(img3);





